let message = document.getElementById("message");
let article = document.getElementsByTagName("article");

// keyup listener ------------------------------------------------------

//continuously updates text content of articles to input value
message.addEventListener("keyup", (e) => {
  article[0].textContent = message.value;
  article[1].textContent = message.value;
});

// scroll listener ------------------------------------------------------

const audrey = document.getElementById("audrey");
const container = document.getElementById("container");
    
//Add an event listener to the `document` object to listen for the "scroll" event.
document.addEventListener("scroll", function () {
//Adjust the width of audrey to be 1/3 the value of
//`window.scrollY`. No lower than 50px, though.
audrey.style.width = `${window.scrollY / 3}px`;
audrey.style.height = `${window.scrollY / 3}px`;

audrey.style.minWidth = "50px";
// audrey

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
audrey.style.width = `${window.scrollY / 4}px`;
audrey.style.height = `${window.scrollY / 4}px`;
audrey.style.minWidth = "100px";
});

flight = document.getElementById("flight");
mindRead = document.getElementById("mindreading");
xray = document.getElementById("xray");

// click listener ------------------------------------------------------

/*
document.querySelector("#activate-flight").addEventListener("click", (e) => {
  flight.classList.toggle("disabled");
  flight.classList.toggle("enabled");
});

document.querySelector("#activate-mindreading").addEventListener("click", (e) => {
  mindRead.classList.toggle("disabled");
  mindRead.classList.toggle("enabled");
});

document.querySelector("#activate-xray").addEventListener("click", (e) => {
  xray.classList.toggle("disabled");
  xray.classList.toggle("enabled");
});
*/

// event.target.id.split("-") <------------ can use this for managing listeners

let powers =[flight, mindRead, xray];

function fullPower() {
  for (i=0;i<=2;i++) {
    powers[i].classList.remove("disabled");
    powers[i].classList.add("enabled");
  }
}

function noPower() {
  for (i=0;i<=2;i++) {
    powers[i].classList.remove("enabled");
    powers[i].classList.add("disabled");
  }
}

document.getElementById("activate-all").addEventListener("click", fullPower);
document.getElementById("deactivate-all").addEventListener("click", noPower);