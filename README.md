# AirTV


## Built With

* Node.js
* WebSockets
* JavaScript ES6
* jQuery 3.2.1
* HTML5/CSS3

## Development Process
* [1. Concept]
* [2. Initial Planning]

### 1. Concept

[maybe a "how you came up with it" can go here]

A service that allows users to connect to a main host and interact with the host and other users. The main host will be able to gather information, answer questions, or poll users in real time.

Users can access the session via phone, tablet, or computer by going to a web address and entering a password to join a session with other users.

### 2. Initial Planning

8-11-17

We brainstormed what we wanted a barebones version of the application to look like, and ended up creating a list of first steps to implement:

* Begin with simple method of sending information back and forth between two servers
* Basic HTML set-up
    - To get, send out, get, and send back info
* Creating tables
    - All should have similar host keys
* Using "questions" format only (later expanding to survey, etc.)

We decided on to work on a model where a server with WebSockets and a client sent messages back and forth. Then we would have a separate "Question Handler" that would deal with the information inside of those messages. The handler would have methods such as:

- `.getQuestionId()`
- `.getAnswer()`
- `.serialize()`

We decided to shoot for the following folder set-up:

/Server
- WebSockets
- HTTP/Server/Express
- Get response from client .... .js
- Write to database

/Public
- HTML
- Client.js

