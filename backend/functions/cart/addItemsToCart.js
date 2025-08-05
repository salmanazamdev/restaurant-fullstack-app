const pool = require('../../database/database');

const addItemsToCart = async (req, res) => {
  const { userId, menuItemId, restaurantId, quantity, note } = req.body;

  try {
    // Get item price from menu_items table
    const itemResult = await pool.query(
      'SELECT price FROM menu_items WHERE item_id = $1',
      [menuItemId]
    );

    if (itemResult.rows.length === 0) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    const itemPrice = itemResult.rows[0].price;
    const totalPrice = itemPrice * quantity;

    const result = await pool.query(
      `INSERT INTO cart_items 
        (user_id, menu_item_id, restaurant_id, quantity, price, total_price, note) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [userId, menuItemId, restaurantId, quantity, itemPrice, totalPrice, note]
    );

    res.status(201).json(result.rows[0]);

  } catch (err) {
    console.error('Error adding item to cart:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = addItemsToCart;
