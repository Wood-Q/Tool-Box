const express = require("express");
const todoController = require("../controllers/todoController");
const todoRouter = express.Router();

todoRouter.route("/createTodo").post(todoController.createTodo);
todoRouter.route("/getAllTodo").get(todoController.getAllTodo);
todoRouter.route("/updateTodo").put(todoController.updateTodo);
todoRouter.route("/deleteTodo").delete(todoController.deleteTodo);

module.exports = todoRouter;
