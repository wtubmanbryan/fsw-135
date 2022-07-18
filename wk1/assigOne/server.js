const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://dbWilliam:dbWilliamPwd@cluster0.bkaicif.mongodb.net/moviesdb',
  {
    useNewUrlParser: true
  }
);

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});