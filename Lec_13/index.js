//To include a module
//Require - import modules which are user defined
//Import - import modules which are built-in with npm

//const {add,sub} = require('./modules/add');

// const add = require('../modules/add');
// const sub = require('../modules/sub');
// const div = require('../modules/div');
// const mul = require('../modules/mult');


// console.log(add(3, 3));
// console.log(sub(3, 3));
// console.log(div(3, 3));
// console.log(mul(3, 3));

//const file = require('fs');
// //Write in a file
// file.writeFile('./data.txt', 'Ala bla ala blaa', (err) => { 
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File written successfully');
//     }
// });
// //Read from a file
// file.readFile('./data.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// //Delete a file
// file.unlink('./data.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File deleted successfully');
//     }
// });

//Salary Sum 
// async function sumSalary() {
//     let data = await file.readFile('./data.json', 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             const employees = JSON.parse(data);
//             let sum = 0;
//             employees.forEach(employee => {
//                 sum += employee.salary;
//             });
//             console.log(sum);
//         }
//     });
// }   
// sumSalary();

const file = require('http');
const server = file.createServer((req, res) => {  
 
    // res.write('Hello World!');  
    //res.writeHead(200, {'Content-Type': 'text/html'});  
    res.end("<h1>Welcome to Hell</h1>");  
});
server.listen(3000);
