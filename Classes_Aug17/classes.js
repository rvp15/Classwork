//Class notes
class Vehicle{// always first letter of cls is capital//
constructor (vin,make,type){
    this.vin = vin;
    this.make=make;
    this.type=type;
    this.running=false;
    console.log(`New Object created with ${vin} and ${make} and type ${type}` )
}
//creating method
goVroom(){
    console.log('Vroom!!!')
}
start(){
    console.log('running ')}

// toString: this build in method shows properties inside an object but it doesnt work as we think which make its purpose useless so we can just over ride it
toString(){ // toString is a buildin method ...here we are over ridding by redefining here
    return 'Vehicle(' + this.vin+') is a '+ this.make + ' make' + ' type ' + this.type
}

   }
// instantiate an object :
const toyoto = new Vehicle('xya','Boeing','CRV') //new object toyoto is created with properties
const tesla = new Vehicle('abc','Boeing2','Sedan') //new object tesla is created
console.log(toyoto,tesla) 

toyoto.start()
console.log(toyoto.toString())

//creating array with new keyword

let newArray = new Array(1,2,3) //Array is keyword to create array//pass array elements
console.log(newArray)
//foreach is instance method:

// for(const elements of priateArray1) {
//     const keys = ['name', 'age','scuryc']; //Object.keys(elements);
//     for(const key of keys) {
//         console.log(`${key}: ${elements[key]}`)
//     }
// }
