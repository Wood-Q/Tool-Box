// db.js
const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const pool = new Pool({
  user: process.env.DBUSER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

// 定义一个初始化函数来连接数据库
async function connectDB() {
  try {
    await pool.connect();
    console.log("Connected to the PostgreSQL database");
  } catch (err) {
    console.error("Error connecting to the database", err);
    process.exit(1); // 连接失败时退出应用
  }
}

module.exports = { pool, connectDB };
