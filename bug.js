const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello');
  }, 5000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//The problem is that if the client closes the connection before the 5-second timeout expires, the server will still try to send the response, resulting in an error.