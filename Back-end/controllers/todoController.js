const { pool } = require("../db");

// 创建 todolist
exports.createTodo = async (req, res, next) => {
  const { id, task, iscompleted } = req.body;
  if (!id || !task || iscompleted === undefined) {
    return res
      .status(400)
      .json({ message: "Please provide id, task, and iscompleted" });
  }
  try {
    // 使用参数化查询来防止 SQL 注入
    const query = `INSERT INTO todo (id, task, iscompleted) VALUES ($1, $2, $3) RETURNING *;`;
    const values = [id, task, iscompleted];
    const result = await pool.query(query, values);
    res
      .status(201)
      .json({ message: "Todo created successfully", todo: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// 获取所有 todo
exports.getAllTodo = async (req, res, next) => {
  try {
    const query = `SELECT * FROM todo;`;
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// 更新 todo，将 iscompleted 改为 true
exports.updateTodo = async (req, res, next) => {
  const { id } = req.params;
  const { iscompleted } = req.body;
  if (!id || iscompleted === undefined) {
    return res
      .status(400)
      .json({ message: "Please provide id and iscompleted" });
  }
  try {
    const query = `UPDATE todo SET iscompleted = $1 WHERE id = $2 RETURNING *;`;
    const values = [iscompleted, id];
    const result = await pool.query(query, values);
    res
      .status(200)
      .json({ message: "Todo updated successfully", todo: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// 删除 todo
exports.deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Please provide id" });
  }
  try {
    const query = `DELETE FROM todo WHERE id = $1 RETURNING *;`;
    const values = [id];
    const result = await pool.query(query, values);
    res
      .status(200)
      .json({ message: "Todo deleted successfully", todo: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
