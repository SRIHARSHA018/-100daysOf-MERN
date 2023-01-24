const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");

const todos = require("./routes/todos");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/todos", todos);

// Port listner setup
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.cyan.bold);
});
