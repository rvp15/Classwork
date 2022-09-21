const random = require('./utilities/random');
for (let i = 0; i < 10; i++) {
    console.log( random(100,200) );
}

const circle =  require('./utilities/circle');
 console.log(`Area of Circle: ${circle.area(50)}`);
 console.log(`Circumference of circle: ${circle.circumference(75)}`);