// Import Required Packages
const express = require('express');

// Import Route Handlers (Functions)
const welcome = require('./functions/welcome');
const signup = require('./functions/signup');
const login = require('./functions/login');

// Import Restaurant API Handlers
const {
  createRestaurant,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant
} = require('./functions/restaurant');

// Import Menu API Handlers
const {
  createMenuItem,
  getMenuItemsByRestaurant,
  updateMenuItem,
  deleteMenuItem
} = require('./functions/menu');

// Import Customer API Handlers
const {
  createCustomer,
  getCustomersByRestaurant,
  updateCustomer,
  deleteCustomer
} = require('./functions/customer');

// Import Order API Handlers
const {
  createOrder,
  getOrdersByRestaurantId,
  updateOrderById
} = require('./functions/order');

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Basic Route
app.get('/', welcome);

// Authentication Routes
app.post('/signup', signup);
app.post('/login', login);

// Restaurant CRUD APIs
app.post('/restaurants', createRestaurant);
app.get('/restaurants', getRestaurants);
app.put('/restaurants/:id', updateRestaurant);
app.delete('/restaurants/:id', deleteRestaurant);

// Menu CRUD APIs
app.post('/menus', createMenuItem);
app.get('/menus/:restaurantId', getMenuItemsByRestaurant);
app.put('/menus/:id', updateMenuItem);
app.delete('/menus/:id', deleteMenuItem);

// Customer CRUD APIs // crud means create, read, update, delete
app.post('/customers', createCustomer);
app.get('/customers/:restaurantId', getCustomersByRestaurant);
app.put('/customers/:id', updateCustomer);
app.delete('/customers/:id', deleteCustomer);

// Order APIs
app.post('/orders', createOrder);
app.get('/orders/:restaurantId', getOrdersByRestaurantId);
app.put('/orders/:id', updateOrderById);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
