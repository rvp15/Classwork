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
let n = 5;
let char = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    char += "*";
  }
  char += "\n";
}
console.log(char);

// Exercise 4:
for (i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// Exercise 5:Prime,even,odd

for (let i = 2; i <= 20; i++) {
  if (number % i == 0) {
    isPrime = false;
    break;
  }
}
