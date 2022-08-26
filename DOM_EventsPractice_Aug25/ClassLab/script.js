
//Select the elemnt ans store in a variable
const btn=document.querySelector('button')// target=button
//then attach an event listener to that elemt
btn.addEventListener("click",function(evt){//type=click

    // ..evt represents the object
    //example of event objects:
    //target
    //x,y cordinates
    //.this is nothing but the current target element<button>
    // console.log(this)
    console.log(evt)//console log this event object which containes all the properties

//1.create new Element:
const li=document.createElement('li')//creats element in memory
 
 //2.add text to element
const input=document.querySelector('input')
   // console.dir(input)// this gives all the property of input
   // to access its value use value 
li.textContent=input.value

//3.Append the new elemnt(list) to dom inside ul tag>

// const ul=document.querySelector('ul')
// ul.appendChild(li)
document.querySelector('ul').appendChild(li)
//remove the appended value

// li.addEventListener('click', (e) => { e.stop(Propagation(); });


})




//////////////////////////////////////////////////////////////
//select ul tag:
const ul = document.querySelector('ul')

ul.addEventListener('click',handleClick)

function handleClick(evt){
   
    if(evt.target.tagName==='LI')//checkig tagname
    {
    evt.target.style.color='red'
}
    // console.log('Clicked on list')//when u click on list it get consolelogged
    // console.log(evt.target) // litags are target
}

//////////////////////////////
//making h3 change color on clicking
const h3text=document.querySelector('h3')
h3text.addEventListener('click',function(eve){
h3text.style.color='red'
})



