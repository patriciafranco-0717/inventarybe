const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const brands = new Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: Boolean,
    },
    creationDate: {
      type: Date,
    },
    updateDate: {
      type: Date,
    },
  },
  {collection: 'Brands'},
);

module.exports = mongoose.model('brands', brands);
