const express = require('express');
const bodyParser = require('body-parser');
const peliRoutes = require('./routes/pelis.routes');
const juegoRoutes = require('./routes/juegos.routes');
const serieRoutes = require('./routes/series.routes');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require peli routes
// using as middleware
app.use('/api/v1/pelis', peliRoutes);
app.use('/api/v1/juegos', juegoRoutes);
app.use('/api/v1/series', serieRoutes);
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
