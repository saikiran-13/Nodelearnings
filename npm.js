// import chalk from 'chalk';
// import validator from 'validator';
const chalk = require('chalk');
const validator = require('validator');
//This validator contains a lot of checks like isEmail,isEthereumAddress,isFloat,isHash,isNumeric,isAlpha,isEmpty,isAlpha,isAlphanumeric etc...
console.log(chalk.underline.blue('hello world'));
console.log(chalk.green.inverse('success'));
console.log(chalk.red.inverse('failure'));
const mymail = validator.isEmail('saikiran@simformsolutions.com');
console.log('');
console.log(mymail ? chalk.green.inverse(mymail) : chalk.red.inverse(mymail));
