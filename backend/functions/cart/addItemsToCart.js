const pool = require('../../database/database');

const addItemsToCart = async (req, res) => {
  const { userId, menuItemId, quantity, note } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO cart_items (user_id, menu_item_id, quantity, note)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [userId, menuItemId, quantity, note || null]
    );

    res.status(201).json({ message: 'Item added to cart', item: result.rows[0] });
  } catch (err) {
    console.error('Error adding item to cart:', err);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

module.exports = addItemsToCart;
