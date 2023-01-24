const express = require("express");
const {
  getAllTodos,
  getTodo,
  updateTodo,
  createTodo,
  deleteTodo,
} = require("../controllers/todo");

const router = express.Router();

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;
