/**
 * Headers
 */
import express = require('express');
import bodyParser = require('body-parser');
import mongoose = require('mongoose')
import Routes from "./routes/router"

const mongoURL = 'mongodb://mongo:27017';
const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log("connected to Mongo!");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(-1);
  });

// Route
app.use('/', Routes);


export default app