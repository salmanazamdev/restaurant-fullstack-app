# 🍛 Khaana Express – Full-Stack Restaurant App (Node.js + PostgreSQL + Docker + React Native)

**Khaana Express** is a full-stack food ordering and restaurant management platform. It features a secure and scalable backend built with Node.js, PostgreSQL, and Docker, and a beautifully designed mobile frontend using React Native (Expo).

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL (Dockerized)  
- **Frontend**: React Native with Expo Router  
- **Others**: Docker Compose, Bcrypt for password hashing

---

## ✨ Features

### 🔐 Admin (Backend)
- Add, update, and delete menu items
- Manage restaurants, users, and order statuses
- Secure login with hashed passwords
- Dockerized backend for local and cloud deployment

### 🍽️ Customers (Mobile App)
- Browse restaurants and food items
- Create account / Login securely
- Place food orders through a mobile-friendly UI
- Track order status (Pending → Confirmed → Served)

---

## 🛠️ Backend Setup

1. Clone the repo:

```bash
git clone https://github.com/salmanazamdev/restaurant-fullstack-app.git
cd restaurant-fullstack-app/backend
````

2. Start Docker services:

```bash
docker compose up -d
```

3. Create and seed the database:

```bash
docker exec -i restaurant-api-container psql -U root -d postgres -c "CREATE DATABASE restaurant_db;"
docker exec -i restaurant-api-container psql -U root -d restaurant_db < database-schema.sql
docker exec -i restaurant-api-container psql -U root -d restaurant_db < db-seed.sql
```

4. Install dependencies and run the server:

```bash
npm install
nodemon index.js
```

---

## 📱 Frontend (React Native + Expo)

1. Navigate to frontend folder:

```bash
cd ../frontend
```

2. Install dependencies and start the app:

```bash
npm install
npx expo start
```

3. Scan the QR code using the **Expo Go app** to run it on your phone.

---

## 🗂️ Project Structure

```
khaana-express/
├── backend/
│   ├── functions/
│   ├── database/
│   ├── index.js
│   ├── database-schema.sql
│   ├── db-seed.sql
│   └── docker-compose.yml
├── frontend/
│   ├── app / onboarding/
│   ├── app / orders/
│   ├── app / restaurants/
│   ├── app / users/
│   ├── app / auth/
│   ├── app / navigation/
│   ├── screens/
│   ├── components/
│   └── assets/
└── README.md
```

---

## 🔐 Status Codes

| Code | Description           |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

---

## 🧠 Future Enhancements

* 🔔 Push notifications for order updates
* 💳 Payment integration
* 📊 Admin analytics dashboard
* 🧾 Order history and reordering features

---

## 👨‍💻 Author

**Muhammad Salman Azam**
[GitHub](https://github.com/salmanazamdev) • [LinkedIn](https://www.linkedin.com/in/salmanazamdev)

---

> 🥘 Khaana Express – Your meal, one tap away.
````