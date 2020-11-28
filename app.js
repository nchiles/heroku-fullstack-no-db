const express = require('express'); // import express module (simplifies routing/requests, among other things)
const app = express(); // create an instance of the express module (app is the conventional variable name used)
const PORT = process.env.PORT || 5000; // use either the host env var port (PORT) provided by Heroku or the local port (5000) on your machine

app.use(express.static('public')) // serve static files (css & js) from the 'public' directory
app.set('view engine', 'ejs'); // set the view engine to ejs

app.get('/', (req, res) => { // send a get request to root directory ('/' is this file (app.js))
  res.render('index'); // render page
});

app.listen(PORT, () => { // start server and listen on specified port
  console.log(`App is running on ${PORT}`) // confirm server is running and log port to the console
}) 