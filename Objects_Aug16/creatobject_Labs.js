// const car={
//     name:'Honda',
//     model:'Odyssey ',
//     year:'2022',
//     history:'Clean Title',
//     colors:['black','grey','white'],
//     condition(){
//         console.log('Good')
//     },
//     s


// speed(){
//         console.log('Maximum 140mph')
//     }
// }
// console.log(car)//acessing whole object
// for(let properties in car){ //accessing values of objects 
//     console.log(car[properties])
    
// }
// car.speed();// accessing function

//Exercise 1:create a function that takes string and returns objects that keep count the occurence of each character

function characterCounter(string){
    let newObj={};
    for(let i=0;i<string.length;i++){// for(let s of string){if(newObj[s]){}}
        let char =string[i]
        if(newObj[char]){
            newObj[char]++;
        }else{
            newObj[char]=1;
        }
    }
return newObj;
}
console.log(characterCounter("Hello"))

//Exercise 2:Denomination 
 function denomiNations(price, cash) {
      let change = cash - price;
      let obj = {};
      let denominations = [100, 50, 20, 10, 5, 1];
      for (let i = 0; i < denominations.length; i++) {
        let denomination = denominations[i];
        let numOfDenominations = Math.floor(change / denomination);
        obj[denomination] = numOfDenominations;
        change = change % denomination;
      }
      return obj;
    }
    console.log(denomiNations(10, 100));
   

//Class Notes

//
const cat = {
    name: 'calico',
    legs: 4,
    type: 'Feline',
    friends: [
        {
            name: 'George',
            legs: 4,
            type: 'Feline'
        },
        {
            name: 'Snake',
            legs: 3, 
            type: 'Feline'
        },
        {
            name: 'Rixio',
            legs: 2,
            buddies: [
                {
                    name: 'Arthur',
                    fins: 5,
                    type: 'fish'
                },
                {
                    name: 'Perry',
                    type: 'platypus'
                }
            ]
        }
    ]
}

// how to access nested values

// 1. how do we access the string, 'Snake'

// console.log(cat.friends[1].name);
//     just square brackets: cat['friends'][1]['name']

// 2. how do we access the string, 'Rixio'

// console.log(cat.friends[2].name);
//      just square brackets: cat['friends'][2]['name']

// 3. how do we access the fins property?

// console.log(cat.friends[2].buddies[0].fins);
//      just square brackets: cat['friends'][2]['buddies'][0]







