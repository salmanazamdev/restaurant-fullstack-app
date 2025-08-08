const pool = require('../../database/database');

const placeOrder = async (req, res) => {
  try {
    const { userId, addressId, paymentMethod, items } = req.body;

    if (!userId || !addressId || !paymentMethod || !items || !items.length) {
      return res.status(400).json({ error: "All order fields are required" });
    }

    // Calculate total amount from items
    let totalAmount = 0;
    for (const item of items) {
      if (!item.price || !item.quantity) {
        return res.status(400).json({ error: "Each item must have price and quantity" });
      }
      totalAmount += item.price * item.quantity;
    }

    // Insert into orders table
    const [orderResult] = await pool.query(
      `INSERT INTO orders (user_id, address_id, payment_method, total_amount, status)
       VALUES (?, ?, ?, ?, 'Pending')`,
      [userId, addressId, paymentMethod, totalAmount]
    );

    const orderId = orderResult.insertId;

    // Insert items into order_items table
    for (const item of items) {
      await pool.query(
        `INSERT INTO order_items (order_id, item_id, quantity, price, total_price)
         VALUES (?, ?, ?, ?, ?)`,
        [
          orderId,
          item.item_id,
          item.quantity,
          item.price,
          item.price * item.quantity 
        ]
      );
    }

    // Clear user's cart after placing order
    await pool.query(`DELETE FROM cart WHERE user_id = ?`, [userId]);

    res.status(201).json({
      message: "Order placed successfully",
      orderId,
      totalAmount
    });

  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
};

module.exports = placeOrder;
