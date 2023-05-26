// import os from 'os';
const os = require('os');

const newLine = os.EOL;
console.log(`Hello${newLine}World!`);
console.log(os.arch());
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.totalmem() / 1024 / 1024 / 1024); //Gives Total RAM in bytes and then converting into gigabytes
console.log(os.freemem() / 1024 / 1024 / 1024);
