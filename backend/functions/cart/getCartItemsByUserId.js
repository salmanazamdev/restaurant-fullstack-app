const pool = require('../../database/database');

const getCartItemsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(`
      SELECT 
        ci.cart_item_id,
        ci.quantity,
        ci.note,
        mi.menu_item_id,
        mi.name AS item_name,
        mi.price,
        r.restaurant_id,
        r.name AS restaurant_name
      FROM cart_items ci
      JOIN menu_items mi ON ci.menu_item_id = mi.menu_item_id
      JOIN restaurants r ON mi.restaurant_id = r.restaurant_id
      WHERE ci.user_id = $1
    `, [userId]);

    res.status(200).json({ cartItems: result.rows });
  } catch (err) {
    console.error('Error fetching cart items:', err);
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

module.exports = getCartItemsByUserId;
