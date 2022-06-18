const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const statusOfDevice = new Schema(
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
  {collection: 'StatusOfDevice'},
);

module.exports = mongoose.model('statusOfDevices', statusOfDevice);
