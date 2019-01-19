const express = require('express');
const server = express();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const allRoutesP = require("./allRoutes/indexP");
const allRoutesA = require("./allRoutes/indexA");





server.use(express.json()); // json body parser
server.use(helmet());
server.use(morgan("short"));
server.use(cors());
server.use('/api/projects', allRoutesP);
server.use('/api/actions', allRoutesA);


  
  
  module.exports = server;


  