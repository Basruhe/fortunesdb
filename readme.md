Readme.

To start: Npm run start
To test/use: Run in Postman (not all commands will work in httphie)
http://localhost:3000/fortunes

This exercise project is a simple express server with an API.
Users have access to a list of fortunes (properties: id, lucky_number, spirit_animal, message) Fortunes are saved in a hardcoded fortunes.json file with writefile.

From a list of fortunes, users can:

- Request a random fortune
  Postman: GET http://localhost:3000/fortunes/random
  Httpie: http :3000/fortunes/random

- Request a single fortune by ID
  Postman: GET http://localhost:3000/fortunes/x
  Httpie: http :/3000/fortunes/x

- Add a fortune
  Postman: POST http://localhost:3000/fortunes. add a new fortune json object as 'body'.
  Httpie: http :3000/fortunes "lucky_number"=x "message"="y"

- Change a fortune
  Postman: PUT http://localhost:3000/fortunes/x Add a new(changed) property as json body

- Delete a fortune
  Postman: DELETE http://localhost:3000/fortunes/x

To Do:
Turn into full stack app:

- Create react frontend
- Create actual database
