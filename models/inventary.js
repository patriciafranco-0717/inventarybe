const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventary = new Schema(
  {
    serial: {
      type: String,
    },
    model: {
      type: String,
    },
    description: {
      type: String,
    },
    urlDevice: {
      type: String,
    },
    color: {
      type: String,
    },
    purchaseDate: {
      type: String,
    },
    price: {
      type: String,
    },
    user: {
      type: String,
    },
    brand: {
      type: String,
    },
    statusOfDevice: {
      type: String,
    },
    typeOfDevice: {
      type: String,
    },
  },
  {collection: 'Inventary'},
);

module.exports = mongoose.model('inventary', inventary);
