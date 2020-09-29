const express = require('express');
const app = express();

app.get('/', (_req, res) => res.json('{name: "Jon", level, "Educator"}'));
app.get('/about', (req, res) => {
  res.send('This is the about page');
  console.log(req);
});
app.route('/contact')
  .get((_req, res) => res.send('get a contact'))
  .post((_req, res) => res.send('create a contact'))
  .delete((_req, res) => res.send('delete a contact'));

  app.get('/shoes',  (req, res) => {
    console.log(req.query.order);
 
    console.log(req.query.shoe.color);
 
    console.log(req.query.shoe.type);
 
    res.send('stuff');
});

app.get('/users/:username', (req, res) => {
  console.log('the user is: ', req.params.username);
  const user = req.params.username;
  let returnedData = user=== 'Lauren' ? 'Educator': 'someone else' 
  res.send(returnedData);
})



app.listen(8080,() => console.log('running on port 8080'));