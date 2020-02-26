const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fortunes = require("./data/fortunes.json");

// Middleware is a bridge between data and applications, to establish a common form of communication. In this case, we parse json. Allows to receive and use json data
app.use(bodyParser.json());

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
app.get("/fortunes/:id", (req, res) => {
  // Note: the colon in the path signifies that the nested route needs to be stored as a parameter in the request object. In this case, the request object is then passed as a paramameter to fortunes.find, which checks each fortune individually (f) and returns the ones that matches with the req.params.id
  // console.log(req.params);
  // console.log(req.params.id);
  res.json(fortunes.find(f => f.id == req.params.id));
  // todo: error handling
});

// Post to add fortunes
// You can no longer test this with the express server. Rather than creating an entire frontend to test, we can use httpie or curl(which is a lot more work)
// to test: http :3000/fortunes id=x message=y etc
app.post("/fortunes", (req, res) => {
  console.log(req.body);
  // First; convert json body into a fortune object
  const { message, lucky_number, spirit_animal } = req.body;
  // next step; generating a new ID. Take just the ids from the fortunes array and save them in a new array.
  const fortune_ids = fortunes.map(f => f.id);
  const fortune = {
    id: (fortune_ids.length > 0 ? Math.max(...fortune_ids) : 0) + 1,
    message,
    lucky_number,
    spirit_animal
  };
  // // Alternate method (should be ok too, right? or can get errors?):
  // const fortune = {
  //   id: parseInt(fortune_ids.slice(-1)) + 1,
  //   message,
  //   lucky_number,
  //   spirit_animal
  // };
  const newFortunes = fortunes.concat(fortune);
  res.json(newFortunes);
  console.log(newId);
});

module.exports = app;

// To start: npm start
// (which starts: nodemon ./bin/www )
