const express = require("express");
const app = express();
const port = 3000;

////fruit route
const fruitRoutes = require('./routes/fruitRoutes')

/////vegetable route
const vegetableRoutes = require('./routes/vegetableRoutes')

/////meat route
const meatRoutes = require('./routes/meatRoutes')

////////MiddleWare////////
app.use('/api/fruits', fruitRoutes)
app.use('/api/vegetables', vegetableRoutes)
app.use('/api/meat', meatRoutes)

///Listen
app.listen(port, () => {
  console.log("Listening at port:", port);
});
