const express = require("express");


const app = express();

const port = 3000;

const fruitRoutes = require('./routes/fruiteRoutes')

//middleware
app.use('/api/fruits', fruitRoutes)

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World!!!!</h1>");
// });

// app.get("/fruits", (req, res) => {
//   res.send(fruits);
// });
////////////////if else/////////////////////////
// app.get("/fruits/:index", (req, res) => {
//   let indexValue = req.params.index;
//   if (indexValue <= 4) {
//     res.send(fruits[indexValue]);
//   } else {
//     res.send("cannot find furit at index ");
//   }
// });
//////////////////////////?key=value////////////////////////////////
// client request :localhost:3000/?name=banana&color=green
// app.get("/fruits/", (req, res) => {
//   const name1 = req.query.name;
//    const color1 = req.query.color
//    const readytoeat = req.query.readyToEat

//    let filteredArr = fruits.filter((item) => (item.name == name1 && item.color == color1) || (item.readyToEat === true));
//     if(filteredArr.length>0){
//         res.send(filteredArr);
//     }else{
//         res.send('No Match Found'); 
//     }
//   });

app.listen(port, () => {
  console.log("Listening at port:", port);
});
