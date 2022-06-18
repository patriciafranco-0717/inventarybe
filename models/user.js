const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema(
  {
    name: {
      type: String,
    },
    email: {
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
  {collection: 'User'},
);

module.exports = mongoose.model('users', user);
