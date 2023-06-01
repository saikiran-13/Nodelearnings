require('dotenv').config();
var jwt = require('jsonwebtoken');
const express = require('express');
const { sendStatusCode } = require('next/dist/server/api-utils');
const app = express();
app.use(express.json());
const refreshtokens = [];

//Based on the authorization of user respective post will be shown

const posts = [
  {
    name: 'abc',
    post: 'post1',
  },
  {
    name: 'def',
    post: 'post2',
  },
];

//checking authorization and showing the post accessed by the user
app.get('/', authorize, (req, res) => {
  res.json(
    posts.filter((post) => {
      return post.name == req.body.username;
    }),
  );
});

//Login
app.post('/login', (req, res) => {
  const username = req.body.username;
  const userdetails = {
    user: username,
  };
  const accesstoken = createToken(userdetails);
  const refreshtoken = jwt.sign(userdetails, process.env.REFRESH_TOKEN_KEY);
  refreshtokens.push(refreshtoken);
  res.json({ token: accesstoken, refreshtoken: refreshtoken });
});

//delete the refreshtokens
app.delete('/logout', (req, res) => {
  refreshtokens = refreshtokens.filter((token) => token != req.body.token);
  console.log('deleted');
  res.sendStatus(201);
});

//creating a new jwt token by refresh token
app.post('/token', (req, res) => {
  const refreshtoken = req.body.token;
  if (refreshtoken == null) return res.sendStatus(401);
  if (!refreshtokens.includes(refreshtoken))
    return res.send('Refresh Token already exists');
  jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_KEY, (err, user) => {
    console.log(err, '..................................');
    if (err) return res.send('verification failed');
    console.log(user, '.......................................');
    const refreshtoken = createToken({ name: user.name });
    res.json({ newaccesstoken: refreshtoken });
  });
});

//creating a jwt token
function createToken(userdetails) {
  return jwt.sign(userdetails, process.env.SECRET_KEY, {
    expiresIn: '40s', //setting the expiry time to 40sec(m for min,h for hours,also set for days,years)
  });
}

//middleware function
function authorize(req, res, next) {
  const headerauth = req.headers.authorization;
  const tokenaccess = headerauth && headerauth.split(' ')[1]; //Bearer <Token>
  console.log(tokenaccess);
  if (tokenaccess == null) return res.sendStatus(401);
  jwt.verify(tokenaccess, process.env.SECRET_KEY, (err, user) => {
    if (user == null || err) {
      return res.status(405).send('Token invalidated!!!');
    }
    req.user = user;
    console.log(user);
    console.log('Token verified');
    next();
  });
}

app.listen(6000);
//First provide the username in the json format in postman and  perform the login post request which gives accesstoken and refresh token
//second copy the accesstoken and create a authorization key and provide value as accesstoken header in the get request and run request u get a post that is validated for few seconds,after that invalidated
//Third copy the refreshtoken and provide the token in the jsonfromat and perform the token post request u will get new accesstoken
//As first access token invalidated for few seconds replace that authorization key with this new accesstoken now again it will work for few seconds
