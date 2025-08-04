const pool = require('../../database/database');

const getCartItemsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(`
      SELECT 
        oi.order_item_id,
        oi.quantity,
        oi.note,
        mi.menu_item_id,
        mi.name AS item_name,
        mi.price,
        o.order_id,
        o.status
      FROM order_items oi
      JOIN orders o ON oi.order_id = o.order_id
      JOIN menu_items mi ON oi.menu_item_id = mi.menu_item_id
      WHERE o.user_id = $1
    `, [userId]);

    res.status(200).json({ cartItems: result.rows });
  } catch (err) {
    console.error('Error fetching cart items:', err);
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

module.exports = getCartItemsByUserId;