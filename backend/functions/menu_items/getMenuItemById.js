const pool = require('../../database/database');

const getMenuItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM menu_items WHERE item_id = $1',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching menu item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getMenuItemById;