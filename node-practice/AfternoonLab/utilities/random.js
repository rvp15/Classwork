function random(x,y){
  return   Math.floor(Math.random() * (x - y +1) + y)
}
// console.log(random(100,200))
module.exports = random