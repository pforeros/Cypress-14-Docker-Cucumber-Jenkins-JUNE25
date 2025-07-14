// Switch statement

let day = 9
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thrusday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend"
    break;
}
console.log(`It's a ${dayName}`);