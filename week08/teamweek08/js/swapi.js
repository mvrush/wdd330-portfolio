const requestURL = 'https://swapi.dev/api/people/'; // assigns this URL to our API (SWAPI) to the 'requestURL' const

getData(requestURL); // uses the 'getData()' function with the 'requestURL' const to get our JSON data. It passes the 'requestURL' to the 'getData()' function below

function getData(url) { // uses the 'getData()' function with whatever 'url' is passed to it. We pass the URL for 'next' and 'previos' pages after the initial load of the API URL from above.
    fetch(url) // uses the 'fetch()' function on our 'url' to request the actual data from the API
.then(function (response) { // attaches the .then() function and I create an anonymous function that holds the 'response' from our API with all our data
  return response.json(); // it converts our 'response' to JSON data using the 'json()' function and returns it to our 'response' parameter in our anonymous function which then passes it to the next .then block (I think...)
  })
.then(function (jsonObject) {
    console.table(jsonObject); // checks for a valid response by showing the response data in a console table. (look in Browser Console).
    let previous = jsonObject['previous']; // looks at our 'jsonObject' and pulls the URL for 'previous' and assigns it to an array which it stores in the 'previous' variable.
    let next = jsonObject['next']; // looks at our 'jsonObject' and pulls the URL for 'next' and assigns it to an array which it stores in the 'next' variable.

    console.log("this is our previous data ->", previous); // simply console logs the value of the 'next' variable.
    console.log("this is our next data ->", next); // simply console logs the value of the 'next' variable.
    
    const people = jsonObject['results']; // stores the results of the response in an array named 'people', in this case named 'results' (but it could be named anything, so always check your response table for naming).
    console.table(people); // shows the array in a table in the Browser Console which is handy for finding the index and Key: Value, of things.
    // document.getElementById("cards").innerHTML = people[0].name + ', ' + 'Eye Color - ' + people[0].eye_color; // This line is a simple way to access parts of our array and display them to the DOM using the 'cards' id to output.
    displayPage(people, next, previous); // This passes 'people', 'next' and 'previous' to our 'displayPage()' function.
});
}

// this is our 'displayPage() function. It has 3 
function displayPage(people, next, previous) {

    {
      const element = document.getElementById('cards'); // gets our 'cards' div by calling it with 'getElementById()' function. Assigns it to the 'element' const
      element.innerHTML = ""; // erases everything in the element

      for (let i = 0; i < people.length; i++) { // Loops through the array and assigns each array item to the 'i' variable
          let characterName = document.createElement('p'); // creates a <p> element and assigns it to the variable 'characterName'
          characterName.textContent = ` ${people[i].name}, `; // This is the text content for the 'characterName' <p> element
          document.getElementById("cards").appendChild(characterName); // as the array loops through it appends each 'characterName' <p> element one after the other.
          // document.getElementById("next").innerHTML = `${}`
      }
    }

  {
    
    const element = document.getElementById('buttons'); // we can use 'element' for a const again because it only has block scope. It gets the div with the id 'button' and assigns it to the 'element' const
    const prevButton = document.createElement('button'); // creates a <button> element and assigns it to the const
    const nextButton = document.createElement('button'); // creates a <button> element and assigns it to the const

    let pb = null; // defines the pb variable and sets it to null. Without this, no button would be defined
    let nb = null; // defines the nb variable and sets it to null. Without this, no button would be defined

    element.innerHTML = ""; // removes buttons from the page we previously rendered.
    prevButton.innerHTML = `<label>Prev</label>`;
    nextButton.innerHTML = `<label>Next</label>`;

    if (previous !== null)  //checks if previous is not the first page and if it's not completes the next line.
      pb = prevButton.childNodes[0]; // the 'childNodes[0] assigns <button><label></label></button> to pb. NOTE: WE DON'T REALLY NEED THE .childNodes[0]

    if (pb) { // this block listens for a touchend or a click and then runs the 'getData()' function passing the 'previous' variable
      pb.addEventListener("touchend", function () { 
        getData(previous);
      })
      pb.addEventListener("click", function () {
        getData(previous);
      })
    }

    if (next !== null) // checks if next is not after the last page (null) and if it's not completes the next line.
      nb = nextButton.childNodes[0]; // the 'childNodes[0] assigns <button><label></label></button> to pb. NOTE: WE DON'T REALLY NEED THE .childNodes[0]

    if (nb) { // this block listens for a touchend or a click and then runs the 'getPage()' function passing the 'next' variable
      nb.addEventListener("touchend", function () {
        getData(next);
      })
      nb.addEventListener("click", function () {
        getData(next);
      })
    }

    // appends the previous and next buttons to the html page
    element.appendChild(prevButton);
    element.appendChild(nextButton);
  }

  
}