// import fs from 'fs';
const fs = require('fs');
const data = {
  name: 'saikiran',
  age: 21,
  id: 156,
};
fs.writeFile('jsondata.json', JSON.stringify(data), (err) => {
  console.log(err);
});
fs.readFile('jsondata.json', 'utf-8', (err, data) => {
  console.log(err, JSON.parse(data));
});
