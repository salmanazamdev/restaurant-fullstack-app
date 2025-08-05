# 🍛 Khaana Express – Full-Stack Restaurant App

Khaana Express app is a full-stack food delivery/ordering and restaurant management platform. It features a secure and scalable backend built with Node.js, Express, and PostgreSQL (Dockerized), and a modern mobile frontend using React Native (Expo Router).

---

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (Dockerized)
- **Frontend:** React Native (Expo Router)
- **Others:** Docker Compose, Bcrypt for password hashing, Axios

---

## ✨ Features

### 🔐 Admin (Backend)
- Add, update, and delete menu items
- Manage restaurants, users, and order statuses
- Secure login with hashed passwords
- Dockerized backend for easy deployment

### 🍽️ Customers (Mobile App)
- Browse restaurants and food categories
- Create account / Login securely
- Place food orders through a mobile-friendly UI
- Track order status (Pending → Confirmed → Served)
- Modern tabbed navigation and onboarding screens

---

## 🛠️ Backend Setup

```sh
git clone https://github.com/salmanazamdev/restaurant-fullstack-app.git
cd restaurant-fullstack-app/backend
```

Start Docker services:
```sh
docker compose up -d
```

Create and seed the database:
```sh
docker exec -i restaurant-api-container psql -U root -d postgres -c "CREATE DATABASE restaurant_db;"
docker exec -i restaurant-api-container psql -U root -d restaurant_db < database-schema.sql
docker exec -i restaurant-api-container psql -U root -d restaurant_db < db-seed.sql
```

Install dependencies and run the server:
```sh
npm install
nodemon index.js
```

---

## 📱 Frontend (React Native + Expo)

Navigate to the frontend folder:
```sh
cd ../frontend
```

Install dependencies and start the app:
```sh
npm install
npx expo start
```

Scan the QR code using the Expo Go app to run it on your phone.

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
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (tabs)/
│   │   ├── categories/
│   │   ├── onboarding/
│   │   └── ...
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── assets/
│   └── ...
└── README.md
```

- **(auth):** Authentication screens (login, signup)
- **(tabs):** Main tabbed navigation (home, orders, profile, etc.)
- **categories/:** Category browsing
- **onboarding/:** Onboarding/welcome screens
- **components/:** Reusable UI components

---

## 🔐 Status Codes

| Code | Description              |
|------|--------------------------|
| 200  | OK                       |
| 201  | Created                  |
| 400  | Bad Request              |
| 401  | Unauthorized             |
| 403  | Forbidden                |
| 404  | Not Found                |
| 500  | Internal Server Error    |

---

## 🧠 Future Enhancements

- 🔔 Push notifications for order updates
- 💳 Payment integration
- 📊 Admin analytics dashboard
- 🧾 Order history and reordering features

---

## 👨‍💻 Author

Muhammad Salman Azam  
[GitHub](https://github.com/salmanazamdev) • [LinkedIn](linkedin.com/in/salmanazamdev)

---

🥘 **Khaana Express – Your meal, one tap away.**
