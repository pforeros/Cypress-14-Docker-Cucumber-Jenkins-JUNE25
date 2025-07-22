//Arrays

//arrays litreal

let fruits = ['apple', 'banana', 'cherry'];

// array constructor
let fruits2 = new Array('pineapple', 'strawberry', 'mango');

console.log(fruits[1]);

//length
console.log(fruits.length);

fruits2.push('kiwi'); // add to the end
console.log(fruits2);

fruits2.pop();// add to the end
console.log(fruits2);

//Itarate using for loop

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}   

//Itarate using forEach loop

for (let x of fruits) {
  console.log(x);
} 