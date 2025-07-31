const pool = require('../../database/database')

const getRestaurantById = async (req,res) => {
    const {restaurantId} = req.params;
    
    
    try {
        const result = await pool.query(
            'SELECT * FROM restaurants WHERE restaurant_id = $1',
            [restaurantId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No restaurant found for this Id' });
        }

        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching restaurant:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = getRestaurantById;