const express = require('express');
const hbs = require('hbs');
const app = express();
const PORT = 5000 || process.env.PORT;
app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', './templates/hbsfiles');
hbs.registerPartials('./templates/partials');
//Nodejs follows top to bottom approach the first get req executed first and then ends
app.get('', (req, res) => {
  res.render('viewengine', { taskdone: true });
});
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/details', (req, res) => {
  res.render('details');
});
app.get('*', (req, res) => {
  res.render('404', { error: 'Something Went Wrong, Try Again....}' });
});
app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});
console.log('hello');
