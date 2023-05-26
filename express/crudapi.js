const express = require('express');
const path = require('path');
const data = require(`${__dirname}/../posts.js`);

const targetPath = path.join(__dirname, '../public');

const app = express();
app.use(express.json());
app.use(express.static(targetPath));
// app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
  console.log('Reading the data...');
  res.send(data);
});

app.post('/api/data', (req, res) => {
  if (!req.body.email) {
    res.status(404).send('Error occured,Email not found');
  }

  const obj = {
    id: data.length + 1,
    name: req.body.name,
    email: req.body.email,
    body: req.body.body,
  };

  data.push(obj);
  console.log(data[10]);
  res.send(req.body);
});

app.put('/api/data/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.name + 'updated';
  const email = req.body.email;
  const body = req.body.body;
  const index = data
    .filter((post) => {
      return post.id == Number.parseInt(id) ? data.indexOf(post) : '';
    })
    .map((post) => {
      return post.id;
    });
  console.log(index);
  data[index[0]] = {
    id: id,
    name: name,
    email: email,
    body: body,
  };

  console.log(index[0]);
  console.log(name);
  res.send(data[index]);
});
//similarly for delete find index of the element and use splice to delete

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
