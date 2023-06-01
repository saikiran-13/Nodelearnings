//Routing
const app = require('express')();
const PORT = 4500;
const { logger } = require('./middlewares/test');
const basicrouter = require('./routes/route');
const postrouter = require('./routes/post');

app.use(basic);
app.use('/', basicrouter);

app.use('/posts', logger, postrouter); //specify middleware fns like this restrict to particular routes otherwise declare at top so it executes everytime

function basic(req, res, next) {
  console.log("You're in the localhost", PORT);
  next();
}

app.listen(PORT);
