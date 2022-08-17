// class Cat{
//     constructor(age,breed,vaccination){
//         this.age=age
//         this.breed=breed
//         this.vaccination=this.vaccination
//     }
//     meow(){

//     }
//     vaccinated(){
// if(this.vaccination==='Yes'){
//     console.log('This cat is vaccinated')
// }else{
//     console.log(`${this.breed} is not vaccinated`)
// }
//     }
//     cute(){
//        console.log(`${this.breed} is cute`)
//     }
// }
// const blacky = new Cat(3,'Persian','Yes')
// const whitey = new Cat(1,'Calica', 'No')

// blacky.cute()
// whitey.vaccinated()


//Exercise 2:


class Pirate{
    constructor(name,age,scury,lemons){
        this.name=name
        this.age=age
        this.scury=scury
        this.lemons=lemons
    }
    method1(){
console.log('method1')
    }
    method2(){
        console.log('method2')
            }
            method3(){
                console.log('method3')
                    }


}
const priateArray1 = [new Pirate ('BlackBeard', 46, 'yes', 'yes'),new Pirate ('Captain Hook', 204, 'no', 'yes'),new Pirate ('Private poopdeck', 22, 'yes', 'no')]

const priateArray2 = [new Pirate ('BlackBeard2', 55, 'yes', 'yes'),new Pirate ('Captain Hook2', 24, 'no', 'yes'),new Pirate ('Private poopdeck2', 92, 'yes', 'no')]


for(const elements of priateArray1)
{
    console.log(`${elements.name} , ${elements.age} , ${elements.scury},${elements.lemons}`)
}

for(const elements of priateArray2)
{
    console.log(`${elements.name} , ${elements.age} , ${elements.scury},${elements.lemons}`)
}

//Exercise 3:

class Car{
    constructor(num){
        this.num=num
    }
}

const freighter = []
for(let i=0;i<100;i++){
    freighter.push(new Car(i))
}
console.log(freighter)