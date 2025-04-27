const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();
const db = mysql.createPool({
  host: process.env.DB_HOST, // Replace with your MySQL host
  user: process.env.DB_USER, // Replace with your MySQL username
  password: process.env.DB_PASSWORD, // Replace with your MySQL password
  database: process.env.DB_NAME, // Replace with your database name
  waitForConnections: true,
  connectionLimit: 10, // Number of max connections at same time
  queueLimit: 0, // Unlimited queued requests
});

module.exports = { db };
