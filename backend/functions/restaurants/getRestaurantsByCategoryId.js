const pool = require('../../database/database');

const getRestaurantsByCategoryId = async (req, res) => {
    const { categoryId } = req.params;

    try {
        const query = `
            SELECT
                r.*,
                COALESCE(ROUND(AVG(rr.rating)::numeric, 1), 0) AS avg_rating,
                COUNT(rr.rating) AS rating_count,
                (
                    SELECT MIN(mi.price)
                    FROM menu_items mi
                    WHERE mi.restaurant_id = r.restaurant_id
                ) AS price
            FROM restaurants r
            LEFT JOIN restaurant_ratings rr ON rr.restaurant_id = r.restaurant_id
            WHERE r.category_id = $1
            GROUP BY r.restaurant_id;
        `;

        const result = await pool.query(query, [categoryId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No restaurants found for this category' });
        }

        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching restaurants with ratings and prices:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = getRestaurantsByCategoryId;
