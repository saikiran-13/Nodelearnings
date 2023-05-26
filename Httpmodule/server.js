const http = require('http');
const fs = require('fs');
console.log(__dirname);
const server = http.createServer((req, res) => {
  const url = req.url;
  const filedata = fs.readFileSync(`${__dirname}/../posts.json`, 'utf-8');
  const data = JSON.parse(filedata);
  if (url == '/') {
    res.end("Hello from Server,We've Got Your Request....");
  } else if (url == '/home') {
    res.write('Home page');
    res.end();
  } else if (url == '/posts') {
    // fs.readFile(`${__dirname}/../posts.json`, 'utf-8', (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     res.end();
    //     return;
    //   }
    console.log(data);
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(`${data[0]}`);

    // });
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end('<h1>404 Client side Error,Page Not Found</h1>');
  }
});

server.listen(8002, '127.0.0.1', (req, res) => {
  console.log('Your request has been succesfully reached to the server');
});
