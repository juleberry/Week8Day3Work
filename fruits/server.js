// -------------------------
// Require Statements
// -------------------------

const express = require('express');
const app = express();
const fruits = require('./models/fruits');
const veggies = require('./models/veggies');
require('dotenv').config();
const mongoose = require('mongoose')
const Fruit = require('./models/Fruit');
const Veggie = require('./models/Veggie')

// -------------------------
// Mongoose Connection Stuff
// -------------------------

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', ()=> {
  console.log('connected to mongo');
});

// -------------------------
// Setting Up View Engine
// -------------------------

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// -------------------------
// Setting Up Body Parser
// -------------------------

app.use(express.urlencoded({extended:false}));

// -------------------------
// Fruit Routes
// -------------------------

// Index
app.get('/fruits', (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    res.render('fruits/Index', {
      fruits: allFruits
    });
  })
});

// New
app.get('/fruits/new', (req, res) => {
  res.render('fruits/New');
});

// Create
app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit) => {
    res.redirect('/fruits')
  })
});

// Show
app.get('/fruits/:id', (req, res) => {
  Fruit.findOne({ _id: req.params.id }, (error, foundFruit) => {
    res.render('fruits/Show', {
      fruit: foundFruit
    });
  });
});

// -------------------------
// Veggies Routes
// -------------------------

// Index
// Add a Veggie.find to find all of the veggies and pass that to your res.render
app.get('/veggies', (req, res) => {
  Veggie.find({}, (error, allVeggies) => {
    res.render('veggies/Index', {
      veggies: allVeggies
    });
  })
});

// New
// Same as for fruits
app.get('/veggies/new', (req, res) => {
  res.render('veggies/New');
});

// Create
// Same as for fruits
app.post('/veggies', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Veggie.create(req.body, (error, createdVeggie) => {
    res.redirect('/veggies')
  })
});

// Show
// Add a Veggie.findOne with the _id of the veggie you want to display. Reference the fruits one!
app.get('/veggies/:id', (req, res) => {
  Veggie.findOne({ _id: req.params.id }, (error, foundVeggie) => {
    res.render('veggies/Show', {
      veggie: foundVeggie
    });
  });
});

// -------------------------
// App Is Listening
// -------------------------

app.listen(3000, () => {
  console.log('listening on port 3000');
});