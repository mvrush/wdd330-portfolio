//create an array of hikes
import hikeList from './hike.js';

console.log(hikeList);

// const myHike = new Hikes('hikeListId');

const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    showHikeList();
  });
  
  function showHikeList() {
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    renderHikeList(hikeList, hikeListElement);
  }
  
  function renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
      parent.appendChild(renderOneHike(hike));
    });
  }

function renderOneHike(hike) {
  const item = document.createElement("li");

  item.innerHTML = ` <h2>${hike.name}</h2>
        <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div class="info">
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>`;
  return item;
}


/********* STRETCH GOAL ********************************/
// const element = document.getElementById("hikes"); // gets the "hikes" id from the HTML <ul id="hikes"> element.
// // one mouse click calls both the following functions. The first hides the list of hikes, the second displays a single hike and details.
// element.addEventListener("click", hideList); // adds an event listener to listen for a mouse "click" and calls the function 'hideList()' when a click is detected.
// element.addEventListener("click", displayDetails); // listens for a mouse "click" and calls the 'displayDetails()' function below.

// function hideList() {
//       let element = document.getElementById("hikes");
//       element.classList.toggle("hidden");
// }


// function displayDetails(hike) {
//   const item = document.getElementById("hikeDetails");
//   item.innerHTML = `<h2>${hike.name}</h2>`;

//   return item;
// }
