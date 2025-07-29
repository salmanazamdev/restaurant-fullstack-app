const pool = require('../../database/database')

const getRestaurantsByCategoryId = async (req,res) => {
    const {categoryId} = req.params;
    
    
    try {
        const result = await pool.query(
            'SELECT * FROM restaurants WHERE category_id = $1',
            [categoryId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No restaurants found for this category' });
        }

        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = getRestaurantsByCategoryId;