let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    // const randomQuote = function() {
    //   document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    // };
    // randomQuote();

    function randomQuote(){
        document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    }
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1:
    const title=document.getElementById('main-title')
    title.textContent="Welcome to DOM Toretto's world!"

    // Part 2
   document.body.style.backgroundColor="rgb(215, 210, 219)"
  
    // Part 3
const favthings = document.getElementById('favorite-things')
favthings.lastElementChild.remove()
    // Part 4
    const spltitles=document.getElementsByClassName('special-title')
    for(let titl of spltitles){
        titl.style.fontSize='2rem'
    }
    // Part 5
    const pastRaceList = document.getElementById('past-races')
    console.log(pastRaceList)
//    pastRaceList.removeChild(pastRaceList.children[3])

   let list=document.querySelectorAll("#past-races li")
   for(let item of list){
    if(item.textContent==='Chicago'){
        item.remove()
    }
   }
   
  // Part 6
  const newListItem= document.createElement('li')
  newListItem.textContent="Galaxy"
//   console.log(newListItem)
pastRaceList.append(newListItem)
 
    // Part 7
const newDiv = document.createElement('div')
newDiv.classList.add("blog-post")
newDiv.classList.add("purple")

const mainDiv=document.querySelector('.main')
mainDiv.append(newDiv)
const newh2=document.createElement('h2')
newh2.textContent='Galaxy'
const newp=document.createElement('p')
newp.textContent="I FLEW AROUND GALAXY"
newp.style.fontSize='18px'
newDiv.append(newh2)
newDiv.append(newp)

    // Part 8
    function randomQuote(){
        document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    }
  const qouteTitle =document.getElementById('quote-title')

  qouteTitle.addEventListener("click",randomQuote)
  

    // Part 9

    const blogPostlist = document.getElementsByClassName('blog-post')
    console.log(blogPostlist)
    for(let post of blogPostlist){
        console.log(post)
        post.addEventListener("mouseout",(event)=>{
event.target.classList.toggle("purple")
        })
        post.addEventListener("mouseenter",(event)=>{
          event.target.classList.toggle("red")
                    })
    }
  
  });