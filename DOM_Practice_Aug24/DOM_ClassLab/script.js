
//Task 1.0

let mainEl = document.querySelector("main");

//Task 1.1

mainEl.style.backgroundColor = "var(--main-bg)";

// //Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// //Task 1.3
mainEl.setAttribute("class", "flex-ctr");

// //Task 2.0

let topMenuEl = document.getElementById("top-menu");
// console.log(topMenuEl)
// //Task 2.1

topMenuEl.style.height = "100%";

// //Task 2.2

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// //Task 2.3

topMenuEl.setAttribute("class", "flex-around");

//Task 3.0
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//Task 3.1
for (let link of menuLinks) {
  let aEle = document.createElement("a");
  aEle.setAttribute("href", link.href);
  // aEle.classList.add('active')
  aEle.innerText = link.text;
  topMenuEl.appendChild(aEle);
}
//DOM Menu Lab =Part-2

//Task 4.0
const subMenuEl = document.querySelector("#sub-menu");

//Task 4.1
subMenuEl.style.height = "100%";

//Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//Task 4.3
subMenuEl.setAttribute("class", "flex-around"); //class=''flex-around

//Task 4.4
subMenuEl.style.position = "absolute";

//Task 4.5
subMenuEl.style.top = "0";

//Task 5.0

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
// //Task 5.1
// topMenuLinks= document.querySelectorAll(".flex-around a")
// console.log(topMenuLinks)
// or
topMenuLinks = topMenuEl.querySelectorAll("a");
// console.log(topMenuLinks);
var showingSubMenu = false;

// //Task 5.2
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault(); // this will stop  default events
  if (event.target.tagName !== "A") {
    return;
  }
  // console.log(event.target.text);
  let clickedItem;
  for (const menuItem of menuLinks) {
    if (menuItem.text == event.target.text) {
      clickedItem = menuItem;
      break;
    }
  }
// console.log(clickedItem)
  //Task 5.3:
  // console.log(event.target.classList)
  if (event.target.classList === "active") {
    event.target.classList.remove("active");
  }
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  //Task 5.4
  for (let element of topMenuLinks) {
    // console.log(element);
    element.classList.remove("active");
  }

  //Task 5.5:
  // event.target.setAttribute('class','active')
  //or
  event.target.classList.add("active");
 

  // Task 5.6:
  console.log(event.target.menuLinks);
  if (event.target.children) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }
  mainEl.innerHTML=`<h1>${event.target.text}</h1>`
  //Task 5.7
  if (showingSubMenu) {
    // console.log(event.target.subLinks)
    if(clickedItem.subLinks) {
      buildSubMenu(clickedItem.subLinks);
    }    
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }

  //Task 5.8:code buildSubMenu:
  function buildSubMenu(sublinks) {
    subMenuEl.textContent = "";
    for (let subEle of sublinks) {
      const subA = document.createElement("a");
      subA.setAttribute("href", subEle.href);
      // console.log(subEle.text)
      subA.text = subEle.text;
      // console.log(subA);
      subMenuEl.append(subA);
    }
  }
  //Task 6.0
  subMenuEl.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.tagName !== "A") {
      return;
    }
    // console.log(e.target);
    //Task 6.1
    showingSubMenu = false;
    subMenuEl.style.top = "0";

    //Task 6.2
    for (let element of topMenuLinks) {
      element.classList.remove("active");
    }
    //Task 6.3:
    mainEl.innerHTML = `<h1>${e.target.text}</h1>`;
  });
});