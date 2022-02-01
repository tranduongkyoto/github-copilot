// create express appplication
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
// connect to mongodb
mongoose.connect(config.database);
// on connection
mongoose.connection.on('connected', () => {
  console.log('connected to database ' + config.database);
});

// run server on port 3000
app.listen(3000, () => {
  console.log('server started on port 3000');
});
