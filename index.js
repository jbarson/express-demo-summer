const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const aboutRoutes = require('./routes/about')
const contactRoutes = require('./routes/contact')
const shoesRoutes = require('./routes/shoes')
const usersRoutes = require('./routes/users')

app.use(express.static('static'))
app.use((req, res, next)=> {
  if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
    res.status(400).send('Server requires application/json');
  } else {
    next();
  }
})
// app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// axios.get('https://www.google.com').then(response => console.log(response))

app.get('/', (_req, res) => res.json('{name: "Jon", level, "Educator"}'));
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes)
app.use('/shoes', shoesRoutes)
app.use('/users', usersRoutes)

app.listen(8080,() => console.log('running on port 8080'));