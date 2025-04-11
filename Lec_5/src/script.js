//Object
let person = {name : 'Emaan',age: 20,registeredCourses : {
    subject1 :'PF',
    subject2 : 'OOP',
}, 
//Method to display Name
displayname : function(){
    return this.name;
}
};
person.prototype.semesterStarts = true;
person.prototype.greet = function(){
    return 'Hello $[this.name]';
}
//person["city"] = "Fsd";
console.log(person);
//console.log(person["registeredCourses"][0]["subject1"]);
//Good Way
//console.log(person["name"]);

// let id = "name";
// console.log(person[id]);
//Not a Good Way
//console.log(person.name);

//New Object
// let person1 = new Object();
// person1.name = 'Talha';
// console.log(person1);

// let person2 = Object.create(null);
// person2.name = 'Aneeqa';
// person2.age = 17;
// console.log(person2);

//Method to print keys
//console.log(Object.keys(person));
// for(key in person){
//     console.log(person[key]);
// }

//Method to print values
//console.log(Object.entries(person));

//Spread operator
// let currentStudent = (...person);

// function add(...val){
//     let result = 0;
// for(counter = 0;counter < val.length ; counter++){
//     result += val[counter];
// }
// }


//Factory Function
// function createPerson(name,isStudent){
//     this.name = name;
//     this.isStudent = isStudent;
// }

// let person4 = new createPerson('Emaan',true);
// let person5 = new createPerson('Aneeqa'.false);

// console.log(person4);