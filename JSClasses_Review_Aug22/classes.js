class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}
const hamster1 = new Hamster("Bumble");
console.log(hamster1.getPrice());

//Person

const hamsterArr = [];

class Person {
  constructor(name1) {
    this.name1 = name1;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamster = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet(name) {
    console.log(`Welcome ${this.name}`);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    return this.age++
     this.height++
     this.weight++
    this.mood--
    this.bankAccount += 10
  }
  buyHamster(hamsterObj) {
    this.mood += 10;
    this.bankAccount = this.bankAccount - 15;
    this.hamster.push(hamsterObj);
    return this.hamster;
  }
}


const pers = new Person("priya");
const hams1 = new Hamster("Ginger")
console.log(pers.buyHamster(hams1))

// 1.instantiate a new person name timmy

const timmy = new Person('Timmy')
// 2.Age timmy 5 years
for (let i=0;i<5;i++){
    timmy.ageUp()
}
console.log(timmy.ageUp())

//3.have him eat 5 times
for (let i=0;i<5;i++){
    timmy.eat()
}
//4.
for (let i=0;i<5;i++){
    timmy.exercise()
}
//5.Age up timmy 9 years
for (let i=0;i<9;i++){
    timmy.ageUp()
//6.
const hamster1=new Hamster('Gus')
//7.
hamster1.owner='Timmy'
//8.
timmy.buyHamster(hamster1)
//9.
for (let i = 0; i < 15; i++) {
    timmy.ageUp()
  }
  ​
  // 10 
  timmy.eat()
  timmy.eat()
  ​
  // 11 
  timmy.exercise()
  timmy.exercise()
  ​
  console.log(timmy)
  ​

// Exercise2:Chef Makes Dinners:
 // simple Dinner class that expects three parameters for setting up three properties 
 class Dinner{
    constructor(appetizer,entree,dessert){// the three parameters can be named whatever we like
      
      // when we say " = appetizer" we are taking the parameter value and assigning it to the property of the same name
        this.appetizer=appetizer
        this.entree=entree
        this.dessert=dessert
       }
    }
    class Chef{
     makeDinner(appetizer,entree,dessert)
     // this is a special method that creates objects/instances of Dinner
     // we can create other objects (dinners) from within this one (chef)
     {
    return new Dinner(appetizer,entree,dessert)
     }
    }
     const chefDamu = new Chef() // first we creat factory object is created
    console.log( chefDamu.makeDinner("fries",'pizza','icecream'))// and let the factory (the chef) do the work of making dinners 
 

    // const robotFactory=(model,mobile)=>{
    //   return {
    //     model: model,
    //     mobile:mobile,
    //     beep(){
    //       console.log('Beep Boop')
    //     }
    //   }
    // }
    
    // const tinCan=robotFactory('P-500',true)
    // tinCan.beep()