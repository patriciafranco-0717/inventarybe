const express = require('express');
const app = express();
const bp = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const typeOfDevices = require('./models/type-of-device');
const statusOfDevices = require('./models/status-of-device');
const user = require('./models/user');
const brands = require('./models/brands');
const inventary = require('./models/inventary');

var uri =
  'mongodb+srv://pfranco0717:RuedaFranco03.@cluster0.tmib5.mongodb.net/test';

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});

const connection = mongoose.connection;

const port = process.env.PORT || 4000;

connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});

app.use(
  cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }),
);

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.listen(port, function () {
  console.log('Server is running on Port: ' + port);
});

app.get('/', function(req,res){
  res.send("Hola");
});

// Endpoints
//typeOfDevices
app.post('/create/type-of-device', cors(), function (req, res) {
  const data = {
    ...req.body,
    creationDate: new Date(),
    updateDate: new Date(),
  };
  typeOfDevices.insertMany(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/get/type-of-devices', cors(), function (req, res) {
  typeOfDevices.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//statusOfDevices
app.post('/create/status-of-device', cors(), function (req, res) {
  const data = {
    ...req.body,
    creationDate: new Date(),
    updateDate: new Date(),
  };
  statusOfDevices.insertMany(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/get/status-of-devices', cors(), function (req, res) {
  statusOfDevices.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//user
app.post('/create/user', cors(), function (req, res) {
  const data = {
    ...req.body,
    creationDate: new Date(),
    updateDate: new Date(),
  };
  user.insertMany(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/get/users', cors(), function (req, res) {
  user.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//brands
app.post('/create/brand', cors(), function (req, res) {
  const data = {
    ...req.body,
    creationDate: new Date(),
    updateDate: new Date(),
  };
  brands.insertMany(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/get/brands', cors(), function (req, res) {
  brands.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//inventary
app.post('/create/inventary', cors(), function (req, res) {  
  inventary.insertMany(req.body, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/get/inventaries', cors(), function (req, res) {
  inventary.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
