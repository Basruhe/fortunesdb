const express = require("express");
const app = express();
const fortunes = require("./data/fortunes.json");

app.get("/fortunes", (req, res) => {
  console.log("Request at /fortunes");
  res.send(fortunes);
});

module.exports = app;
