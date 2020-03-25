const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fortunes = require("./data/fortunes.json");
const fs = require("fs"); // filesave

// Middleware is a bridge between data and applications, to establish a common form of communication. In this case, we parse json. Allows to receive and use json data
app.use(bodyParser.json());

// List all fortunes
app.get("/fortunes", (req, res) => {
  console.log("Request at /fortunes");
  res.send(fortunes);
});

// Get a random fortune
// Postman: GET http://localhost:3000/fortunes/random
// Httpie: http :3000/fortunes/random
app.get("/fortunes/random", (req, res) => {
  // const random_index = Math.floor(Math.random() * fortunes.length);
  // console.log(random_index);
  // random_fortune = fortunes[random_index];
  // res.json(random_fortune);
  // // Rewritten:
  res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
  console.log("Request for random fortune");
});

// Get a single fortune by ID (Where id=x)
// Postman: GET http://localhost:3000/fortunes/x
// Httpie: http :/3000/fortunes/x
app.get("/fortunes/:id", (req, res) => {
  // Note: the colon in the path signifies that the nested route needs to be stored as a parameter in the request object. In this case, the request object is then passed as a paramameter to fortunes.find, which checks each fortune individually (f) and returns the ones that matches with the req.params.id
  // console.log(req.params);
  // console.log(req.params.id);
  res.json(fortunes.find(f => f.id == req.params.id));
  // todo: error handling
});

const writeFortunes = json => {
  fs.writeFile("./data/fortunes.json", JSON.stringify(json), err =>
    console.log(err)
  );
};

// Post to add fortunes
// You can no longer test this with the express server. Rather than creating an entire frontend to test, we can use httpie or curl(which is a lot more work)
// To Use: http :3000/fortunes "lucky_number"=x "message"="y" etc
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
  // note: concat doesnt actually add the new fortune. It creates an entire new array with the extra fortune added to it.
  // filesave: since there is no backend yet.
  writeFortunes(newFortunes);

  // fs.writeFile("./data/fortunes.json", JSON.stringify(newFortunes), err =>
  //   console.log(err)
  // );
  res.json(newFortunes);
});

// PUT method
// Looks like a combination of the get single method, and post method. You first retrieve the desired element, then change and return it
// To use: http :3000 ? doesnt work with httpie?
// Does work in postman
app.put("/fortunes/:id", (req, res) => {
  // console.log(req.body);
  const { id } = req.params;
  const { message, lucky_number, spirit_animal } = req.body;
  const old_fortune = fortunes.find(f => f.id == id);
  // if (message) old_fortune.message = message;
  // if (lucky_number) old_fortune.lucky_number = lucky_number;
  // if (spirit_animal) old_fortune.spirit_animal = spirit_animal;
  // // replaced into:
  ["message", "lucky_number", "spirit_animal"].forEach(key => {
    if (req.body[key]) old_fortune[key] = req.body[key];
  });

  writeFortunes(fortunes);
  // fs.writeFile("./data/fortunes.json", JSON.stringify(fortunes), err =>
  //   console.log(err)
  // );
  res.json(fortunes);
});

// Delete method
// To use:
app.delete("/fortunes/:id", (req, res) => {
  const { id } = req.params;
  const new_fortunes = fortunes.filter(f => f.id != id);
  writeFortunes(new_fortunes);
  res.json(fortunes);
});

module.exports = app;

// To start: npm start
// (which starts: nodemon ./bin/www )
