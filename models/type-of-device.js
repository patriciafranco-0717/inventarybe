const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const typeOfDevice = new Schema(
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
  {collection: 'TypeOfDevice'},
);

module.exports = mongoose.model('typeOfDevices', typeOfDevice);
