const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const taskRouter = require('./routers/taskRouter')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

server.use('/api/tasks', taskRouter);

// SANITY CHECK
server.get('/', (req, res) => {
  res.send('HELLO WORLD!')
})

module.exports = server;