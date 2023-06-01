const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());
let users = [];

app.get('/api/get', (req, res) => {
  res.json(users);
});

app.post('/api/signup', async (req, res) => {
  console.log(req.body);
  try {
    const salt = await bcrypt.genSalt();
    console.log(salt);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log('salt ', salt, '\nHashed password ', hashedPassword);
    const user = {
      name: req.body.name,
      password: hashedPassword,
    };
    users.push(user);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

app.post('/api/signup/login', async (req, res) => {
  const user = await users.filter((user) => {
    return user.name == req.body.name;
  });

  if (user == null) {
    res.status(400).send('User Not Found!!!');
  }

  try {
    if (await bcrypt.compare(req.body.password, user[0].password)) {
      res.send('Login Successful');
    } else {
      res.send('Login Unsuccessful');
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
