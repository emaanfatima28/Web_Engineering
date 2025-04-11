//Function - set of statements we call
//Declaration and Calling
function func1() {
  console.log("I am invoked");
}
//func1();

// let greet = function(name) {
//     return `Welcome ${name}`;
// };

// let bye = function(name){
//     return `Bye ${name}`;
// }
// console.log(greet("Emaan"));
// console.log(bye("Emaan"));

// function duplicateItems(arr) {
//     let duplicates = [];
//     let seen = new Set();

//     for (let item of arr) {
//         if (seen.has(item) && !duplicates.includes(item)) {
//             duplicates.push(item);
//         }
//         seen.add(item);
//     }

//     console.log("Duplicated items:", duplicates);
// }

// duplicateItems([1, 2, 3, 4, 2, 5, 3, 6, 7, 8, 1]);

// let nameless = (name) => "Hello" + name
// let duplicates = (arr) => arr.filter((e, i) => arr.indexOf(e) !== i);
// console.log(duplicates([1, 2, 3, 2, 4, 5, 6, 3, 7, 8, 8]));

// let multiply = function(a,b){
//     return a * b;
// };
// let manipulator = function(val1,val2,func){
//     return func(val1,val2)
// };

//Arrow Functions
// let multiply = (a, b) => a * b;
// let add = (a, b) => a + b;
// let manipulator = (val1, val2, func) => func(val1, val2);

// console.log(manipulator(3, 5, add));

// function counter(){
//     let count = 0;
//     return function(){
//         return count++;
//     };
// };

// let increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment());

// function duplicates(arr) {
//     return function duplicateItems() {
//         let duplicates = [];
//         let seen = new Set();
    
//         for (let item of arr) {
//             if (seen.has(item) && !duplicates.includes(item)) {
//                 duplicates.push(item);
//             }
//             seen.add(item);
//         }
    
//         console.log("Duplicated items:", duplicates);
//     };
// }

// let dup = duplicates([1, 2, 3, 4, 2, 5, 3, 6, 7, 8, 1]);
// dup(); 

function mult(...val) {
    return val.reduce((product, current) => product * current, 1);
}

console.log(mult(2, 3, 4)); 
console.log(mult(5, 6));
console.log(mult()); 
