const app = require('express')();
const PORT = 5000;

app.use(logger);

app.get('/', (req, res) => {
  console.log('Home Request');
  res.send('Welcome to the home page');
});

app.get('/login', authorize, (req, res) => {
  console.log();
  console.log('Login Request');
  res.write(`Welcome to the Admin page,Request  ${req.taskdone}`);
  res.send();
});

function logger(req, res, next) {
  console.log('Logged in ');
  next();
  console.log('Logged out');
}

function authorize(req, res, next) {
  if (req.query.admin === 'true') {
    req.taskdone = 'success';
    res.write('Admin Authorization success\n');
    console.log('Admin Authorization access successful', req.originalUrl);
    next();
    return;
  }
  res.send('Authorization failure');
  console.log("You don't have access", req.originalUrl);
}

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});
