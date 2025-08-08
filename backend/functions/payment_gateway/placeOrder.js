const pool = require('../../database/database');

const placeOrder = async (req, res) => {
  const { paymentMethod, address, country = 'Pakistan' } = req.body;
  const userId = req.user?.id;

  if (!paymentMethod || !address) {
    return res.status(400).json({ error: 'Payment method and address are required' });
  }

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // 1. Insert or reuse address
    const addressResult = await client.query(
      `INSERT INTO user_addresses (user_id, address, country)
       VALUES ($1, $2, $3)
       ON CONFLICT (user_id) DO UPDATE 
         SET address = EXCLUDED.address, 
             country = EXCLUDED.country, 
             updated_at = CURRENT_TIMESTAMP
       RETURNING address_id`,
      [userId, address, country]
    );
    const addressId = addressResult.rows[0].address_id;

    // 2. Get user's cart
    const cartResult = await client.query(
      `SELECT * FROM cart_items WHERE user_id = $1`,
      [userId]
    );
    const cartItems = cartResult.rows;

    if (cartItems.length === 0) {
      await client.query('ROLLBACK');
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const subtotal = cartItems.reduce((acc, item) => acc + Number(item.total_price), 0);
    const deliveryFee = 150;
    const total = subtotal + deliveryFee;

    // 3. Assume single restaurant
    const restaurantId = cartItems[0].restaurant_id;

    // 4. Insert order
    const orderResult = await client.query(
      `INSERT INTO orders (user_id, restaurant_id, address_id, total_amount, delivery_fee, payment_method)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING order_id`,
      [userId, restaurantId, addressId, total, deliveryFee, paymentMethod]
    );
    const orderId = orderResult.rows[0].order_id;

    // 5. Insert order items (requires order_items table)
    for (const item of cartItems) {
      await client.query(
        `INSERT INTO order_items (order_id, item_id, quantity)
         VALUES ($1, $2, $3)`,
        [orderId, item.menu_item_id, item.quantity]
      );
    }

    // 6. Clear cart
    await client.query(`DELETE FROM cart_items WHERE user_id = $1`, [userId]);

    await client.query('COMMIT');
    res.status(200).json({ message: 'Order placed successfully', orderId });

  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Order error:', error);
    res.status(500).json({ error: 'Failed to place order', details: error.message });
  } finally {
    client.release();
  }
};

module.exports = placeOrder;
