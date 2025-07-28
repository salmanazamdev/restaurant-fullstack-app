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
const getCategories = require('./functions/categories/getCategories');
const loggin = require('./middleware/loggin');
const getRestaurentsByCategoryId = require('./functions/restaurents/getRestaurentsByCategoryId');

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Basic Route
app.get('/', loggin, welcome);

// Authentication Routes
app.post('/signup', loggin, signup);
app.post('/login', loggin, login);

// Restaurant CRUD APIs
app.post('/restaurants', loggin, createRestaurant);
app.get('/restaurants', loggin, getRestaurants);
app.put('/restaurants/:id', loggin, updateRestaurant);
app.delete('/restaurants/:id', loggin, deleteRestaurant);

// Menu CRUD APIs
app.post('/menus', loggin, createMenuItem);
app.get('/menus/:restaurantId', loggin, getMenuItemsByRestaurant);
app.put('/menus/:id', loggin, updateMenuItem);
app.delete('/menus/:id', loggin, deleteMenuItem);

// Customer CRUD APIs // crud means create, read, update, delete
app.post('/customers', loggin, createCustomer);
app.get('/customers/:restaurantId', loggin, getCustomersByRestaurant);
app.put('/customers/:id', loggin, updateCustomer);
app.delete('/customers/:id', loggin, deleteCustomer);

// Order APIs
app.post('/orders', loggin, createOrder);
app.get('/orders/:restaurantId', loggin, getOrdersByRestaurantId);
app.put('/orders/:id', loggin, updateOrderById);

// Categories
app.get('/categories', loggin, getCategories);
app.get('/categories/:categoryId/restaurents', loggin, getRestaurentsByCategoryId);


// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
