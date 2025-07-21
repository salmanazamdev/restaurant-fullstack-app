const pool = require('../database/database');

// Create a new restaurant
const createRestaurant = async (req, res) => {
    const { name, address, phone, email } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO restaurants (name, address, phone, email) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, address, phone, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create restaurant' });
    }
};

// Get all restaurants
const getRestaurants = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM restaurants');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch restaurants' });
    }
};

// Update a restaurant by ID
const updateRestaurant = async (req, res) => {
    const id = req.params.id;
    const { name, address, phone, email } = req.body;

    try {
        const result = await pool.query(
            'UPDATE restaurants SET name = $1, address = $2, phone = $3, email = $4, updated_at = CURRENT_TIMESTAMP WHERE restaurant_id = $5 RETURNING *',
            [name, address, phone, email, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update restaurant' });
    }
};

// Delete a restaurant by ID
const deleteRestaurant = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await pool.query('DELETE FROM restaurants WHERE restaurant_id = $1', [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete restaurant' });
    }
};

module.exports = {
    createRestaurant,
    getRestaurants,
    updateRestaurant,
    deleteRestaurant
};
