-- Users
INSERT INTO users (username, email, password)
VALUES 
('salman', 'salman.dev@sample.com', 'hashedpassword1'),
('essa', 'essa.khan@sample.com', 'hashedpassword2');

-- Restaurants (Islamabad-based mock data)
INSERT INTO restaurants (name, address, phone, email)
VALUES 
('Chikachino F-7', 'F-7 Markaz, Islamabad', '03001234567', 'f7@chikachino.com'),
('Butt Karahi G-9', 'G-9 Markaz, Islamabad', '03121234567', 'g9@buttkarahi.pk');

-- Menu Items
INSERT INTO menu_items (restaurant_id, name, description, price)
VALUES 
(1, 'Chicken Tikka Roll', 'Spicy grilled chicken wrapped in naan', 450.00),
(1, 'Doodh Patti Chai', 'Strong milk tea with elaichi', 120.00),
(2, 'Mutton Karahi (Half)', 'Traditional spicy mutton cooked in karahi', 1500.00),
(2, 'Roghni Naan', 'Soft bread with sesame seeds', 50.00);

-- Customers
INSERT INTO restaurant_customers (restaurant_id, name, email, phone)
VALUES 
(1, 'Ali Raza', 'ali.raza@samplemail.com', '03031231231'),
(2, 'Zainab Bukhari', 'zainab.bukhari@samplemail.com', '03111234567');

-- Orders
INSERT INTO orders (customer_id, restaurant_id, total_amount, status)
VALUES 
(1, 1, 570.00, 'completed'),
(2, 2, 1550.00, 'pending');
