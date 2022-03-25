const userCardTemplate = document.querySelector("[data-user-template"); // looks at our html, queries the selector which is a <div> tag attribute, 'data-user-template', and puts that in our 'userCardTemplate' const.
const userCardContainer = document.querySelector("[data-user-cards-container]"); // looks at our html, queries the selector which is a <div> tag attribute, 'data-user-cards-container', and creates the userCardContainer const.
const searchInput = document.querySelector("[data-search]"); // looks at our html, queries the selector which is an <input> tag attribute, 'data-search', and creates the searchInput const.

// console.log("this is our userCardTemplate const ->", userCardTemplate); // looks at our userCardTemplate const.
console.log("this is our userCardContainer const ->", userCardContainer); // looks at our userCardContainer const.

let users = []; // this will be used to create a 'users' object that we will loop through. Here we create an empty 'users' array.

// I add an event listener to the 'searchInput' const. Everytime a letter of space is typed into id="input" the listener hears it.
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase(); // this looks at what the user types in the search input, converts it 'toLowerCase(), and thats the 'value' of our 'target' event which is 'e' and stores it in the 'value' const. If you don't convert everything to lower case you won't find matches since case sensitivity is native. You can have it be case sensitive if you want.
    console.log("this is our 'value' const ->", value); // this checks to see if our event listener is listening to what's entered into our search input.
    console.log("this is our 'users' array created from our data.map() loop ->", users); // YOU CAN ONLY SEE THIS LOG AFTER TYPING INTO THE SEARCH BOX. It populates the 'users' array with the object returned from the .then(data) arrow function of our API call. It has the 'name', 'email' and 'element' returned for all the users.
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value) // simply checks the user typed 'value' created from our event listener and if it matches the user name or email (converted to lower case using 'toLowerCase()'), it puts 'true' in the 'isVisible' const. So as soon as it detects a match, it changes to 'true'.
        user.element.classList.toggle("hide", !isVisible) // this line says; If 'isVisible' is false ('!isVisible'), toggle the "hide" class using the 'classList' method that adds a class to the list of classes on that 'element' which is our user card passed back up as the value of 'element' in our returned object from below.
    })
})

fetch("https://jsonplaceholder.typicode.com/users") // uses fetch() to call our API
.then(res => res.json()) // recieves a response which it then uses an arrow function to convert to json using json()
.then(data => {     // Then takes that json() which is filled with our 'data' from the API. We use arrow functions to manipulate the data.
    users = data.map(user => { // this loops through the data pulling each 'user' using the 'map()' function and creates a card which it adds to our 'user' array defined above.
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
    // console.log("this is our 'data' ->", data); // logs our data that we received from the API which was turned into JSON data.
    // console.log("this is each 'user' from our 'data' created with the 'forEach()' loop ->", user);
    // console.log("this is what's in the 'header' const ->", header); // 
    // console.log("this is what's in the 'body' const ->", body);
    return { name: user.name, email: user.email, element: card} // here we return an object. This object conatins our user name, user email, and the card element.
    })
})   