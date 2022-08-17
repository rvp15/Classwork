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
    constructor() {
      this.ownerName = "Vedhapriya";
      this.balance = 9000;
      this.accNum = "XA12345";
    }
  
    deposit() {
      let amount = 1000;
      this.balance += amount;
      console.log(
        `${this.ownerName} deposits ${amount} and balance ${this.balance}`
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
    constructor(overdraftEnabled) {
      super();
      this.overdraftEnabled = overdraftEnabled;
    }
  
    withdraw(amount){
        if(amount<=this.balance || this.overdraftEnabled){
            super.withdraw(amount)
        }else{
            console.log("Overdraft is disabled for your account")
        }
}
    }
  
  
  class SavingsAccount extends BankAccount {
    withdraw() {
      console.log("Withdrawal is disabled completely");
    }
  }
  
  const ch1 = new CheckingAccount(true);
  ch1.withdraw(10000);
  
  const ch2 = new CheckingAccount(false);
  ch2.withdraw(10000);
  
  const savingAcc1= new SavingsAccount()
  const savingAcc2= new SavingsAccount()

  savingAcc1.withdraw()