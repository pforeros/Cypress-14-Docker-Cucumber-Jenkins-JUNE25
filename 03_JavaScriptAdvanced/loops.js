// loop

for (let i=0; i <5; i++){
  console.log (i);
}

let count = 0;
while (count < 8)
{
  console.log(count)
  count ++
}

let x=0
do {
  console.log(x);
  x++
}
while (x<5);

// break statement

for (let i=0; i<10; i++)
{
  if (i===5){
    break;
  }
  console.log(i);
}

for (let i=0; i<10; i++)
{
  if (i===3){
    continue;
  }
  console.log(i);
}