const Todos = require("../models/todo");

exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todos.find();
    res.status(200).send({ success: true, data: todos });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    const todo = await Todos.findById(req.params.id);
    if (!todo) {
      return res.status(404).send({
        success: false,
        message: `Todo with id:${req.params.id} not found in Database`,
      });
    }
    res.status(200).send({ success: true, data: todo });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return res.status(404).send({
        success: false,
        message: `Todo with id:${req.params.id} not found in Database`,
      });
    }
    res.status(200).send({ success: true, data: todo });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todos.create(req.body);
    res.status(201).send({
      success: true,
      data: todo,
    });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todos.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).send({
        success: false,
        message: `Todo with id:${req.params.id} not found in Database`,
      });
    }
    res.status(200).send({ success: true, data: {} });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
};
