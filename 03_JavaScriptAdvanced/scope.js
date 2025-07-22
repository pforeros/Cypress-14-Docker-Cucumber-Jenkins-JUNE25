//scope

//Global scope

/*const globalVar = "I am a global variable";
// Function scope
function globalFunction() {
    const localVar = "I am a local variable";
    console.log(localVar);
    console.log(globalVar);
} 

//console.log(localVar); // This will throw an error because localVar is not defined in the global scope
globalFunction();

if (true){
  let blockVar = "I am a block variable";
  console.log(blockVar); // This will work  
}
console.log(blockVar); // This will throw an error because blockVar is not defined in the global scope  
*/

function hoistingExample() {
    console.log(x); // undefined due to hoisting
    var x = 10;
    console.log(x); // "I am hoisted"
}
hoistingExample();

if (true) {
    console.log(x)
    let x = 10;
    console.log(x)
}
