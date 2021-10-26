# basic-auth

Express Server
Created by Jacob Gregor

## Installation\

npm install\

"dependencies": {
"base-64": "^1.0.0",
"bcrypt": "^5.0.0",
"cors": "^2.8.5",
"dotenv": "^8.2.0",
"express": "^4.17.1",
"jest": "^26.6.3",
"pg": "^8.6.0",
"sequelize": "^6.6.2",
"sequelize-cli": "^6.2.0",
"sqlite3": "^5.0.2",
"supertest": "^6.1.6"
}\

## Summary of Problem Domain\

## lab-06: Technical Requirements / Notes

You have been supplied a “monolithic” express server in the starter-code folder which fulfills the above requirements. To complete the work for this phase, refactor the provided server using best practices, modularizing the code and providing tests, as follows\

Today, we begin the first of a 3-Phase build of an authentication system, written in Express. The following core requirements detail the functionality for this phase of the project.\

## Links to application deployment\

Heroku:
GitHub: https://github.com/Code-Fellows-401/basic-auth
GitHub PR:

## Embedded UML\

WhiteBaord for Lab-04:
![whiteboard](./lib/images/api-server.png)\

## Routes Used\

Path: /person?name=
responds with an { Object } with a key: value pair as follows -> {name: 'Name Here'}.\
HTTP GET

## Route: /system

Path: /system
responds with all { Object } with a key: value pair as follows -> {name: 'Name Here', city: 'Name Here'}.\
HTTP GET

Path: /system:id
responds with a specific { Object } based on the input Id with a key: value pair as follows -> {name: 'Name Here', city: 'Name Here'}.\
HTTP GET

Path: /system
Creates an specific { Object } based on the input model with a key: value pair as follows -> {name: 'Name Here', city: 'Name Here'}.\
HTTP POST

Path: /system:id
Updates a specific { Object } based on the id reference and the input model with a key: value pair as follows -> {name: 'Name Here', city: 'Name Here'}.\
HTTP PUT

Path: /system:id
Deletes a specific { Object } based on the id reference.\
HTTP DELETE

## Route: /game

Path: /game
responds with all { Object } with a key: value pair as follows -> {name: 'Name Here', position: 'Name Here'}.\
HTTP GET

Path: /game:id
responds with a specific { Object } based on the input Id with a key: value pair as follows -> {name: 'Name Here', position: 'Name Here'}.\
HTTP GET

Path: /game
Creates an specific { Object } based on the input model with a key: value pair as follows -> {name: 'Name Here', position: 'Name Here'}.\
HTTP POST

Path: /game:id
Updates a specific { Object } based on the id reference and the input model with a key: value pair as follows -> {name: 'Name Here', position: 'Name Here'}.\
HTTP PUT

Path: /game:id
Deletes a specific { Object } based on the id reference.\
HTTP DELETE
