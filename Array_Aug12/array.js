// Exercise 1:create function maxOfTwoNumbers with two parameters return the largest of two numbers if they are equal return the that number
function maxOfTwoNumbers(x, y) {
  if (x == y) return x;
  else if (x > y) return x;
  else return y;
}
console.log(maxOfTwoNumbers(4, 5));

// Exercise 2:A function expression name maxOfThree takes three arguments return the  largest
const maxOfThree = function (x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
};
console.log(maxOfThree(1, 2, 3));
// Exercise 3:A function isCharAVowel takes one argument and returns true if it is a vowel and false if it is a vowel

function isCharAVowel(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(isCharAVowel("a"));
//Exercise 4:A function sumArray takes an array of numbers and returns the sum of all the numbers

const sumArray = function (numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
};
console.log(sumArray([1, 2, 3, 4, 5]));


//Exercise 5:function multiplyArray takes an array of numbers and returns the product of all the numbers.
function multiplyArray(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
}
console.log(multiplyArray([1, 2, 3, 4, 5]));

// Exercise 6:A Function expression numArgs returns the number of args passed to the function
const numArgs = function (...arguments) {
  return arguments.length;
};
console.log(numArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Exercise 7:A Function reversString takes a string as an argument reverses the chars and returns it

function reversString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
console.log(reversString("vedha"));

//Exercise 8:A Function expression longestStringArray takes an array of strings as an argument and returns the length of the longest string

const longestStringArray = (...arrayStrings) => {
  let longstring = "";
  for (let i = 0; i < arrayStrings.length; i++) {
    if (arrayStrings[i].length > longstring.length) {
      longstring = arrayStrings[i];
    }
  }
  return longstring;
};
console.log(longestStringArray("vedha", "priyaa", "raj"));

// Exercise 9:Function stringsLongerThan, takes an array of strings  and a number as arguments and returns an array of the strings that are longer than the number passed

function stringsLongerThan(arrstr1, num) {
  let resultArray = [];
  for (let i = 0; i < arrstr1.length; i++) {
    if (arrstr1[i].length >= num) {
      resultArray.push(arrstr1[i]);
    }
  }
  return resultArray;
}
console.log(stringsLongerThan(["sami", "Ani", "vedha", "priyaa"], 4));

//Exercise 10: A Function called addList that accepts any quantitty of numbers as arguments, adds them together and return the resulting sum

function addList(...numbers) {
  let summAll = 0;
  for (let i = 0; i < numbers.length; i++) {
    summAll += numbers[i];
  }
  return summAll;
}
console.log(addList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
