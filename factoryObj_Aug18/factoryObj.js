// Singleton (do some research on this):
// Singletons are used to create an instance of a class if it does not exist or else return the reference of the existing one. This means that singletons are created exactly once during the runtime of the application in the global scope. Based on this definition, singletons seem very similar to global variables.
// ​
class Car {
  constructor (maker, serialNumber) {
    this.serialNumber = serialNumber;
    this.maker = maker
  }
  drive () {
    console.log('Vroom Vroom');
  }
}
​
​
​
class Factory {
  constructor(company) {
    this.company = company;
    this.cars = [];
  }
​
  generateCar () {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
    return this
  }
​
  findCar(index) {
    return this.cars[index];
  }
}
​
// only need one instance (Singleton)
const tesla = new Factory('Tesla')
​