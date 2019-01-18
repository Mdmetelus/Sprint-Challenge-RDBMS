const express = require('express');
const helmet = require('helmet');
const server = express();

// const db = require("./data/helpers/dataAccessFunct");


server.use(express.json());
server.use(helmet());



//routes
server.get('/', (req, res) => {
    res.send(`API working.\n Sanity Check\n Test Route!`);
});
  
  
  
  module.exports = server;