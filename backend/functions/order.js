const pool = require('../database/database');

// 1. Create a new order
const createOrder = async (req, res) => {
  const { customer_id, restaurant_id, total_amount, status } = req.body;

  if (!customer_id || !restaurant_id || !total_amount || !status) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO orders (customer_id, restaurant_id, total_amount, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [customer_id, restaurant_id, total_amount, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 2. Get all orders for a restaurant
const getOrdersByRestaurantId = async (req, res) => {
  const restaurantId = req.params.restaurantId;

  try {
    const result = await pool.query(
      'SELECT * FROM orders WHERE restaurant_id = $1',
      [restaurantId]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 3. Update an order by its ID
const updateOrderById = async (req, res) => {
  const orderId = req.params.id;
  const { total_amount, status } = req.body;

  try {
    const result = await pool.query(
      'UPDATE orders SET total_amount = $1, status = $2, updated_at = CURRENT_TIMESTAMP WHERE order_id = $3 RETURNING *',
      [total_amount, status, orderId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createOrder,
  getOrdersByRestaurantId,
  updateOrderById
};
