const userCardTemplate = document.querySelector("[data-user-template"); // looks at our html, queries the selector which is a <div> tag attribute, 'data-user-template', and puts that in our 'userCardTemplate' const.
const userCardContainer = document.querySelector("[data-user-cards-container]"); // looks at our html, queries the selector which is a <div> tag attribute, 'data-user-cards-container', and creates the userCardContainer const.
const searchInput = document.querySelector("[data-search]"); // looks at our html, queries the selector which is an <input> tag attribute, 'data-search', and creates the searchInput const.

// console.log("this is our userCardTemplate const ->", userCardTemplate); // looks at our userCardTemplate const.
console.log("this is our userCardContainer const ->", userCardContainer); // looks at our userCardContainer const.

let users = []; // this will be used to create a 'users' object that we will loop through. Here we create an empty 'users' array.

// I add an event listener to the 'searchInput' const. Everytime a letter of space is typed into id="input" the listener hears it.
searchInput.addEventListener("input", (e) => {
    const value = e.target.value; // this looks at the 'value' of our 'target' event which is 'e' and stores it in the 'value' const.
    console.log("this is our 'value' const ->", value); // this checks to see if our event listener is listening to what's entered into our search input.
})

fetch("https://jsonplaceholder.typicode.com/users") // uses fetch() to call our API
.then(res => res.json()) // recieves a response which it then uses an arrow function to convert to json using json()
.then(data => {     // Then takes that json() and stores it in a 'data' varible.
    data.forEach(user => { // this loops through each 'user' using the 'forEach()' function and creates a card.
    // This looks at the content from our HTML page template 'data-user-template' which is stored in our userCardTemplate variable
    const card = userCardTemplate.content.cloneNode(true).children[0]; // 'cloneNode(true)' clones all 'content' in the 'userCardTemplate' const. We then specify the first child node 'children[0]' and store it in the 'card' const
    // it returns our card template which you can see using console.log(card) to see the content stored in the 'card' const.
    // console.log("this is our 'card' const", card);
    const header = card.querySelector("[data-header]"); // this is looking in our 'card' const. It is looking for the 'data-header' attribute listed in that <div> tag.   
    const body = card.querySelector("[data-body]"); // this is looking in our 'card' const. It is looking for the 'data-body' attribute listed in that <div> tag.
    header.textContent = user.name; // this looks at our 'user' object and gets the 'name'. It then stores it as 'textContent' and appends that to the 'header' const using the (.)
    body.textContent = user.email;  // this looks at our 'user' object and gets the 'email'. It then stores it as 'textContent' and appends that to the 'header' const using the (.)
        // another way to say what's happening in the previous two lines is that it's looking at the 'header' or 'body' and appending the 'textContent' to that and the textContent = the 'name' or 'email' found in the 'user' object.
    userCardContainer.append(card); // This appends each card to our <div data-user-cards-container> held in our 'userCardContainer' const.
        // console.log("this is each 'user' from our 'data' created with the 'forEach()' loop", user);
    // console.log("this is what's in the 'header' const ->", header); // 
    // console.log("this is what's in the 'body' const ->", body);
    })
})   