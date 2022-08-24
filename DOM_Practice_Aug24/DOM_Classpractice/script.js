console.log(document)

let h1Tag= document.getElementById('title')
console.dir(h1Tag) //showing all properties of that element 

 console.log(h1Tag)
 
 let pEl=document.querySelector(".cool") 
 console.log(pEl)
 console.dir(pEl)
 console.log(pEl.textContent) //
 console.log(pEl.innerHTML)

 pEl.style.textAlign="center"
 pEl.style.color="rgb(95, 65, 27)"
 pEl.style.backgroundColor='rgb(228, 247, 241)'

 //setAttribute:
//  let atag=document.querySelector('#atagg')
//  atag.setAttribute("href","https://www.google.com")
document.querySelector('#atagg').setAttribute("href","https://www.google.com")
 
// change attribute(id) value:

document.querySelector('#atagg').setAttribute("id","tagid")
console.log(tagid )

/////////////////////////
// remove classes

pEl.classList.remove('cool1')

///////////////////////////////////
//Selecting multiply elements:
/////////////////getElementsByTagName////////
let liTags=document.getElementsByTagName('li')
console.log(liTags)
console.log(liTags[1])
////////////////////getElementsByClassName///////
let liTags2 = document.getElementsByClassName('comments')
console.log(liTags2)

////////////////selecting multiple///////
//  gives node list
let liTags3=document.querySelectorAll('.comments')
console.log(liTags3)
//////////////////////iterate over the array of elements////////
//1.using for of:
for(let li of liTags3){
    console.log(li)
}
//2.using forEach:

liTags3.forEach((element)=>console.log(element))

for(let item of liTags3){
    item.style.fontSize='30px'
}






















