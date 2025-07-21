const pool = require('../database/database');

// 1. Create Customer
const createCustomer = async (req, res) => {
  const { restaurant_id, name, email, phone } = req.body;

  if (!restaurant_id || !name || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existing = await pool.query('SELECT * FROM restaurant_customers WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ message: 'Customer already exists' });
    }

    await pool.query(
      'INSERT INTO restaurant_customers (restaurant_id, name, email, phone) VALUES ($1, $2, $3, $4)',
      [restaurant_id, name, email, phone]
    );
    res.status(201).json({ message: 'Customer created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 2. Get Customers by Restaurant ID
const getCustomersByRestaurant = async (req, res) => {
  const { restaurantId } = req.params;

  try {
    const customers = await pool.query(
      'SELECT * FROM restaurant_customers WHERE restaurant_id = $1',
      [restaurantId]
    );

    res.status(200).json(customers.rows);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 3. Update Customer by ID
const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  try {
    const customer = await pool.query(
      'SELECT * FROM restaurant_customers WHERE customer_id = $1',
      [id]
    );

    if (customer.rows.length === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    await pool.query(
      'UPDATE restaurant_customers SET name = $1, email = $2, phone = $3 WHERE customer_id = $4',
      [name, email, phone, id]
    );

    res.status(200).json({ message: 'Customer updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 4. Delete Customer by ID
const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM restaurant_customers WHERE customer_id = $1',
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createCustomer,
  getCustomersByRestaurant,
  updateCustomer,
  deleteCustomer
};
