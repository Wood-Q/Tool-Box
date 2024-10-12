const express = require("express");
const app = express();
const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

const pool = new Pool({
  user: process.env.User,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});

app.use(express.json());

async function createAlbumsTable() {
  try {
    const query = `
        CREATE TABLE IF NOT EXISTS albums (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          artist VARCHAR(255) NOT NULL,
          price NUMERIC(10, 2)
        );
      `;

    await pool.query(query);
    console.log("Albums table created");
  } catch (err) {
    console.error(err);
    console.error("Albums table creation failed");
  }
}

createAlbumsTable();

app.post("/albums", async (req, res) => {
  // Validate the incoming JSON data
  const { title, artist, price } = req.body;
  console.log(req.body);
  if (!title || !artist || !price) {
    return res
      .status(400)
      .send("One of the title, or artist, or price is missing in the data");
  }

  try {
    // try to send data to the database
    const query = `
        INSERT INTO albums (title, artist, price)
        VALUES ($1, $2, $3)
        RETURNING id;
      `;
    const values = [title, artist, price];

    const result = await pool.query(query, values);
    res
      .status(201)
      .send({ message: "New Album created", albumId: result.rows[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).send("some error has occured");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});