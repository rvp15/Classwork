// Fizzbuzz : number divisible by 3-fizz number divisible by 5 and not 3-buzz/ fizzbuzz for number divisible by both

const myArr = Array.from(Array(100).keys());

myArr.forEach(myFunction)

function myFunction(item){
    if((item%3==0) && (item%5==0))
    {
        return console.log("FIZZBUZZ")
    }
    else if((item%5==0) && (item%3!==0))
    {
    return console.log("BUZZ")
    }
    else if((item%3==0))
    {
        return console.log("FIZZ")
    }else {
        return console.log(item)
    }
}


//Exercise 2:

