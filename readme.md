Readme.

To start: Npm run start
To test/use: Run in Postman (not all commands will work in httphie)

This exercise project is a simple express server with an API.
Users have access to a list of fortunes (properties: id, lucky_number, spirit_animal, message) Fortunes are saved in a hardcoded fortunes.json file with writefile.

From a list of fortunes, users can:

- Request a random fortune
  Postman: GET http://localhost:3000/fortunes/random
  Httpie: http :3000/fortunes/random

- Request a single fortune by ID

* Add a fortune

* Change a fortune

* Delete a fortune
