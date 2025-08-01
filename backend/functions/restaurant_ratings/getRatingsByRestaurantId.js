const pool = require('../../database/database');

const getRatingsByRestaurantId = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const result = await pool.query(
      `SELECT rr.*, u.username, u.email
       FROM restaurant_ratings rr
       JOIN users u ON rr.user_id = u.user_id
       WHERE rr.restaurant_id = $1
       ORDER BY rr.created_at DESC`,
      [restaurantId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getRatingsByRestaurantId;