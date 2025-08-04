-- Users
INSERT INTO users (username, email, password, address)
VALUES 
('salman', 'salman.dev@sample.com', 'hashedpassword1', 'Somewhere on Earth'),
('essa', 'essa.khan@sample.com', 'hashedpassword2', 'Somewhere on Earth');


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
('Pizza Haven', '202 Mozzarella St', '0312-2222222', 'order@pizzahaven.com', 2, 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg'),
('Noodle House', '303 Wok Way', '0313-3333333', 'hello@noodlehouse.com', 3, 'https://images.pexels.com/photos/4210849/pexels-photo-4210849.jpeg'),
('Meat Feast Grill', '404 BBQ Blvd', '0314-4444444', 'grill@meatfeast.com', 4, 'https://images.pexels.com/photos/12246956/pexels-photo-12246956.jpeg'),
('Green Leaf Bites', '505 Veggie Ave', '0315-5555555', 'support@greenleaf.com', 5, ''),
('Sweet Tooth', '606 Sugar St', '0316-6666666', 'contact@sweettooth.com', 6, ' '),
('Sip & Chill', '707 Beverage Rd', '0317-7777777', 'hello@sipnchill.com', 7, ' '),
('Bread Box', '808 Loaf Street', '0318-8888888', 'info@breadbox.com', 8, ' '),
('Paris Bakes', '909 Croissant Blvd', '0319-9999999', 'paris@croissants.com', 9, ' '),
('Fluffy Stack', '1010 Pancake Plaza', '0320-0000000', 'fluffy@pancakestack.com', 10, 'https://images.pexels.com/photos/7144304/pexels-photo-7144304.jpeg'),
('Cheese Cave', '111 Cheddar Alley', '0321-1111111', 'melt@cheesecave.com', 11, 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg'),
('Fry Station', '1212 Crunchy Rd', '0322-2222222', 'fries@frystation.com', 12, ' ');


-- Seed Menu Items (aligned with each restaurant and category. resturant_id acting as a foreign key)
-- 1. Burger Republic (Hamburger)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(1, 'Classic Cheeseburger', 'Beef patty, cheddar, lettuce, tomato, and house sauce.', 6.99, 'https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg'),
(1, 'Bacon Burger', 'Juicy beef burger with crispy bacon and BBQ sauce.', 7.99, 'https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg');

-- 2. Pizza Haven (Pizza)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(2, 'Margherita Pizza', 'Tomato base with mozzarella and fresh basil.', 10.99, 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg'),
(2, 'Pepperoni Pizza', 'Classic pepperoni with a cheesy crust.', 12.49, 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg');

-- 3. Noodle House (Noodle)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(3, 'Kung Pao Noodles', 'Spicy stir-fried noodles with chicken and peanuts.', 8.49, 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg'),
(3, 'Ramen Bowl', 'Japanese-style ramen with egg, pork, and miso broth.', 9.99, 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg');

-- 4. Meat Feast Grill (Meat)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(4, 'BBQ Ribs', 'Slow-cooked ribs glazed in barbecue sauce.', 14.99, 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg'),
(4, 'Grilled Chicken Platter', 'Chargrilled chicken with sides.', 11.50, 'https://images.pexels.com/photos/19259179/pexels-photo-19259179.jpeg');

-- 5. Green Leaf Bites (Vegetable)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(5, 'Veggie Bowl', 'Seasonal vegetables with quinoa and hummus.', 8.99, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'),
(5, 'Grilled Tofu Wrap', 'Tofu, lettuce, tomato in a spinach wrap.', 7.50, 'https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg');

-- 6. Sweet Tooth (Dessert)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(6, 'Chocolate Lava Cake', 'Molten chocolate cake with vanilla ice cream.', 6.50, 'https://images.pexels.com/photos/4109994/pexels-photo-4109994.jpeg'),
(6, 'Strawberry Cheesecake', 'Creamy cheesecake with fresh strawberries.', 5.99, 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg');

-- 7. Sip & Chill (Drink)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(7, 'Iced Mocha', 'Chilled coffee with chocolate and milk.', 3.99, 'https://images.pexels.com/photos/6249729/pexels-photo-6249729.jpeg'),
(7, 'Berry Smoothie', 'Mixed berries with yogurt and honey.', 4.49, 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg');

-- 8. Bread Box (Bread)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(8, 'Whole Wheat Loaf', 'Freshly baked whole grain bread.', 2.99, 'https://images.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg'),
(8, 'Garlic Breadsticks', 'Oven-baked breadsticks with garlic butter.', 3.49, 'https://images.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg');

-- 9. Paris Bakes (Croissant)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(9, 'Butter Croissant', 'Flaky croissant made with pure butter.', 3.25, 'https://images.pexels.com/photos/1739748/pexels-photo-1739748.jpeg'),
(9, 'Almond Croissant', 'Sweet almond-filled pastry.', 3.75, 'https://images.pexels.com/photos/2789042/pexels-photo-2789042.jpeg');

-- 10. Fluffy Stack (Pancakes)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(10, 'Classic Pancakes', 'Stack of 3 pancakes with maple syrup.', 5.50, 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),
(10, 'Blueberry Pancakes', 'Fluffy pancakes with blueberries and whipped cream.', 6.25, 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg');

-- 11. Cheese Cave (Cheese)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(11, 'Cheese Platter', 'Selection of aged cheeses with crackers.', 9.99, 'https://images.pexels.com/photos/4791263/pexels-photo-4791263.jpeg'),
(11, 'Mac & Cheese', 'Creamy macaroni baked with cheddar and parmesan.', 7.49, 'https://images.pexels.com/photos/4791263/pexels-photo-4791263.jpeg');

-- 12. Fry Station (FrenchFries)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(12, 'Loaded Fries', 'French fries topped with cheese, jalapeños, and sauces.', 4.99, 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'),
(12, 'Curly Fries', 'Spiced curly fries served with ranch dip.', 3.99, 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg');

-------------------
-- Additional Restaurants and Menu Items for Each Category (because only one restaurant per catergory isn't awesome at all,...)

-- Hamburger (category_id = 1)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Grill Master', '102 Burger Lane', '0331-1111112', 'grillmaster@burger.com', 1, 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg'),
('Burger Hub', '103 Burger Lane', '0331-1111113', 'hub@burger.com', 1, 'https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg');
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(13, 'Spicy Beef Burger', 'Beef patty with jalapenos and spicy sauce.', 8.99, 'https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg'),
(13, 'Veggie Delight', 'Grilled veggie patty with fresh toppings.', 7.49, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'),
(14, 'Double Cheese Burger', 'Two beef patties with double cheese.', 9.99, 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg'),
(14, 'Chicken Supreme', 'Grilled chicken breast with house sauce.', 8.49, 'https://images.pexels.com/photos/4207752/pexels-photo-4207752.jpeg');

-- Pizza (category_id = 2)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Pizza Point', '203 Mozzarella St', '0332-2222223', 'point@pizza.com', 2, 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg'),
('Slice House', '204 Mozzarella St', '0332-2222224', 'slice@pizza.com', 2, 'https://images.pexels.com/photos/17759001/pexels-photo-17759001.jpeg');
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(15, 'BBQ Chicken Pizza', 'Pizza with BBQ chicken and onions.', 13.99, 'https://images.pexels.com/photos/14906564/pexels-photo-14906564.jpeg'),
(15, 'Veggie Lovers', 'Loaded with fresh vegetables.', 11.99, 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg'),
(16, 'Four Cheese Pizza', 'Mozzarella, cheddar, parmesan, blue cheese.', 14.49, 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg'),
(16, 'Spicy Pepperoni', 'Pepperoni with chili flakes.', 12.99, 'https://images.pexels.com/photos/17759001/pexels-photo-17759001.jpeg');

-- Noodle (category_id = 3)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Noodle Express', '304 Wok Way', '0333-3333334', 'express@noodle.com', 3, 'https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg'),
('Asian Wok', '305 Wok Way', '0333-3333335', 'asianwok@noodle.com', 3, 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg');
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(17, 'Pad Thai', 'Thai‑style stir‑fried noodles.', 10.99, 'https://images.pexels.com/photos/32083373/pexels-photo-32083373.jpeg'),
(17, 'Chicken Lo Mein', 'Egg noodles with chicken and veggies.', 9.99, 'https://images.pexels.com/photos/4210849/pexels-photo-4210849.jpeg'),
(18, 'Spicy Ramen', 'Ramen noodles in spicy broth.', 11.49, 'https://images.pexels.com/photos/6287760/pexels-photo-6287760.jpeg'),
(18, 'Vegetable Udon', 'Udon noodles with mixed vegetables.', 8.99, 'https://images.pexels.com/photos/4207752/pexels-photo-4207752.jpeg');


-- Meat (category_id = 4)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Steak House', '405 BBQ Blvd', '0334-4444445', 'steak@meat.com', 4, 'https://images.pexels.com/photos/33157191/pexels-photo-33157191.jpeg'),
('BBQ Nation', '406 BBQ Blvd', '0334-4444446', 'bbqnation@meat.com', 4, 'https://images.pexels.com/photos/12884549/pexels-photo-12884549.jpeg');
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(19, 'T‑Bone Steak', 'Grilled T‑bone steak with sides.', 18.99, 'https://images.pexels.com/photos/33157191/pexels-photo-33157191.jpeg'),
(19, 'Lamb Chops', 'Chargrilled lamb chops.', 16.99, 'https://images.pexels.com/photos/4106483/pexels-photo-4106483.jpeg'),
(20, 'BBQ Platter', 'Assorted BBQ meats.', 20.99, 'https://images.pexels.com/photos/12884549/pexels-photo-12884549.jpeg'),
(20, 'Chicken Seekh Kebab', 'Spiced minced chicken skewers.', 9.99, 'https://images.pexels.com/photos/6153737/pexels-photo-6153737.jpeg');

-- Vegetable (category_id = 5)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Veggie Delight', '506 Veggie Ave', '0335-5555556', 'delight@veggie.com', 5, 'https://images.pexels.com/photos/29659003/pexels-photo-29659003.jpeg'),
('Green Eats', '507 Veggie Ave', '0335-5555557', 'greeneats@veggie.com', 5, 'https://images.pexels.com/photos/4946628/pexels-photo-4946628.jpeg');

-- Dessert (category_id = 6)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Cake Corner', '607 Sugar St', '0336-6666667', 'cake@dessert.com', 6, 'https://images.pexels.com/photos/18140853/pexels-photo-18140853.jpeg'),
('Ice Cream World', '608 Sugar St', '0336-6666668', 'icecream@dessert.com', 6, 'https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg');

-- Drink (category_id = 7)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Juice Junction', '709 Beverage Rd', '0337-7777778', 'juice@drink.com', 7, 'https://images.pexels.com/photos/30855290/pexels-photo-30855290.jpeg'),
('Cafe Mocha', '710 Beverage Rd', '0337-7777779', 'mocha@drink.com', 7, 'https://images.pexels.com/photos/6166751/pexels-photo-6166751.jpeg');


-- Bread (category_id = 8)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Baker’s Den', '809 Loaf Street', '0338-8888889', 'bakersden@bread.com', 8, 'https://images.pexels.com/photos/19029378/pexels-photo-19029378.jpeg'),
('Loaf & Co.', '810 Loaf Street', '0338-8888890', 'loafco@bread.com', 8, 'https://images.pexels.com/photos/221442/pexels-photo-221442.jpeg');

-- Croissant (category_id = 9)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Croissant King', '911 Croissant Blvd', '0339-9999990', 'king@croissant.com', 9, 'https://images.pexels.com/photos/3724/food-morning-breakfast-orange-juice.jpg'),
('French Oven', '912 Croissant Blvd', '0339-9999991', 'oven@croissant.com', 9, 'https://images.pexels.com/photos/3850347/pexels-photo-3850347.jpeg');

-- Pancakes (category_id = 10)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Pancake House', '1111 Pancake Plaza', '0340-0000001', 'house@pancake.com', 10, 'https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg'),
('Waffle & Stack', '1112 Pancake Plaza', '0340-0000002', 'waffle@pancake.com', 10, 'https://images.pexels.com/photos/821403/pexels-photo-821403.jpeg');


-- Cheese (category_id = 11)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Cheese House', '112 Cheddar Alley', '0341-1111112', 'house@cheese.com', 11, 'https://images.pexels.com/photos/3756498/pexels-photo-3756498.jpeg'),
('Dairy Delights', '113 Cheddar Alley', '0341-1111113', 'dairy@cheese.com', 11, 'https://images.pexels.com/photos/4781423/pexels-photo-4781423.jpeg');

-- FrenchFries (category_id = 12)
INSERT INTO restaurants (restaurant_name, address, phone, email, category_id, image_url) VALUES
('Fry King', '1313 Crunchy Rd', '0342-2222223', 'king@fries.com', 12, 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'),
('Potato Corner', '1314 Crunchy Rd', '0342-2222224', 'corner@fries.com', 12, 'https://images.pexels.com/photos/2966196/pexels-photo-2966196.jpeg');

--------------

-- Seed Data Menu Items (restaurand id 20 plus)
-- Vegetable (restaurant_id 21 & 22)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(21, 'Stuffed Bell Peppers', 'Bell peppers stuffed with rice and veggies.', 7.99, 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg'),
(21, 'Spinach Lasagna', 'Lasagna with spinach and ricotta.', 8.99, 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg'),
(22, 'Veggie Stir Fry', 'Mixed vegetables stir-fried in soy sauce.', 7.49, 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg'),
(22, 'Mushroom Risotto', 'Creamy risotto with mushrooms.', 9.49, 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg');

-- Dessert (restaurant_id 23 & 24)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(23, 'Red Velvet Cake', 'Classic red velvet with cream cheese.', 6.99, 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg'),
(23, 'Chocolate Mousse', 'Rich chocolate mousse dessert.', 5.99, 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg'),
(24, 'Vanilla Ice Cream', 'Homemade vanilla ice cream.', 4.99, 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg'),
(24, 'Mango Sorbet', 'Refreshing mango sorbet.', 5.49, 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg');

-- Drink (restaurant_id 25 & 26)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(25, 'Fresh Orange Juice', 'Squeezed orange juice.', 3.99, 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg'),
(25, 'Apple Cider', 'Chilled apple cider.', 4.49, 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg'),
(26, 'Cappuccino', 'Espresso with steamed milk foam.', 3.99, 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg'),
(26, 'Iced Latte', 'Cold coffee with milk.', 4.49, 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg');

-- Bread (restaurant_id 27 & 28)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(27, 'Sourdough Bread', 'Artisan sourdough loaf.', 3.99, 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'),
(27, 'Cinnamon Rolls', 'Sweet rolls with cinnamon.', 4.99, 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'),
(28, 'Baguette', 'Classic French baguette.', 2.99, 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'),
(28, 'Focaccia', 'Italian flatbread with herbs.', 3.49, 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg');

-- Croissant (restaurant_id 29 & 30)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(29, 'Chocolate Croissant', 'Croissant with chocolate filling.', 3.99, 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg'),
(29, 'Ham & Cheese Croissant', 'Savory croissant with ham and cheese.', 4.49, 'https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg'),
(30, 'Raspberry Danish', 'Danish pastry with raspberry jam.', 4.99, 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg'),
(30, 'Butter Roll', 'Soft roll with butter.', 2.99, 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg');

-- Pancakes (restaurant_id 31 & 32)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(31, 'Banana Pancakes', 'Pancakes with banana slices.', 6.99, 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),
(31, 'Chocolate Chip Pancakes', 'Pancakes with chocolate chips.', 7.49, 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),
(32, 'Belgian Waffles', 'Crispy waffles with syrup.', 7.99, 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'),
(32, 'Strawberry Waffles', 'Waffles with strawberries and cream.', 8.49, 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg');

-- Cheese (restaurant_id 33 & 34)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(33, 'Cheddar Melt', 'Melted cheddar cheese sandwich.', 5.99, 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg'),
(33, 'Parmesan Bites', 'Baked parmesan cheese snacks.', 4.99, 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg'),
(34, 'Blue Cheese Salad', 'Salad with blue cheese dressing.', 6.49, 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg'),
(34, 'Cheese Fondue', 'Classic Swiss cheese fondue.', 8.99, 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg');

-- FrenchFries (restaurant_id 35 & 36)
INSERT INTO menu_items (restaurant_id, name, description, price, image_url) VALUES
(35, 'Chili Cheese Fries', 'Fries topped with chili and cheese.', 5.99, 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'),
(35, 'Truffle Fries', 'Fries tossed in truffle oil.', 6.49, 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'),
(36, 'Potato Wedges', 'Seasoned potato wedges.', 4.99, 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'),
(36, 'Sweet Potato Fries', 'Crispy sweet potato fries.', 5.49, 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg');


-- Seed Restaurant Ratings
-- Seed Restaurant Ratings
INSERT INTO restaurant_ratings (restaurant_id, user_id, rating, review) VALUES
(1, 1, 5, 'Amazing burgers, juicy and flavorful!'),
(1, 2, 4, 'Great taste, but service could improve.'),
(2, 1, 4, 'Fresh toppings and cheesy crust.'),
(2, 2, 3, 'Good pizza, but a bit salty.'),
(3, 1, 5, 'Noodles were authentic and spicy.'),
(3, 2, 4, 'Loved the ramen, rich broth.'),
(4, 1, 4, 'Meaty feast, perfect for carnivores.'),
(4, 2, 5, 'Delicious BBQ and well grilled.'),
(5, 1, 4, 'Healthy, light and tasty.'),
(5, 2, 3, 'Could use more seasoning.'),
(6, 1, 5, 'Chocolate lava cake was heaven!'),
(6, 2, 5, 'Cheesecake was rich and creamy.'),
(7, 1, 3, 'Decent drinks, average ambiance.'),
(7, 2, 4, 'Smoothie was refreshing and sweet.'),
(8, 1, 4, 'Loved the garlic breadsticks.'),
(8, 2, 4, 'Whole wheat loaf was fresh.'),
(9, 1, 5, 'Top-notch croissants, buttery and flaky.'),
(9, 2, 4, 'Almond croissant was really good.'),
(10, 1, 5, 'Pancakes were fluffy and warm.'),
(10, 2, 5, 'Loved the blueberry topping.'),
(11, 1, 4, 'Mac & Cheese was creamy.'),
(11, 2, 4, 'Cheese platter had variety.'),
(12, 1, 3, 'Fries were slightly cold.'),
(12, 2, 4, 'Curly fries were crispy.'),
(13, 1, 4, 'Spicy burger had a real kick!'),
(13, 2, 5, 'Veggie delight was fresh and tasty.'),
(14, 1, 5, 'Double cheese heaven!'),
(14, 2, 4, 'Chicken Supreme was juicy.'),
(15, 1, 3, 'BBQ chicken was okay.'),
(15, 2, 4, 'Veggie pizza was loaded.'),
(16, 1, 5, 'Loved the Four Cheese pizza.'),
(16, 2, 4, 'Spicy pepperoni was 🔥.'),
(17, 1, 5, 'Pad Thai was authentic.'),
(17, 2, 4, 'Lo Mein was savory.'),
(18, 1, 5, 'Best ramen I’ve tried.'),
(18, 2, 4, 'Udon was warm and comforting.'),
(19, 1, 4, 'T-Bone steak was grilled well.'),
(19, 2, 5, 'Lamb chops were juicy.'),
(20, 1, 5, 'Huge BBQ platter!'),
(20, 2, 4, 'Seekh kebab was flavorful.'),
(21, 1, 3, 'Bell peppers were underseasoned.'),
(21, 2, 4, 'Spinach lasagna was good.'),
(22, 1, 4, 'Stir fry was well done.'),
(22, 2, 3, 'Mushroom risotto was too creamy.'),
(23, 1, 5, 'Red velvet was perfect!'),
(23, 2, 5, 'Mousse was rich and smooth.'),
(24, 1, 4, 'Loved the mango sorbet.'),
(24, 2, 4, 'Vanilla was classic and smooth.'),
(25, 1, 4, 'Orange juice was refreshing.'),
(25, 2, 3, 'Apple cider was okay.'),
(26, 1, 4, 'Nice cappuccino.'),
(26, 2, 5, 'Iced latte was delicious.'),
(27, 1, 5, 'Sourdough was fresh and perfect.'),
(27, 2, 4, 'Cinnamon rolls were great.'),
(28, 1, 3, 'Baguette was a bit hard.'),
(28, 2, 4, 'Focaccia had a great aroma.'),
(29, 1, 5, 'Chocolate croissant = ❤️'),
(29, 2, 4, 'Ham & cheese was filling.'),
(30, 1, 3, 'Danish was average.'),
(30, 2, 4, 'Butter roll was soft and nice.'),
(31, 1, 5, 'Banana pancakes were top-tier.'),
(31, 2, 5, 'Chocolate chip was perfect.'),
(32, 1, 4, 'Belgian waffles were crunchy.'),
(32, 2, 5, 'Strawberry waffles were fresh.'),
(33, 1, 4, 'Cheddar melt was gooey and good.'),
(33, 2, 4, 'Parmesan bites were crispy.'),
(34, 1, 3, 'Salad was okay.'),
(34, 2, 5, 'Fondue was a fun experience.'),
(35, 1, 3, 'Too much cheese on chili fries.'),
(35, 2, 4, 'Truffle fries had a unique taste.'),
(36, 1, 4, 'Wedges were crisp.'),
(36, 2, 4, 'Sweet potato fries were tasty.');



-- Seed Restaurant Customers
INSERT INTO restaurant_customers (restaurant_id, name, email, phone) VALUES
(1, 'Ali Khan', 'ali.khan@example.com', '0300-1234567'),
(2, 'Sara Ahmed', 'sara.ahmed@example.com', '0301-2345678'),
(3, 'John Doe', 'john.doe@example.com', '0302-3456789');

-- Seed Orders
INSERT INTO orders (user_id, restaurant_id, total_amount, status) VALUES
(1, 1, 8.48, 'Completed'),
(2, 2, 21.49, 'Pending'),
(3, 3, 13.74, 'Preparing');
