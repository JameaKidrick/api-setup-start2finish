const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

// SANITY CHECK
server.get('/', (req, res) => {
  res.send('HELLO WORLD!')
})

module.exports = server;