-- Users
INSERT INTO users (username, email, password)
VALUES 
('salman', 'salman.dev@sample.com', 'hashedpassword1'),
('essa', 'essa.khan@sample.com', 'hashedpassword2');

-- Seed Categories
INSERT INTO categories (category_name, category_description) VALUES
('Fast Food', 'Quick service meals like burgers and fries.'),
('Italian', 'Italian cuisine with pasta and pizza options.'),
('Chinese', 'Authentic and modern Chinese dishes.'),
('BBQ', 'Grilled and barbecued meat specialties.');

-- Seed Restaurants
INSERT INTO restaurants (name, address, phone, email, category_id) VALUES
('Burger Town', '123 Main Street', '123-456-7890', 'contact@burgertown.com', 1),
('Luigi’s Pasta', '456 Pasta Lane', '321-654-0987', 'hello@luigispasta.com', 2),
('Great Wall Express', '789 Noodle Rd', '555-666-7777', 'order@greatwall.com', 3);

-- Seed Menu Items
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(1, 'Cheeseburger', 'Juicy beef patty with cheese and lettuce.', 5.99),
(1, 'Fries', 'Crispy golden French fries.', 2.49),
(2, 'Spaghetti Carbonara', 'Creamy pasta with bacon and parmesan.', 9.99),
(2, 'Margherita Pizza', 'Classic pizza with tomato, mozzarella, and basil.', 11.50),
(3, 'Kung Pao Chicken', 'Spicy stir-fried chicken with peanuts.', 8.75),
(3, 'Fried Rice', 'Fried rice with vegetables and egg.', 4.99);

-- Seed Restaurant Customers
INSERT INTO restaurant_customers (restaurant_id, name, email, phone) VALUES
(1, 'Ali Khan', 'ali.khan@example.com', '0300-1234567'),
(2, 'Sara Ahmed', 'sara.ahmed@example.com', '0301-2345678'),
(3, 'John Doe', 'john.doe@example.com', '0302-3456789');

-- Seed Orders
INSERT INTO orders (customer_id, restaurant_id, total_amount, status) VALUES
(1, 1, 8.48, 'Completed'),
(2, 2, 21.49, 'Pending'),
(3, 3, 13.74, 'Preparing');
