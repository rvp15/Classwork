// Topic : Function

// Exercise1:Write a function declaration

function computeArea(width, height) {
  console.log(
    `The area of a rectangle with a width is ${width} and a height of ${height} is ${
      width * height
    } square units`
  );
}
computeArea(2, 5);

// Exercise 2:

const planetHasWater = function (a) {
  let caseSen = a.toLowerCase();
  if (caseSen === "earth" || caseSen === "mars") {
    return "true";
  } else {
    return "false";
  }
};
console.log(planetHasWater("erth"));

// Exercise 3:Arrow function

const computeArea1 = (width, height) => {
  console.log(
    `The area of a rectangle with a width is ${width} and a height of ${height} is ${
      width * height
    } square units`
  );
};
computeArea1(5, 6);

// #2:
const planetHasWater1 = (a) => {
  let caseSen = a.toLowerCase();
  if (caseSen === "earth" || caseSen === "mars") {
    return "true";
  } else {
    return "false";
  }
};
console.log(planetHasWater1("Mars"));
