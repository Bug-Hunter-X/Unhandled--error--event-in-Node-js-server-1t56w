# Unhandled 'error' event in Node.js server
This repository demonstrates a common error in Node.js server-side development:  the unhandled 'error' event when a client disconnects before the server has finished processing the request.
The `bug.js` file contains code that simulates this scenario.  A simple HTTP server is created that sends a response after a 5-second delay. If the client disconnects before the delay, the server throws an error.
The `bugSolution.js` file provides a solution by properly handling the 'close' event emitted by the response object.