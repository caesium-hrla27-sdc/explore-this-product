const mongoose = require('mongoose');
mongoose.connect('mongodb://lucky:pwd@18.222.24.12:7770/exploreProducts', {
  useNewUrlParser: true
});
// mongoose.connect('mongodb://localhost/exploreProducts', {
//   useNewUrlParser: true
// });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error to db'));
db.once('open', () => {
  console.log('connected to db');
});

module.exports = {
  db
};