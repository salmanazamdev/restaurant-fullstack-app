const pool = require('../../database/database')

const getRestaurantById = async (req, res) => {
    const { restaurantId } = req.params;

    try {
        // Get restaurant details, avg rating, rating count, and price
        const restaurantResult = await pool.query(
            `SELECT r.*,
                COALESCE(ROUND(AVG(rr.rating)::numeric, 1), 0) AS avg_rating,
                COUNT(rr.rating) AS rating_count,
                (
                    SELECT MIN(mi.price)
                    FROM menu_items mi
                    WHERE mi.restaurant_id = r.restaurant_id
                ) AS price
            FROM restaurants r
            LEFT JOIN restaurant_ratings rr ON rr.restaurant_id = r.restaurant_id
            WHERE r.restaurant_id = $1
            GROUP BY r.restaurant_id;`,
            [restaurantId]
        );

        if (restaurantResult.rows.length === 0) {
            return res.status(404).json({ message: 'No restaurant found for this Id' });
        }

        // Get menu items for this restaurant
        const menuResult = await pool.query(
            'SELECT * FROM menu_items WHERE restaurant_id = $1',
            [restaurantId]
        );

        res.json({
            ...restaurantResult.rows[0],
            menu_items: menuResult.rows
        });
    } catch (error) {
        console.error('Error fetching restaurant:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = getRestaurantById;