// const fs = require('fs')(
//   // import fs from 'fs'; for this use add 'type':'module' in package.json
//   function basicFile() {
//     fs.writeFileSync('data.txt', 'Created and added content in the file');
//     fs.writeFileSync(
//       'data.txt',
//       'Override the content in the existing file and adds the current content',
//     );
//     fs.appendFileSync(
//       'data.txt',
//       '\nAdding the contents without modifying the exisiting content',
//     );
//     //nodejs include a datatype "buffer",It reads as binary data and stores in the buffer
//     const bufferData = fs.readFileSync('data.txt');
//     const originalData = bufferData.toString();
//     console.log(originalData);
//     fs.renameSync('data.txt', 'renamedData.txt');
//     fs.renameSync('renamedData.txt', 'data.txt');
//   },
// )();

// (function crud() {
//   // Creating a Folder and FIle
//   fs.mkdirSync('./mainFolder');
//   fs.mkdirSync('mainFolder/subFolder');
//   fs.mkdirSync('mainFolder/subFolder/DeleteFolder');
//   fs.writeFileSync(
//     'mainFolder/subFolder/DeleteFolder/deleteFile.txt',
//     'This file is deleted at the end',
//   );
//   fs.writeFileSync(
//     'mainFolder/subFolder/file1.js',
//     'console.log("Hello world")',
//   );
//   //Reading the File and To get direct info without bufferdata use utf-8
//   const originalContent = fs.readFileSync(
//     'mainFolder/subFolder/file1.js',
//     'utf-8',
//   );
//   console.log(originalContent);
//   //Updating the Existing File
//   fs.appendFileSync(
//     'mainFolder/subFolder/file1.js',
//     '\nconsole.log("Data Added")',
//   );
//   //Deleting the contents in the file and Folder
//   fs.unlinkSync('mainFolder/subFolder/DeleteFolder/deleteFile.txt');
//   fs.rmdirSync('mainFolder/subFolder/DeleteFolder');
// })();
// //=======================================================================================================================
// //async functions takes a callback fn

// fs.writeFile(
//   'async.txt',
//   'Created and adding content asynchronously',
//   (err) => {
//     console.log(err);
//   },
// );

// fs.readFile('async.txt', 'utf-8', (err, data) => {
//   console.log(data);
//   console.log(err);
// });
// console.log(
//   'This line prints first and then data gets printed as it is asynchrous instead of waiting executes remaining lines',
// );
