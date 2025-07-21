# 🍽️ Full-Stack Restaurant App (Node.js + PostgreSQL + Docker + React Native)

This is a complete full-stack restaurant service platform. It features a powerful RESTful backend API for restaurant management and a mobile frontend built with React Native (Expo) that provides an intuitive customer experience.

## 🔧 Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL (via Docker)
- **Frontend (Mobile):** React Native (Expo)
- **Others:** Bcrypt (for password hashing), Docker Compose

---

## 🧠 What It Does

### ✅ Admin Features
- Add, edit, and remove menu items
- Manage restaurants, users, and orders
- Secure login and authentication (hashed passwords)
- Backend fully containerized using Docker

### 🍽️ Customer Features
- Browse available restaurants and menus
- Place orders through a mobile-friendly UI
- Track order status (pending/confirmed/served)
- Account creation and secure login (React Native app)

---

## 🛠️ Backend Setup

1. **Clone the repo:**
```bash
git clone https://github.com/salmanazamdev/restaurant-fullstack-app.git
cd restaurant-fullstack-app/backend
````

2. **Start Docker services:**

```bash
docker compose up -d
```

3. **Create and seed the database:**

```bash
docker exec -i restaurant-api-container psql -U root -d postgres -c "CREATE DATABASE restaurant_db;"
docker exec -i restaurant-api-container psql -U root -d restaurant_db < database-schema.sql
docker exec -i restaurant-api-container psql -U root -d restaurant_db < db-seed.sql
```

4. **Install dependencies and run the backend:**

```bash
npm install
nodemon index.js
```

---

## 📱 Frontend (React Native with Expo)

1. **Navigate to frontend folder:**

```bash
cd ../frontend
```

2. **Install dependencies and run app:**

```bash
npm install
npx expo start
```

> 💡 You can scan the QR code on Expo Go (Android/iOS) to test the mobile app.

---

## 🗂️ Project Structure

```
restaurant-fullstack-app/
├── backend/
│   ├── functions/
│   ├── database/
│   ├── index.js
│   ├── database-schema.sql
│   ├── db-seed.sql
│   └── docker-compose.yml
├── frontend/
│   ├── App.js
│   ├── screens/
│   ├── components/
│   └── assets/
└── README.md
```

---

## 🔐 Status Codes

* `200` – OK
* `201` – Created
* `400` – Bad Request
* `401` – Unauthorized
* `403` – Forbidden
* `404` – Not Found
* `500` – Internal Server Error

---

## 📬 Author

**Muhammad Salman Azam**
[GitHub](https://github.com/salmanazamdev) | [LinkedIn](https://linkedin.com/in/salmanazamdev)

---

## 💡 Future Features (Ideas)

* Push notifications for order updates
* Payment integration
* Order analytics dashboard for admin

---
