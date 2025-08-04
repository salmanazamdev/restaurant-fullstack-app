// functions/cart/addItemsToCart.js

const pool = require('../../database/database');

const addItemsToCart = async (req, res) => {
  const { orderId, menuItemId, quantity } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO order_items (order_id, menu_item_id, quantity) VALUES ($1, $2, $3) RETURNING *',
      [orderId, menuItemId, quantity]
    );

    res.status(201).json({ message: 'Item added to cart', item: result.rows[0] });
  } catch (err) {
    console.error('Error adding item to cart:', err);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

module.exports = addItemsToCart;
