const pool = require('../../database/database');

const getRatingsByRestaurantId = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const result = await pool.query(
      `SELECT 
         COALESCE(AVG(rating), 0) AS avg_rating, 
         COUNT(rating) AS rating_count 
       FROM restaurant_ratings 
       WHERE restaurant_id = $1`,
      [restaurantId]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching rating:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getRatingsByRestaurantId;