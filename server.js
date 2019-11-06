const express = require('express');

const db = require('./data/dbConfig.js');

const CarRouter = require('./data/CarRouter.js')

const server = express();

server.use(express.json());

server.use('/api/cars', CarRouter)
module.exports = server;
