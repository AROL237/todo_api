const express = require("express");
const { db } = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
const promBundle = require("express-prom-bundle");

const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  customLabels: { project_name: "TODO APP" },
  
});

const app = express();
dotenv.config();

// Maticx for monitoring
app.use(metricsMiddleware);

const PORT = process.env.PORT || 3000;
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["http://localhost:3000"]; // Default to localhost if not set
app.use(
  cors({
    origin: [...allowedOrigins], // Replace with your frontend URL
  }),
);

app.use(express.json());

app.get("/todos", async (req, res) => {
  
  const query = "SELECT * FROM todos"; // Replace 'todos' with your table name
  try {
    const result = await db.query(query);

    res.json(result[0]);
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Database query error");
  }
});

// function to create a new todo
app.post("/todo", async (req, res) => {
  const { titel, description, completed } = req.body;
  const query =
    "INSERT INTO todos (titel,description,completed) VALUES  (?,?,?);"; // Replace 'todos' with your table name
  try {
    const result = await db.query(query, [titel, description, completed]);

    res.status(201).send("Todo added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Database query error: ", err);
  }
});

//function to update a todo;
app.put(`/todo/:id`, async (req, res) => {
  const { id } = req.params;
  const { titel, description, completed } = req.body;
  const query =
    "UPDATE todos SET titel=?, description=?, completed=? WHERE id=?;";

  try {
    const result = await db.query(query, [titel, description, completed, id]);
    res.status(200).json("Record saved !.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Database query error: ", err);
  }
});

//function to find by id
app.get(`/todo/:id`, async (req, res) => {
  const { id } = req.params;
  const query = `SELECT  * FROM  todos WHERE id=?;`;

  try {
    const result = await db.query(query, [id]);
    if (result.length == 0) {
      res.status(404).send("todo not found id: " + id);
    } else res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database query error: " + err);
  }
});

//function to delete a record productionby id
app.delete(`/todo/:id`, async (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM todos WHERE id=?;";

  try {
    const result = await db.query(query, [id]);
    res.status(200).send("One record removed id: " + id);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database query error: " + err);
  }
});

// Start the serverproduction
const bootstrapp_applicaiton = async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

bootstrapp_applicaiton();
