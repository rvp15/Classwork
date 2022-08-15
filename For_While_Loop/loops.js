// Topic:For Loop:
// Exercise 1:Count down from 10 to 1 :

for (i = 1; i <= 10; i++) {
  console.log(i);
}
//Exercise 2:
console.log("Exercise:2");
for (i = 1; i <= 10; i = i + 2) {
  console.log(i);
}
for (j = 2; j <= 10; j = j + 2) {
  console.log(j);
}

// Exercise 3:Multiple of 6:
console.log("Exercise:3");
for (i = 6; i <= 60; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// Exercise 4: Hash Tree
let str = "";
for (let i = 1; i < 8; i++) {
  str += "#";
  console.log(str);
}

// Exercise 4:Even number between 0 to 10
for (i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// Exercise 5:Prime,even,odd
// for (i = 0; i <= 20; i++) {}

//Exercise 6:Multiple of 3 till 35 using while loop

let i = 3;
while (i <= 35) {
  if (i % 3 == 0) {
    console.log(i);
  }
  i++;
}

// Exercise 7: Multiple of 5 till 100
let i = 5;
while (i <= 100) {
  if (i % 5 == 0) {
    console.log(i);
  }
  i++;
}
// Exercise 8: Print numbers divisible by 2 multiplied with 3
let q = 0;
while (q <= 20) {
  if (q % 2 == 0) {
    console.log(q * 3);
  }
  q++;
}

//Exercise 9:
// let isPrime = true;
// for (let i = 2; i <= 20; i++) {
//   for (let j = 2; j < i - 1; j++) {
//     if (i % j == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
//   isPrime = true;
// }
// using while loop

let isPrime = true;
let k = 2;
while (k <= 100) {
  let j = 2;
  while (j < k - 1) {
    if (k % j == 0) {
      isPrime = false;
      break;
    }
    j++;
  }
  if (isPrime) {
    console.log(k);
  }
  isPrime = true;
  k++;
}

// Exercise 10:Logical question
// Remainder in quaters
let cost = 4;
let amt = 10;
while (true) {
  let remainder = amt - cost;
  console.log(`Number of quaters back in change: ${remainder * 4}`);
  break;
}
// Exercise 11: While loop for :10,30,50,70...100
let i = 10;
while (i <= 100) {
  console.log(i);
  i += 20;
  if (i === 90) {
    console.log(i);
    i = 20;
  }
}
//Exercise 12: while loop to print from 500-800 if they are divisible by 4:
let a = 500;
while (a <= 800) {
  if (a % 4 == 0) {
    console.log(a);
  }
  a++;
}

// Exercise 13:2 nested loop
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}
