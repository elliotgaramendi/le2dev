# 🍽️ Peruvian Food API

A simple REST API that provides information about traditional Peruvian dishes, built with Node.js and Express.

## 📋 Features

- Get a list of traditional Peruvian dishes
- Filter foods by category (main, dessert, drink)
- Filter foods by spiciness
- Search foods by name
- Combine multiple filters for precise queries

## 🚀 Quick Start

### Prerequisites

- Node.js (v22+)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/peruvian-food-api.git
cd peruvian-food-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. The API will be available at `http://localhost:3000`

## 🛣️ API Endpoints

| Method | Endpoint       | Description                             |
| ------ | -------------- | --------------------------------------- |
| GET    | /              | Welcome message and available endpoints |
| GET    | /api/foods     | Get all foods (with optional filters)   |
| GET    | /api/foods/:id | Get a specific food by ID               |

### Query Parameters

You can filter the `/api/foods` endpoint using the following query parameters:

- `search`: Filter foods by name (case-insensitive partial match)
- `category`: Filter by category ('main', 'dessert', 'drink')
- `isSpicy`: Filter by spiciness ('true' or 'false')

### Examples

- Get all foods: `GET /api/foods`
- Get a specific food: `GET /api/foods/1`
- Search for foods with "chi" in the name: `GET /api/foods?search=chi`
- Get all desserts: `GET /api/foods?category=dessert`
- Get all spicy dishes: `GET /api/foods?isSpicy=true`
- Get all spicy main dishes with "gallina" in the name: `GET /api/foods?search=gallina&category=main&isSpicy=true`

## 📦 Project Structure

```
peruvian-food-api/
├── node_modules/
├── src/
│   ├── data/
│   │   └── foods.js        # Sample food data
│   ├── routes/
│   │   └── foodRoutes.js   # API routes for food resources
│   └── index.js            # Main application file
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🧰 Technologies Used

- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **CORS**: Middleware to enable Cross-Origin Resource Sharing
- **Nodemon**: Development utility for auto-restarting the server

## 🔄 Future Improvements

- Add a complete set of CRUD operations (POST, PUT, DELETE)
- Connect to a database (MongoDB, PostgreSQL)
- Add user authentication
- Implement input validation
- Deploy to a cloud service (Heroku, Vercel, AWS)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Acknowledgements

- Data sourced from traditional Peruvian cuisine knowledge
- Images from Wikimedia Commons

## 🤗 Social Media 🤗
- 📺 [YouTube](https://www.youtube.com/@elliotgaramendi)
- 🐙 [GitHub](https://github.com/elliotgaramendi)
- 💼 [LinkedIn](https://www.linkedin.com/in/elliotgaramendi/)
- 📸 [Instagram](https://www.instagram.com/elliotgaramendi/)

---

Made with ❤️ by Elliot Garamendi as a learning project