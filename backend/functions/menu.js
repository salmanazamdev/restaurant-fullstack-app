const pool = require('../database/database');

// 1. Create a new menu item
const createMenuItem = async (req, res) => {
    const { restaurant_id, name, description, price } = req.body;

    if (!restaurant_id || !name || !price) {
        return res.status(400).json({ message: 'restaurant_id, name, and price are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO menu_items (restaurant_id, name, description, price) VALUES ($1, $2, $3, $4) RETURNING *',
            [restaurant_id, name, description || '', price]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating menu item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// 2. Get all menu items for a specific restaurant
const getMenuItemsByRestaurant = async (req, res) => {
    const { restaurantId } = req.params;

    try {
        const result = await pool.query(
            'SELECT * FROM menu_items WHERE restaurant_id = $1',
            [restaurantId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No menu items found for this restaurant' });
        }

        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// 3. Update a menu item by ID
const updateMenuItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    try {
        const existing = await pool.query('SELECT * FROM menu_items WHERE item_id = $1', [id]);

        if (existing.rows.length === 0) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        const updated = await pool.query(
            'UPDATE menu_items SET name = $1, description = $2, price = $3, updated_at = CURRENT_TIMESTAMP WHERE item_id = $4 RETURNING *',
            [name || existing.rows[0].name, description || existing.rows[0].description, price || existing.rows[0].price, id]
        );

        res.json(updated.rows[0]);
    } catch (error) {
        console.error('Error updating menu item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// 4. Delete a menu item by ID
const deleteMenuItem = async (req, res) => {
    const { id } = req.params;

    try {
        const existing = await pool.query('SELECT * FROM menu_items WHERE item_id = $1', [id]);

        if (existing.rows.length === 0) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        await pool.query('DELETE FROM menu_items WHERE item_id = $1', [id]);
        res.send('Menu item deleted successfully');
    } catch (error) {
        console.error('Error deleting menu item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createMenuItem,
    getMenuItemsByRestaurant,
    updateMenuItem,
    deleteMenuItem
};
