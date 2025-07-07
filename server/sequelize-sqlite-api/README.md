# Sequelize & SQLite API

This project is a simple API built using Express, Sequelize, and SQLite. It demonstrates how to set up a RESTful API with basic CRUD operations.

## Project Structure

```
sequelize-sqlite-api
├── src
│   ├── app.js               # Entry point of the application
│   ├── models
│   │   └── index.js         # Sequelize models and database connection
│   ├── routes
│   │   └── api.js           # API routes
│   └── controllers
│       └── apiController.js  # Business logic for API routes
├── package.json              # npm configuration file
├── .sequelizerc             # Sequelize CLI configuration
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/sequelize-sqlite-api.git
   cd sequelize-sqlite-api
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The API will be running on `http://localhost:3000`.

## API Endpoints

- `GET /api/items` - Retrieve all items
- `GET /api/items/:id` - Retrieve a specific item by ID
- `POST /api/items` - Create a new item
- `PUT /api/items/:id` - Update an existing item by ID
- `DELETE /api/items/:id` - Delete an item by ID

## License

This project is licensed under the MIT License.