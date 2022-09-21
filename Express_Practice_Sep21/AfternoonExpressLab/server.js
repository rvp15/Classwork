const express = require('express')
const app = express()
 
///Greeting 
app.get('/greeting/:name' ,(req,res)=>{
    res.send('hello there,'+ req.params.name)
    })

///Tip calculate:
app.get('/tip/:total/:tipPer',(req,res)=>{
    let total =req.params.total
    let tipPer =req.params.tipPer
    let tipAmt =(tipPer/total)*total
   res.send('the tip is:' +tipAmt)
    })

////Magic
app.get('/magic/:question' ,(req,res)=>{
  let array=  ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    let quest = req.params.question
    let randomNum = Math.floor(Math.random() * array.length)
    res.send(`<h1> ${quest}:${array[randomNum]}</h1>`)
    })


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
