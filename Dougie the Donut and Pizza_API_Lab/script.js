function query(event) {
  document.querySelector(".complaints").innerHTML = "";
  // use this variable to store the value of the current borough (as a string)
  // EXAMPLE: let borough = "BRONX"

  let borough = event.target.value;

  // console.log(event)

  // use this variable to store the number of results the user requested (as a string or number)
  // EXAMPLE: let numOfResults = 5
  let numOfResults;
  if (!document.getElementById("inputBox").value) {
    numOfResults = 10;
  } else {
    numOfResults = document.getElementById("inputBox").value;
    // console.log(numOfResults)
  }

  // leave the next four lines alone
  // in a nutshell, we make a request to a free and public api that handles NYPD data
  // and it eventually gives us back an object (JSON) to deal with

  let api = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough.toUpperCase()}&$limit=${numOfResults}`;

  fetch(api)
    .then((data) => data.json())
    .then((json) => showResults(json));
}

// you'll do most of your DOM Manipulation in this function

const brooklyn = document.getElementById("brooklyn");
//   console.log(brooklyn)
const manhattan = document.getElementById("manhattan");
const queens = document.getElementById("queens");
const bronx = document.getElementById("bronx");
const staten = document.getElementById("staten");

brooklyn.addEventListener("click", query);
manhattan.addEventListener("click", query);
queens.addEventListener("click", query);
bronx.addEventListener("click", query);
staten.addEventListener("click", query);

function showResults(complaints) {
  console.log(complaints);
  

  for (let item of complaints) {
    // console.log(item.descriptor)
    const div = document.createElement("div");
    div.textContent = item.descriptor;
    const complaintSection = document.querySelector(".complaints");
    complaintSection.append(div);
    const button1 = document.createElement("button");
    button1.textContent = "What Did The Police Do?";
    div.append(button1);
    // console.log(item.resolution_description)

    button1.addEventListener("click", () => {
      let span1=div.querySelector('.spancls')
      let emptied = false;
      if(span1 && span1.textContent){
        span1.textContent=''
        emptied = true
      }else if(!span1) {
        span1 = document.createElement("span");
        span1.classList.add("spancls");       
        div.append(span1);
      }
      if(emptied == false) {

        if (!item.resolution_description) {
          span1.textContent = "No Action Taken";
        } else {
          span1.textContent = item.resolution_description;
        }
      }
       
      
    });
  }
}
