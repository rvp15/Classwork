//Section 1:
//A. Q+A

//1. using assignment operator a=10;
//2. using assignment operator a=20; now value of a is changed to 20
//3. Just assign a existing variable with a new variable. Example:let a=10, assign b=a now value of b=10
//4. declare:specify the variable name and its data type, assign : assign a value to the declared variable using "=",define: process of declearing and assigning a variable
//5. Pseudocoding: It is an informal language(text-based language) that helps programmer to develope an algorithms.It helps in easy understanding and implementing the program logic step by step.
//6. take 50% of time to think, find logic to solve the problem and remaining 50% use for coding by implementing the logic.

//B.Strings:
let firstVariable= "Hello World"
 firstVariable=22
  
let secondVariable=firstVariable
 secondVariable="Hi World!"

 console.log(firstVariable)
//6 : value of firstVariable is a number
//7.
let yourName ='vedha'
console.log(`Hello, my name is ${yourName}`)

//C.Booleans:
const a=4
const b=53
const c=57
const d=16
const e='Kevin'
console.log(a<b)
console.log(c>d)
console.log(e === e)
console.log(true || false)
console.log(false || false  || false || false  || false || true)
console.log(false === false)
console.log(e ==='Kevin')
console.log(a+b===c)
console.log(a*a===d)
console.log(48=='48')

//D.The farm:

let animal ='c'

if(animal==='cow'){
    console.log('MoooOOOOooo')
}else {
    console.log('Hey! Youre not a cow')
}
//E.Driver's Ed

 let personAge=12

 if(personAge>16){
    console.log('Here are the keys')
 }else{
    console.log('Sorry,you are too young')
 }

 //Section 2:Loops

 //A. The basics:
 //1.
for (let i=0;i<=10;i++){
    console.log(i)
 }
 //2.
//  for (let i=10;i<=400;i++){
//     console.log(i)
//  }
//3.
// for (let i=12;i<=4000;i=i+3){
//     console.log(i)
//  }

//B.Get even
//1.print even number between 1-100
for(let i=2;i<=100;i++){
    if(i%2===0){
        console.log(`${i} <-- is an even number`)
    }else{
        console.log(i)
    }
}

//C.Give me Five:

for(let i=5;i<=100;i++){
    if (i%3===0 && i%5===0){
        console.log(`I found a ${i}.High five! and Three is a crowd!`)
    }else if(i%5===0){
        console.log(`I found a ${i}.High five!`)
    }else if(i%3===0){
        console.log(`I found a ${i}.Three is a crowd!`)
    }
}

//D.Savings account:
//1.
let bank_account=0
for(let i=0;i<=10;i++){
     bank_account += i
}console.log(bank_account)

//2.

let bank_account1=0
for(let i=0;i<=100;i++){
     bank_account1 =bank_account1+(i*2)
}console.log(bank_account1)

//Section III: Arrays and cotrol flow:
//A.
//1.Each thing in an arry is called element
//2.no
//3.single array example:array of fence dimensional array: egg boc

//B.Easy Does it:
//1.creat an array with quotes
let quotes= ['The way to get start is to quite talking and start doing','Dont be afraid to start all over again.You may like your new story better','You are never too old to set another goal']

// C.Accessing Elements:
const randomThings= [1,10,"Hello", true]
 randomThings[2]="World"
 console.log(randomThings)

 //D.Change values:
  const ourClass = ['Salty','Zoom','Sardine','Slack','Github']

  let thirdElement=ourClass[2]
  ourClass[4]='Octocat'
  ourClass.push('Cloudy City')
  console.log(ourClass)

//E.Mix It Up
const myArray=[5,10,500,20]
myArray.push('Aegon','newword')
myArray.shift()
myArray.unshift('Bob Merley')
myArray.pop()
console.log(myArray)
myArray.reverse()
//5. reverse()mutate the array by reversing the array element and returns the reversed array
console.log(myArray)

//F.Biggies Smalls:
let x=100
if(x<100) console.log('little number')
else console.log('bigger number')

//G.Monkey in the Middle
let y=6
if(y<5) console.log('little number')
else if(y>10) console.log('Bigger number')
else console.log('Monkey')

//H.What is in your closet:


