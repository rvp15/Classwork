// //Every method:
// // it check all the element pass the test:rerturns boolean value:

// const nums =[1,2,3,4,50,6,7,8,9,10]
// // example1:
// console.log(nums.every(callbackfun))
// // create callbackfun function:
// function callbackfun(num){
// return num<40
// }
// // examample 2:
// console.log(nums.every(isEven))
// // callback function:
//  function isEven(num){
//     if(num%2===0){
//         return true
//     }else return false
//  }

// //  Example 3:check words is < 8  character
// const wordArray=['science','math','socialstudies','english']
// let test2 = wordArray.every((element) => element.length<8)
// console.log(test2)

//FilterMethod:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


//1. filter array of number less tha 4:
console.log(nums.filter((element)=>element<4))


//2.Filter words that have even length:
console.log(panagram.filter((item)=>(item.length)%2===0))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Find Method:
// returns first element that passes the condition:
// 1.return first element divisible by 5
console.log(nums.find((eachitem)=>eachitem%5===0))
//2.find first word that is longer than 5 character:
console.log(panagram.find((ele)=>ele.length>5))
//gives undefined as no elements >5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FindIndex Method:
//1. find the index of the first number that is divisible by 3:

console.log(nums.findIndex(item=>(item%3===0)))

//2.Find index of the first word that is less than 2 char long
console.log(panagram.findIndex((ele)=>ele.length<2))
//returns -1 if condition doesnt meet

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ForEach Method:
//1multiply all num of array *3:

nums.forEach((i)=>console.log(i*3))

//2.Word with exclamation

panagram.forEach(j=>console.log(`${j}!`))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Map Method:

//1.Make a new array each number multiplied by 100
console.log(nums.map((item)=>item*100))
//2.New array with uppercase words
console.log(panagram.map(item=>item.toUpperCase()))
//original array id not changed it just creats a new array
console.log(panagram)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Some Method:
// checks atleast one element passes the condition and  returns boolean value 
//1.number divisible by 7
console.log(nums.some(item=>item%7===0))
//2.Some letter have letter a in them:
console.log(panagram.some(i=>i.includes('a')))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Hungry for more
//Reduce:gives a single value as output by calculating array values

const arraySum=nums.reduce((previousValue,currentValue)=>(previousValue+currentValue),0) // 0-> is initial value
console.log(arraySum)

console.log(panagram.reduce((x,y)=>(`${x} ${y}`)))



