//Function declaration

function greeting(name) {  
  console.log (`Hello, ${name}!`);
}
greeting('Alice'); // Calling the function

// Function expression

const greet = function greeting(name) {
  console.log(`Hi, ${name}!`);
};

console.log(greet); // Output: [Function: greeting]

function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // Output: 8

const multiply = function(a, b) {
  return a * b;
} 

const productValue = multiply(4, 6);
console.log(productValue); // Output: 24

// Arrow function
const square = x => x * x;  
const result = square(4);
console.log(result); 
// Output: 25



