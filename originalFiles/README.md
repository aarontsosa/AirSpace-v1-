# AirSpace

AirSpace is a group response platform that allows group members to provide feedback and answer questions in real time.
Group members can initiate or join existing sessions via phone, tablet, or computer by going to the AirSpace website and
entering their host's unique passport key. The host can then send surveys and view member responses in real time.

## Built With

* Node.js
* Express
* WebSockets
* JavaScript ES6
* jQuery 3.2.1
* HTML5/CSS3

## Development Process
* [1. Concept]
* [2. Initial Planning]
* [3. Database Architecture]
* [4. Structuring the Platform]
* [5. Visual Layout and Design]

### 1. Concept

We developed AirSpace with the intention of creating a multipurpose space where host users can poll other users and send information
back and forth instantly.


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

