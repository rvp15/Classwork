//1.
const express = require('express')

//2.
//create Express app
 const app =  express() // invoke express// like function call

//3.response by getting request from browser
// 2 arguments -> path , callback fun with(req,res)
app.get('/' ,(req,res)=>{
res.send('<h1>Hello Express</h1>')
})

app.get('/home',(req,res)=>{
    res.send(' <h1>HOME PAGE</h1><p>Learning Express </p>')
})
//4 Listen method(to listen http requesr from client)
//2 arguments->port, callbackfun
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

