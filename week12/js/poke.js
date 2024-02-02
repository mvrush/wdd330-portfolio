const pokeCardTemplate = document.querySelector("[data-poke-template"); // looks at our html, queries the selector which is a <div> tag attribute, 'data-poke-template', and puts that in our 'pokeCardTemplate' const.
const pokeCardContainer = document.querySelector("[data-poke-cards-container]"); // looks at our html, queries the selector which is a <div> tag attribute, 'data-poke-cards-container', and creates the pokeCardContainer const.
const pokeSingleTemplate = document.querySelector("[data-poke-single-template]");
const pokeSingleContainer = document.querySelector("[data-poke-single-container]"); //// looks at our html, queries the selector which is a <div> tag attribute, 'data-poke-single-container', and creates the pokeSingleContainer const.
const searchInput = document.querySelector("[data-search]"); // looks at our html, queries the selector which is an <input> tag attribute, 'data-search', and creates the searchInput const.

// console.log("this is our pokeCardTemplate const ->", pokeCardTemplate); // looks at our pokeCardTemplate const.
console.log("this is our pokeCardContainer const ->", pokeCardContainer); // looks at our pokeCardContainer const.

let pokemon = []; // this will be used to create a 'pokemon' object that we will loop through. Here we create an empty 'pokemon' array.

// I add an event listener to the 'searchInput' const. Everytime a letter or space is typed into id="input" the listener hears it.
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase(); // this looks at what the user types in the search input, converts it 'toLowerCase(), and thats the 'value' of our 'target' event which is 'e' and stores it in the 'value' const. If you don't convert everything to lower case you won't find matches since case sensitivity is native. You can have it be case sensitive if you want.
    console.log("this is our 'value' const ->", value); // this checks to see if our event listener is listening to what's entered into our search input.
    console.log("this is our 'pokemon' array created from our data.map() loop ->", pokemon); // YOU CAN ONLY SEE THIS LOG AFTER TYPING INTO THE SEARCH BOX. It populates the 'pokemon' array with the object returned from the .then(data) arrow function of our API call. It has the 'name', 'email' and 'element' returned for all the pokemon.
    pokemon.forEach(poke => {
        const isVisible = poke.name.toLowerCase().includes(value); // simply checks the poke typed 'value' created from our event listener and if it matches the poke name (converted to lower case using 'toLowerCase()'), it puts 'true' in the 'isVisible' const. So as soon as it detects a match, it changes to 'true'. To add more parameters I could use ' || poke.url.toLowerCase().includes(value); '
        poke.element.classList.toggle("hide", !isVisible || value===""); // this line says; If 'isVisible' is false ('!isVisible') OR (||) const 'value' IS EQUAL (===) to an empty string (""), toggle the "hide" class using the 'classList' method that adds a class to the list of classes on that 'element' which is our poke card passed back up as the value of 'element' in our returned object from below.
    })
})

// https://pokeapi.co/api/v2/pokemon?limit=100&offset=200
// https://pokeapi.co/api/v2/pokemon
fetch("https://pokeapi.co/api/v2/pokemon?limit=1126") // uses fetch() to call our API. I set the limit to all available pokemon
 .then(res => res.json()) // recieves a response which it then uses an arrow function to convert to json using json()
 // .then(data => console.log("This is the API data we recieved ->", data))  // used to test whether we got our data back.
    .then(data => {     // Then takes that json() which is filled with our 'data' from the API. We use arrow functions to manipulate the data.
    // console.log("THIS IS OUR POKEMON 'Data' RETURNED FROM THE API -> ", data); // This console.logs all the data we received so you can see the structure in the console.
    pokemon = data['results'].map(poke => { // uses our data object and then pops down to the ['results'] array held in our API received data. Then loops through the data 'results' array (found in our returned object) pulling each 'pokemon' using the 'map()' function and creates a card which it adds to our 'poke' array defined above.
    // This looks at the content from our HTML page template 'data-poke-template' which is stored in our pokeCardTemplate variable
    const card = pokeCardTemplate.content.cloneNode(true).children[0]; // 'cloneNode(true)' clones all 'content' in the 'pokeCardTemplate' const. We then specify the first child node 'children[0]' and store it in the 'card' const
    // it returns our card template which you can see using console.log(card) to see the content stored in the 'card' const.
    // console.log("this is our 'card' const", card);
    const header = card.querySelector("[data-header]"); // this is looking in our 'card' const. It is looking for the 'data-header' attribute listed in that <div> tag.   
    const body = card.querySelector("[data-body]"); // this is looking in our 'card' const. It is looking for the 'data-body' attribute listed in that <div> tag.
    header.innerHTML = `<h3>${poke.name}</h3>`; // this looks at our 'poke' object and gets the 'name'. It then stores it as 'innerHTML' and appends that to the 'header' const using the (.)
    // The following injects the HTML form into the card body using the 'innerHTML' method
    body.innerHTML = `
        <form action="javascript:singleData('${poke.url}');removeHide()">
            <button class="btn" type="submit">Add Pok&eacute;mon</button>
        </form>
    `
        // another way to say what's happening in the previous 'header.' and 'body.' lines is that it's looking at the 'header' or 'body' of our card and appending the 'textContent' or 'innerHTML' to that. The textContent or innerHTML uses the 'name' or 'url' found in the 'poke' object.
    pokeCardContainer.append(card); // This appends each card to our <div data-poke-cards-container> held in our 'pokeCardContainer' const.
    // console.log("this is our 'data' ->", data); // logs our data that we received from the API which was turned into JSON data.
    // console.log("this is each 'poke' from our 'data' created with the 'forEach()' loop ->", poke);
    // console.log("this is what's in the 'header' const ->", header); // 
    // console.log("this is what's in the 'body' const ->", body);
    return { name: poke.name, url: poke.url, element: card} // here we return an object. This object conatins our poke name, poke email, and the card element. Each object will be added to our 'pokemon' array held in the 'pokemon' variable.
    })
})

function singleData(url) {
// fetch("https://pokeapi.co/api/v2/pokemon/10034") // Use this line for testing in place of fetch(url)
fetch(url)
    .then(res => res.json())
    // .then(data => console.log("this is our single pokemon API data", data)); // This is to test our response.
        .then(data => {
            console.log("this is our single pokemon API data", data);
            const singleCard = pokeSingleTemplate.content.cloneNode(true).children[0]; // 'cloneNode(true)' clones all 'content' in the 'pokeSingleTemplate' const. We then specify the first child node 'children[0]' and store it in the 'singleCard' const
            const header = singleCard.querySelector("[data-single-header]");
            const body = singleCard.querySelector("[data-single-body]");
            singleCard.setAttribute("id", data.name); // this sets an id on the single card equal to the 'name' found in our data (the pokemon name)
            console.log("this is our single card ->", singleCard);
            header.innerHTML = `<h3>${data.name}</h3>`;
            body.innerHTML = `
                <img src="${data.sprites.front_default}" alt="picture of ${data.name}">
                <li>Species: ${data.species.name}</li>
                <li>Height: ${data.height}'</li>
                <li>Weight: ${data.weight} Lbs.</li>
                <li>Base Experience: ${data.base_experience}</li>
                <form action="javascript:deleteCard('${data.name}')">
                    <button class="btn" type="submit">Remove Pok&eacute;mon</button>
                </form>
                `
            pokeSingleContainer.append(singleCard); // This appends each card to our <div data-poke-single-container> held in our 'pokeCardContainer' const.
        });
    }


function clearPokes(elementId) {
        document.getElementById(elementId).innerHTML="";
    }
    
    // this function removes the hide class from our reset button when a pokemon card is added to the deck. It's attached to the 'Add Pokemon' button created on each card.
function removeHide() {
        let element = document.getElementById("resetBtn");
        element.classList.remove("hide");
    
    }
    
    // this function adds the hide class to our reset button when the 'Reset Deck' button is pressed. It's attached to that button.
function hideBtn() {
        let element = document.getElementById("resetBtn");
        element.classList.add("hide");
    }

    // this function clears the card by using the javaScript 'remove()' function. It finds the element by the id and then removes the entire element.
    // I'm using it above to remove the entire div that holds the single pokemon card. It's called by the 'Remove Pokemon' button.
    // NOTE: I need to figure out how to make the 'Reset Deck' button hide if all the individual Pokemon cards are deleted
function deleteCard(elementId) {
    let element = document.getElementById(elementId);
    element.remove();
}

//     // this function adds the hide class to a card with the id that equals the name of the card DO NOT USE IT LEAVES INVISIBLE INSTANCES OF THE CARD
// function addHide(elementId) {
//     let element = document.getElementById(elementId);
//     element.classList.add("hide");
// }


// // this block fetches our code for an individual pokemon.
// const requestURL = 'https://swapi.dev/api/people/'; // assigns this URL to our API (SWAPI) to the 'requestURL' const

// getData(requestURL); // uses the 'getData()' function with the 'requestURL' const to get our JSON data. It passes the 'requestURL' to the 'getData()' function below

// function getData(url) { // uses the 'getData()' function with whatever 'url' is passed to it. We pass the URL for 'next' and 'previos' pages after the initial load of the API URL from above.
//     fetch(url) // uses the 'fetch()' function on our 'url' to request the actual data from the API
// .then(function (response) { // attaches the .then() function and I create an anonymous function that holds the 'response' from our API with all our data
//   return response.json(); // it converts our 'response' to JSON data using the 'json()' function and returns it to our 'response' parameter in our anonymous function which then passes it to the next .then block (I think...)
//   })
// .then(function (jsonObject) {
//     console.table(jsonObject); // checks for a valid response by showing the response data in a console table. (look in Browser Console).
//     let previous = jsonObject['previous']; // looks at our 'jsonObject' and pulls the URL for 'previous' and assigns it to an array which it stores in the 'previous' variable.
//     let next = jsonObject['next']; // looks at our 'jsonObject' and pulls the URL for 'next' and assigns it to an array which it stores in the 'next' variable.

//     console.log("this is our previous data ->", previous); // simply console logs the value of the 'next' variable.
//     console.log("this is our next data ->", next); // simply console logs the value of the 'next' variable.
    
//     const people = jsonObject['results']; // stores the results of the response in an array named 'people', in this case named 'results' (but it could be named anything, so always check your response table for naming).
//     console.table(people); // shows the array in a table in the Browser Console which is handy for finding the index and Key: Value, of things.
//     // document.getElementById("cards").innerHTML = people[0].name + ', ' + 'Eye Color - ' + people[0].eye_color; // This line is a simple way to access parts of our array and display them to the DOM using the 'cards' id to output.
//     displayPage(people, next, previous); // This passes 'people', 'next' and 'previous' to our 'displayPage()' function.
// });
// }