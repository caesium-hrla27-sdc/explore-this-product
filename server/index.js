const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const controller = require('./mongo/controller.js');
const PORT = 4444;

const db = require('../db/mongo/index.js');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/explores/:id', controller.explores.get);
app.post('/explores/:id', controller.explores.post);
app.put('/explores/:id', controller.explores.update);
app.delete('/explores/:id', controller.explores.delete);

// Loader.io verififcation route
app.get('/loaderio-4149a8bff042e152ce3a6f8106e29585.txt', (req, res) => {
  res.status(200).send('loaderio-4149a8bff042e152ce3a6f8106e29585')
})

app.listen(PORT, () => console.log('the server is listening on ', PORT));


// loaderio-4149a8bff042e152ce3a6f8106e29585