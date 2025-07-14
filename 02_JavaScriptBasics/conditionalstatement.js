/*
The if statement:

if (condition ){
  //code to be executed if the condition is true
}
*/

let age = 23;
if (age >= 18){
  console.log('You are an adult')
}

// if / else

let num = 'a';

if (num>0){
  console.log('Number is positive')
}
else if (num<0){
  console.log('Number is negative')
}
else{
  console.log('Number is zero')
}

/* else statement

if condition {
  // code to be executed if the condition is true
}
else{
  //code to be exectuted if the condition is false
}
*/

// nested statement

let num2= 12
if (num2 >= 0){
  if (num2===0){
      console.log('Number is Zero');
  }
  else{
      console.log('Number is positive');
  }
}
else 
  console.log('Number is negative');

