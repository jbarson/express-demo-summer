const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const ingredients = ['turkey', 'gravy', 'potatoes', 'carrots']; 

app.get('/famousdish', (req, res) => res.send('Turkey dinner'));

app.get('/ingredients', (req, res) => res.json(ingredients));

app.post('/orders', (req, res) => {
  res.status(418);
  res.send('We are not taking orders at this time. Our service is temporarily down')
})

app.listen(8080,() => console.log('running on port 8080'));