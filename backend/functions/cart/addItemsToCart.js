const pool = require('../../database/database');

const addItemsToCart = async (req, res) => {
  const { userId, menuItemId, restaurantId, quantity, note } = req.body;

  try {
    // 1. Fetch the price of the menu item
    const priceResult = await pool.query(
      'SELECT price FROM menu_items WHERE item_id = $1',
      [menuItemId]
    );

    if (priceResult.rows.length === 0) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    const price = priceResult.rows[0].price;

    // 2. Insert into cart_items
    const result = await pool.query(
      `INSERT INTO cart_items 
        (user_id, menu_item_id, restaurant_id, quantity, price, note)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [userId, menuItemId, restaurantId, quantity, price, note || null]
    );

    res.status(201).json({ message: 'Item added to cart', item: result.rows[0] });
  } catch (err) {
    console.error('Error adding item to cart:', err);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

module.exports = addItemsToCart;
