const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const controller = require('./controller.js');
const PORT = 3005;
// const model = require('../db/model.js');
const db = require('../db/index.js');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/explores/:id', controller.explores.get);
app.post('/explores/:id', controller.explores.post);
app.put('/explores/:id', controller.explores.update);
app.delete('/explores/:id', controller.explores.delete);

app.listen(PORT, () => console.log('the server is listening on ', PORT));
