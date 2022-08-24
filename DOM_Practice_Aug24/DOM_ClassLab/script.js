//Tasks:

//Task 1.0

let mainEl= document.querySelector('main')

//Task 1.1

mainEl.style.backgroundColor='var(--main-bg)'

//Task 1.2
mainEl.innerHTML= '<h1>SEI Rocks!</h1>'

//Task 1.3
 mainEl.setAttribute("class","flex-ctr")

//Task 2.0

let topMenuEl =document.getElementById('top-menu')

//Task 2.1

topMenuEl.style.height='100%'

//Task 2.2

topMenuEl.style.backgroundColor='var(--top-menu-bg)'

//Task 2.3

topMenuEl.setAttribute("class","flex-around")

//Task 3.0
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//Task 3.1
for(let link of menuLinks){
let aEle=document.createElement('a')
aEle.setAttribute("href",link.href)
aEle.innerText=link.text
topMenuEl.appendChild(aEle)

}

