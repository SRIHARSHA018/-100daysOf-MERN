const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide the todo title"],
    unique: true,
    trim: true,
    maxlength: [50, "Todo title can not be more than 50 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [500, "Name can not be more than 500 characters"],
  },
});

module.exports = mongoose.model("Todos", TodoSchema);
