## Fortunes API

This exercise project is a simple express server with an API.
Project goal: API with fortunes. Users have access to a list of fortunes (properties are: id, lucky_number, spirit_animal, message). Fortunes can be requested, created, edited and deleted.

TESTING

## User Guide

- To start: Npm run start
- To test/use: Run in Postman (Note: not all commands will work in httphie)
  http://localhost:3000/fortunes

From a list of fortunes, users can:

Request a random fortune

- Postman: GET http://localhost:3000/fortunes/random
- Httpie: http :3000/fortunes/random

Request a single fortune by ID

- Postman: GET http://localhost:3000/fortunes/x
- Httpie: http :/3000/fortunes/x

Add a fortune

- Postman: POST http://localhost:3000/fortunes. add a new fortune json object as 'body'.
- Httpie: http :3000/fortunes "lucky_number"=x "message"="y"

Change a fortune

- Postman: PUT http://localhost:3000/fortunes/x Add a new(changed) property as json body

Delete a fortune

- Postman: DELETE http://localhost:3000/fortunes/x

### To Do:

My next steps for this project:
1 Replace writefile with a PostGres database.
2 Create React frontend with a UI for user interaction.
