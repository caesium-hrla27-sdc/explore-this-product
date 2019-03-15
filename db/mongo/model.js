const mongoose = require('mongoose');

const exploresSchema = new mongoose.Schema({
  productId: { type: Number, unique: true },
  exploresLists: { type: Array, unique: true },
  videosLists: { type: Array, unique: true },
  articlesLists: { type: Array, unique: true },
  innerCarousel: { type: Array, unique: true }
}, { collection: 'explores' });

const Explores = mongoose.model('Explores', exploresSchema);

module.exports = Explores;