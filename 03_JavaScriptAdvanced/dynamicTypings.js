//Type inference

let x = 42;
let y = 'Pilar';
let z = true;

// Data Types Can Change

let a = 42;
console.log(typeof(a));
a = 'Andrea';
console.log(typeof(a));

//Type Coercion 

let result = 5 + "5"; // '55' (string)
console.log(result);
console.log(typeof(result)); // 'string'

//Type checking

let b= '50';
if (typeof(b) === 'number') {
  console.log('b is a number');
}
else{
  console.log('b is not a number'); 
}