const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const Todo = require("./models/todo");

// Connect to DB
mongoose.connect(process.env.MONGO_URI);

// Read JSON file
const Todos = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/todos.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await Todo.create(Todos);
    console.log("Data imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete Data
const deleteData = async () => {
  try {
    await Todo.deleteMany();
    console.log("Data destroyed..".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
