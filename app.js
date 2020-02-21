const express = require("express");
const app = express();
const fortunes = require("./data/fortunes.json");

app.get("/fortunes", (req, res) => {
  console.log("Request at /fortunes");
  res.send(fortunes);
});

// Get a random fortune
app.get("/fortunes/random", (req, res) => {
  // const random_index = Math.floor(Math.random() * fortunes.length);
  // console.log(random_index);
  // random_fortune = fortunes[random_index];
  // res.json(random_fortune);
  // // Rewritten:
  res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
  console.log("Request for random fortune");
});

// Get a single fortune by ID

module.exports = app;

// To start: nodemon ./bin/www
