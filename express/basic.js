const express = require('express');
const app = express();
const PORT = 8000 || process.env.PORT;
app.get('/', (req, res) => {
  res.send('Hi from Server');
});
app.get('/about', (req, res) => {
  //Bydefault it request  received successfully The server sends response but u can explicity write it like this
  res.status(200).send('<h1>Welcome to the about section</h1>');
});
app.get('/json', (req, res) => {
  //res.send converts the objects, and array of objects into json format(BTS json.stringify) contenttype is text/html
  //also use res.json here contenttype is set to application/json,works even for null and undefined
  res.send([
    {
      name: 'saikiran',
      age: 21,
      taskdone: true,
    },
  ]);
});
app.listen(PORT, () => {
  console.log('Application is listening on port no', PORT);
});
