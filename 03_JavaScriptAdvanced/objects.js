//objects

let person = {

  firstName: 'John',
  lastName: 'Doe',
  age: 30
}

//Object Constructor
let person2 = new Object();
person2.firstName = 'Jane';
person2.lastName = 'Smith';
person2.age = 25;

console.log(person.firstName); // Accessing property
console.log(person2['lastName']); // Accessing property using bracket notation

console.log(person.age); // Accessing property
person.age = 50;
console.log(person.age); // Updated property

person.email ='johndoe@mail.com'  
delete person.email; // Deleting property

let person3 = {

  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  } 
}
console.log(person3.fullName()); // Calling method  

