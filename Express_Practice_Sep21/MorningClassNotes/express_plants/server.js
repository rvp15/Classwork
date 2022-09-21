//load express
 const { response, request } = require('express');
const express = require('express')
const port = 3000
 //create app obj to invoke express
 
 const app = express()
 const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];
  


 //Define routes
 app.get('/:index',(request,response)=>{
if(plants[request.params.index]){
    response.send(plants[request.params.index])
}else{
    response.send('cannot find element at index '+request.params.index)
}
})

//Multiple Parameters:
app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

// app.get('/plant', (req, res) => { //this will never be reached if it is under and also path is same 
//     res.send(`
//       <h1>Plants are awesome!</h1>
//       <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
//     `);
//   });


///// req.query
// client request :localhost:3000/howdy/bob?title=duke

app.get('/howdy/:firstName', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
  });



  //Listen to port 3000
  app.listen(port ,()=>{
    console.log('Listening at port', port)
  })

