-- Users
INSERT INTO users (username, email, password)
VALUES 
('salman', 'salman.dev@sample.com', 'hashedpassword1'),
('essa', 'essa.khan@sample.com', 'hashedpassword2');

-- Seed Categories
INSERT INTO categories (category_name, category_description, image_url) VALUES
('Hamburger', 'Restaurants specializing in burgers and sandwich-style meals.', 'https://cdn-icons-png.flaticon.com/128/3075/3075977.png'),
('Pizza', 'Pizzerias serving a variety of traditional and modern pizzas.', 'https://cdn-icons-png.flaticon.com/128/6978/6978255.png'),
('Noodle', 'Places offering Asian-style noodles and ramen.', 'https://cdn-icons-png.flaticon.com/128/3041/3041130.png'),
('Meat', 'Meat-heavy menus like BBQ, steak, and kebabs.', 'https://cdn-icons-png.flaticon.com/128/1046/1046769.png'),
('Vegetable', 'Vegetarian and plant-based focused cuisine.', 'https://cdn-icons-png.flaticon.com/128/2153/2153786.png'),
('Dessert', 'Dessert shops offering cakes, ice creams, and sweets.', 'https://cdn-icons-png.flaticon.com/128/4465/4465242.png'),
('Drink', 'Juice bars, cafes, and beverage-focused spots.', 'https://cdn-icons-png.flaticon.com/128/2405/2405479.png'),
('Bread', 'Bakeries offering fresh, handmade bread loaves and buns.', 'https://cdn-icons-png.flaticon.com/128/3014/3014502.png'),
('Croissant', 'Specialty patisseries offering croissants and French pastries.', 'https://cdn-icons-png.flaticon.com/128/5787/5787330.png'),
('Pancakes', 'Breakfast spots with pancakes, waffles, and syrup-heavy dishes.', 'https://cdn-icons-png.flaticon.com/128/8688/8688560.png'),
('Cheese', 'Restaurants known for cheese-centric dishes and platters.', 'https://cdn-icons-png.flaticon.com/128/819/819827.png'),
('FrenchFries', 'Fries-focused fast food outlets and side dish experts.', 'https://cdn-icons-png.flaticon.com/128/5787/5787020.png');


-- Seed Restaurants
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Burger Republic', '101 Burger Lane', '0311-1111111', 'info@burgerrepublic.com', 1, 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg'),
('Pizza Haven', '202 Mozzarella St', '0312-2222222', 'order@pizzahaven.com', 2, ' '),
('Noodle House', '303 Wok Way', '0313-3333333', 'hello@noodlehouse.com', 3, ' '),
('Meat Feast Grill', '404 BBQ Blvd', '0314-4444444', 'grill@meatfeast.com', 4, ' '),
('Green Leaf Bites', '505 Veggie Ave', '0315-5555555', 'support@greenleaf.com', 5, ' '),
('Sweet Tooth', '606 Sugar St', '0316-6666666', 'contact@sweettooth.com', 6, ' '),
('Sip & Chill', '707 Beverage Rd', '0317-7777777', 'hello@sipnchill.com', 7, ' '),
('Bread Box', '808 Loaf Street', '0318-8888888', 'info@breadbox.com', 8, ' '),
('Paris Bakes', '909 Croissant Blvd', '0319-9999999', 'paris@croissants.com', 9, ' '),
('Fluffy Stack', '1010 Pancake Plaza', '0320-0000000', 'fluffy@pancakestack.com', 10, ' '),
('Cheese Cave', '111 Cheddar Alley', '0321-1111111', 'melt@cheesecave.com', 11, ' '),
('Fry Station', '1212 Crunchy Rd', '0322-2222222', 'fries@frystation.com', 12, ' ');


-- Seed Menu Items (aligned with each restaurant and category. resturant_id acting as a foreign key)
-- 1. Burger Republic (Hamburger)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(1, 'Classic Cheeseburger', 'Beef patty, cheddar, lettuce, tomato, and house sauce.', 6.99),
(1, 'Bacon Burger', 'Juicy beef burger with crispy bacon and BBQ sauce.', 7.99);
-- 2. Pizza Haven (Pizza)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(2, 'Margherita Pizza', 'Tomato base with mozzarella and fresh basil.', 10.99),
(2, 'Pepperoni Pizza', 'Classic pepperoni with a cheesy crust.', 12.49);
-- 3. Noodle House (Noodle)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(3, 'Kung Pao Noodles', 'Spicy stir-fried noodles with chicken and peanuts.', 8.49),
(3, 'Ramen Bowl', 'Japanese-style ramen with egg, pork, and miso broth.', 9.99);
-- 4. Meat Feast Grill (Meat)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(4, 'BBQ Ribs', 'Slow-cooked ribs glazed in barbecue sauce.', 14.99),
(4, 'Grilled Chicken Platter', 'Chargrilled chicken with sides.', 11.50);
-- 5. Green Leaf Bites (Vegetable)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(5, 'Veggie Bowl', 'Seasonal vegetables with quinoa and hummus.', 8.99),
(5, 'Grilled Tofu Wrap', 'Tofu, lettuce, tomato in a spinach wrap.', 7.50);
-- 6. Sweet Tooth (Dessert)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(6, 'Chocolate Lava Cake', 'Molten chocolate cake with vanilla ice cream.', 6.50),
(6, 'Strawberry Cheesecake', 'Creamy cheesecake with fresh strawberries.', 5.99);
-- 7. Sip & Chill (Drink)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(7, 'Iced Mocha', 'Chilled coffee with chocolate and milk.', 3.99),
(7, 'Berry Smoothie', 'Mixed berries with yogurt and honey.', 4.49);
-- 8. Bread Box (Bread)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(8, 'Whole Wheat Loaf', 'Freshly baked whole grain bread.', 2.99),
(8, 'Garlic Breadsticks', 'Oven-baked breadsticks with garlic butter.', 3.49);
-- 9. Paris Bakes (Croissant)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(9, 'Butter Croissant', 'Flaky croissant made with pure butter.', 3.25),
(9, 'Almond Croissant', 'Sweet almond-filled pastry.', 3.75);
-- 10. Fluffy Stack (Pancakes)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(10, 'Classic Pancakes', 'Stack of 3 pancakes with maple syrup.', 5.50),
(10, 'Blueberry Pancakes', 'Fluffy pancakes with blueberries and whipped cream.', 6.25);
-- 11. Cheese Cave (Cheese)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(11, 'Cheese Platter', 'Selection of aged cheeses with crackers.', 9.99),
(11, 'Mac & Cheese', 'Creamy macaroni baked with cheddar and parmesan.', 7.49);
-- 12. Fry Station (FrenchFries)
INSERT INTO menu_items (restaurant_id, name, description, price) VALUES
(12, 'Loaded Fries', 'French fries topped with cheese, jalapeños, and sauces.', 4.99),
(12, 'Curly Fries', 'Spiced curly fries served with ranch dip.', 3.99);



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
