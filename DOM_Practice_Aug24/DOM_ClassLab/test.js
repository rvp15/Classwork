topMenuEl.addEventListener("click", function (event) {
    event.preventDefault(); // this will stop  default events
    if (event.target.tagName !== "A") {
      return;
    }
    console.log(event.target.text);
    //Task 5.3
    console.log(event.target.className);
    if (event.target.className === "active") {
      event.target.classList.remove("active");
    }
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    // Task 5.4:
    for (let element of topMenuLinks) {
      console.log(element);
      element.classList.remove("active");
    }
  
  //Task 5.5
  
  event.target.classList.add('active')
  
  
  //Task 5.6
  // console.log(event.target.children)
  if(event.target.children){
    showingSubMenu=true
  }else{
    showingSubMenu=false
  }
  
  
    return;
  });
  