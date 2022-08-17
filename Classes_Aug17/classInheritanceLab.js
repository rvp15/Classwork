//Exercise 1:Static
// Static properties and methods cant be reused to create multiple objects
class Governor {
    static name='Jhon';
    static age=45;
    static interest='Golf';

    static duties(){
        console.log('Planning, Allocating budget,Sing approval')
    }
}

console.log(Governor.name)
Governor.duties()
//Exercise 2:Inheritance

class Person{
    constructor(name,age,gender){
this.name=name
this.age=age
this.gender=gender
    }
location(place){
console.log(`${this.name} is from ${place}`)
}
salary(amt){
    console.log(`${this.name} earns ${amt}`)
}
hobbies(){
    console.log('Cricket')
}
}
class PostalWorker extends Person {
//adding method
deliveryTime(){
    console.log('Delivers from 9am to 4pm')
}
}
class Chef extends Person {
    //adding method
    specialization(){
        console.log('specialization in indo-chinese')
    }
}

//creating objects
 const PostalWorker1 = new PostalWorker('kim',44,'male')
 const PostalWorker2 = new PostalWorker('Jas',34,'female')

 const chef1 = new Chef('raj',22,'male')
 const chef2 = new Chef('Damu',66,'Male')

//checking 
 PostalWorker1.hobbies()
 PostalWorker1.salary(2000)
  console.log(chef1.name)
  chef2.location('New York')
  chef1.specialization()

//   Exercise 3:Bank Account


   class BankAccount{
    constructor(ownerName,balance,accNum){
        this.ownerName=ownerName
        this.balance=balance
        this.accNum=accNum
    }
    deposit(amount){
        console.log(`${this.ownerName} deposits ${amount}`)
    }
    withdraw(amountwd){
        console.log(`${this.ownerName} Withdraws ${amountwd}`)
    }
   }

class CheckingAccount extends BankAccount{
    constructor(overdrafEnabled){
        this.overdrafEnabled=
    }
}