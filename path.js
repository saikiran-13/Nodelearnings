// import path from 'path';
const path = require('path');
const location = '/home/saikiran/nodelearnings/path.js';
console.log(path.dirname(location));
console.log(path.basename(location));
console.log(path.extname(location));
console.log(path.isAbsolute(location));
console.log(path.normalize(location + '..\\..\\'));
console.log(path.posix); //Portable operating system interface returns object contains all functions
console.log(path.parse(location));
