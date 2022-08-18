//Exercise 1:Static
// Static properties and methods cant be reused to create multiple objects
class Governor {
  static name = "Jhon";
  static age = 45;
  static interest = "Golf";

  static duties() {
    console.log("Planning, Allocating budget,Sing approval");
  }
}

console.log(Governor.name);
Governor.duties();
//Exercise 2:Inheritance

class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    location(place) {
      console.log(`${this.name} is from ${place}`);
    }
    salary(amt) {
      console.log(`${this.name} earns ${amt}`);
    }
    hobbies() {
      console.log("Cricket");
    }
  }
  class PostalWorker extends Person {
      constructor(name,age,gender){
          super(name,age,gender)
      }
  
    //adding method
    deliveryTime() {
      console.log("Delivers from 9am to 4pm");
    }
  }
  class Chef extends Person {
      constructor(name,age,gender){
          super(name,age,gender);
        
      }
    //adding method
    setSpecialization(data) {
        this.specialization = data;
    }
  }
  
  //creating objects
  const PostalWorker1 = new PostalWorker("kim", 44, "male");
  const PostalWorker2 = new PostalWorker("Jas", 34, "female");
  
  const chef1 = new Chef("raj", 22, "male");
  chef1.setSpecialization('Indo')
  const chef2 = new Chef("Damu", 66, "Male");
  chef2.setSpecialization('Chinese')
  
  //checking
  PostalWorker1.hobbies();
  PostalWorker1.salary(2000);
  console.log(chef1.name);
  chef2.location("New York");
  console.log(chef1.specialization);

//   Exercise 3:Bank Account


class BankAccount {
    constructor(ownerName,balance,accNum) {
      this.ownerName = ownerName;
      this.balance = balance;
      this.accNum = accNum;
    }
  
    deposit(depsoitamt) {
     
      this.balance += depsoitamt;
      console.log(
        `${this.ownerName} deposits ${depsoitamt} and balance ${this.balance}`
      );
    }
  
    withdraw(amount) {
      this.balance -= amount;
      console.log(
        `${this.ownerName} Withdraws ${amount} and balance ${this.balance}`
      );
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(overdraftEnabled,amount) {
      super(ownerName,balance,accNum);
      this.overdraftEnabled = true;
    }
  
    withdraw(amount){
        if(amount<=this.balance){
            super.withdraw(amount)
        }else{
            console.log("You are overdrafting from your account with penality fee")
            amount=amount+25
            super.withdraw(amount)
        }
}
    }
  
  
  class SavingsAccount extends BankAccount {
    constructor(){
      super()
    }
    withdraw() {
      console.log("Withdrawal is disabled completely");
    }
  }
  
  const ch1 = new CheckingAccount(true);
  
  const vedha =new BankAccount('vedha',200000,987654342)
 const sudiksha= new SavingsAccount('sudiksha',100000,384642644)
  const ruthvik= new CheckingAccount('ruthvik',30000,8765677223)
  

  // sudiksha.withdraw()
  ruthvik.withdraw(400)
 