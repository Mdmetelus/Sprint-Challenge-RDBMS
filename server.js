const express = require('express');
const helmet = require('helmet');
const server = express();
const allRoutes = require("./allRoutes/index");
const dbP = require("./data/helpers/projectModel");
const dbA = require("./data/helpers/actionModel");





server.use(express.json());
server.use(helmet());
server.use('/api', allRoutes);



//routes
server.get('/', (req, res) => {
    res.send(`API working.\n Sanity Check\n Test Route!`);
});
  
  
  
  module.exports = server;