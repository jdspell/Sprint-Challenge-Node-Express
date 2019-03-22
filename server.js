const express = require('express');
const projectRouter = require('./data/routers/projectRouter.js');
const actionRouter = require('./data/routers/actionRouter.js');

const server = express();

server.use(express.json());
server.use('/projects', projectRouter);
// server.use('/actions', actionRouter);

module.exports = server;