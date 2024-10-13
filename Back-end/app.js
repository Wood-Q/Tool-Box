const express = require("express");
const app = express();
const dotenv = require("dotenv");
const todoRouter = require("./router/todoRouter");
const { pool, connectDB } = require("./db");

app.use(express.json());

app.use("/api/v1/todos", todoRouter);

dotenv.config({
  path: "./config.env",
});

async function createTodoTable() {
  try {
    const query = `CREATE TABLE IF NOT EXISTS todo (id SERIAL PRIMARY KEY,task VARCHAR(255),iscompleted BOOLEAN DEFAULT false)`;

    await pool.query(query);

    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table", err);
  }
}

createTodoTable();

connectDB()
  .then(() => {
    const port = 8080;
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
