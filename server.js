import express from 'express';
import bodyParser from 'body-parser';
import peliRoutes from './routes/pelis.routes.js';
import juegoRoutes from './routes/juegos.routes.js';
import serieRoutes from './routes/series.routes.js';
import razorRoutes from './routes/razor.routes.js';
import https from 'https';
import fs from 'fs';
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
app.use('/api/v1/pelis', peliRoutes); // /shunt para todo lo de ahora, / razor lo que hace Juani???
app.use('/api/v1/juegos', juegoRoutes);
app.use('/api/v1/series', serieRoutes);
app.use('/razor/v1/', razorRoutes);
// listen for requests
//app.listen(port, () => {
  //console.log(`Server is listening on port ${port}`);
//});

var options = {
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.cert')
};

https.createServer(options, app).listen(443);
