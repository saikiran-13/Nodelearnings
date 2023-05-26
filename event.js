const EventEmitter = require('events');
const fs = require('fs');
const http = require('http');

const event = new EventEmitter();

event.on('basicevent', (click) => {
  console.log('Event Emitted', click);
});
event.emit('basicevent', true);

const server = http.createServer();

server.on('request', (req, res) => {
  let filedata = fs.createReadStream('data.txt');
  //Display the content using pipe
  filedata.pipe(res);
  //Displaying the content using write by using event
  filedata.on('data', (chunkdata) => {
    res.write(`${chunkdata}`);
  });
  filedata.on('end', () => {
    res.end();
  });
  filedata.on('error', (err) => {
    console.log(err);
    res.end(`${err}`);
  });
});

server.listen(4000, '127.0.0.1', (err, data) => {
  console.log(data);
});
