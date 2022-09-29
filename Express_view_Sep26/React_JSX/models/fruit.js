//load mongoose
const mongoose =  require('mongoose')

//define schema
const Schema =  mongoose.Schema

//create fruit schema and define how data should look like
const fruitSchema = new Schema({
name: {type:String,required:true}, //Give the type and validate (require)
color:  {type:String,required:true},
readyToEat: Boolean
})


//create a Model from our Schema
const Fruit = mongoose.model('Fruit',fruitSchema)

//Export our model
module.exports = Fruit