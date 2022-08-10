// const firstName = "vedha";
// const lastName = "priya";
// let fullname = firstName + lastName;
// console.log(fullname);
//Topic:Variables
//find the sum

let a = 5;
let b = 10;
let c;
console.log((c = a + b));

//find product
let x = 5;
let y = 4;
let w = 7;
let z;
console.log((z = x * y * w));

// Find the average
let a1 = 1,
  a2 = 2,
  a3 = 3;
(a4 = 4), (a5 = 5), (a6 = 6), (a7 = 7), (a8 = 8), (a9 = 9), (a10 = 10);
let avg1 = (a1 + a2 + a3 + a4 + a5) / 5;
let avg2 = (a6 + a7 + a8 + a9 + a10) / 5;
let totalavg = (avg1 + avg2) / 2;

console.log("average of first 5 numbers:" + avg1);
console.log("average of last 5 numbers:" + avg2);
console.log("average :" + totalavg);

//find average of (4,10,22,-30,55);
function findavg(numbers) {
  let sum = 0;
  let n = numbers.length;
  for (let i = 0; i < n; i++) {
    sum += numbers[i];
  }
  let avg = sum / n;
  console.log(avg);
}

findavg([4, 10, 22 - 30, 55]);
findavg([68, 7, -22, 9, 100]);

//exercise 5

function swapbox(box1, box2) {
  let temp;
  console.log("before swapping box1 value " + box1);
  console.log("before swapping box2 value " + box2);
  temp = box2; //temp=8
  box2 = box1; // box2=2
  box1 = temp; // box1=8
  console.log("afterswapping box1 value " + box1);
  console.log("afterswapping box2 value " + box2);
}
swapbox(2, 8);

//Topic:conditional operator
//exercise 1:
let num = -7;
if (num > 0) {
  console.log("Its is a positive number");
} else if (num == 0) {
  console.log("The number is zero");
} else {
  console.log("Its is a negative number");
}

//exercise 2;
function access(age1) {
  if (age1 >= 18) console.log("Access Granted");
  else console.log("Access Denied");
}
access(24);

//exercise 3: nested if:

let number1 = 10;
if (number1 > 0 && number1 > 100) {
  console.log("The number is positive and greater than 100");
} else if (number1 > 0 && number1 < 100) {
  console.log(" The nuber is positive and lesser than 100 ");
} else if (number1 < 0) {
  console.log(" The is negative number");
} else {
  console.log("The number is zero");
}

//Exercise 4:

let grade = 55;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 55) {
  console.log("D");
} else {
  console.log("F");
}
//Topic:Switch statement
// Exercise1:
