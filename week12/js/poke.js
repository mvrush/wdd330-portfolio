const pokeCardTemplate = document.querySelector("[data-poke-template"); // looks at our html, queries the selector which is a <div> tag attribute, 'data-poke-template', and puts that in our 'pokeCardTemplate' const.
const pokeCardContainer = document.querySelector("[data-poke-cards-container]"); // looks at our html, queries the selector which is a <div> tag attribute, 'data-poke-cards-container', and creates the pokeCardContainer const.
const searchInput = document.querySelector("[data-search]"); // looks at our html, queries the selector which is an <input> tag attribute, 'data-search', and creates the searchInput const.

// console.log("this is our pokeCardTemplate const ->", pokeCardTemplate); // looks at our pokeCardTemplate const.
console.log("this is our pokeCardContainer const ->", pokeCardContainer); // looks at our pokeCardContainer const.

let pokemon = []; // this will be used to create a 'pokemon' object that we will loop through. Here we create an empty 'pokemon' array.

// I add an event listener to the 'searchInput' const. Everytime a letter of space is typed into id="input" the listener hears it.
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase(); // this looks at what the user types in the search input, converts it 'toLowerCase(), and thats the 'value' of our 'target' event which is 'e' and stores it in the 'value' const. If you don't convert everything to lower case you won't find matches since case sensitivity is native. You can have it be case sensitive if you want.
    console.log("this is our 'value' const ->", value); // this checks to see if our event listener is listening to what's entered into our search input.
    console.log("this is our 'pokemon' array created from our data.map() loop ->", pokemon); // YOU CAN ONLY SEE THIS LOG AFTER TYPING INTO THE SEARCH BOX. It populates the 'pokemon' array with the object returned from the .then(data) arrow function of our API call. It has the 'name', 'email' and 'element' returned for all the pokemon.
    pokemon.forEach(poke => {
        const isVisible = poke.name.toLowerCase().includes(value) || poke.url.toLowerCase().includes(value); // simply checks the poke typed 'value' created from our event listener and if it matches the poke name or url (converted to lower case using 'toLowerCase()'), it puts 'true' in the 'isVisible' const. So as soon as it detects a match, it changes to 'true'.
        poke.element.classList.toggle("hide", !isVisible || value===""); // this line says; If 'isVisible' is false ('!isVisible') OR (||) const 'value' IS EQUAL (===) to an empty string (""), toggle the "hide" class using the 'classList' method that adds a class to the list of classes on that 'element' which is our poke card passed back up as the value of 'element' in our returned object from below.
    })
})

// https://pokeapi.co/api/v2/pokemon?limit=100&offset=200
// https://pokeapi.co/api/v2/pokemon
fetch("https://pokeapi.co/api/v2/pokemon?limit=1126") // uses fetch() to call our API
 .then(res => res.json()) // recieves a response which it then uses an arrow function to convert to json using json()
 // .then(data => console.log("This is the API data we recieved ->", data))  // used to test whether we got our data back.
    .then(data => {     // Then takes that json() which is filled with our 'data' from the API. We use arrow functions to manipulate the data.
    pokemon = data['results'].map(poke => { // uses our data object and then pops down to the ['results'] array. Then loops through the data 'results' array (found in our returned object) pulling each 'pokemon' using the 'map()' function and creates a card which it adds to our 'poke' array defined above.
    // This looks at the content from our HTML page template 'data-poke-template' which is stored in our pokeCardTemplate variable
    const card = pokeCardTemplate.content.cloneNode(true).children[0]; // 'cloneNode(true)' clones all 'content' in the 'pokeCardTemplate' const. We then specify the first child node 'children[0]' and store it in the 'card' const
    // it returns our card template which you can see using console.log(card) to see the content stored in the 'card' const.
    // console.log("this is our 'card' const", card);
    const header = card.querySelector("[data-header]"); // this is looking in our 'card' const. It is looking for the 'data-header' attribute listed in that <div> tag.   
    const body = card.querySelector("[data-body]"); // this is looking in our 'card' const. It is looking for the 'data-body' attribute listed in that <div> tag.
    header.textContent = poke.name; // this looks at our 'poke' object and gets the 'name'. It then stores it as 'textContent' and appends that to the 'header' const using the (.)
    body.textContent = poke.url;  // this looks at our 'poke' object and gets the 'email'. It then stores it as 'textContent' and appends that to the 'header' const using the (.)
        // another way to say what's happening in the previous two lines is that it's looking at the 'header' or 'body' and appending the 'textContent' to that and the textContent = the 'name' or 'email' found in the 'poke' object.
    pokeCardContainer.append(card); // This appends each card to our <div data-poke-cards-container> held in our 'pokeCardContainer' const.
    // console.log("this is our 'data' ->", data); // logs our data that we received from the API which was turned into JSON data.
    // console.log("this is each 'poke' from our 'data' created with the 'forEach()' loop ->", poke);
    // console.log("this is what's in the 'header' const ->", header); // 
    // console.log("this is what's in the 'body' const ->", body);
    return { name: poke.name, url: poke.url, element: card} // here we return an object. This object conatins our poke name, poke email, and the card element.
    })
})   