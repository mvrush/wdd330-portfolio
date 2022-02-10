// First we import all the functions from the 'ls.js' and 'utilities.js' files.
 // import { readFromLS, writeToLS } from "./ls.js";

let list = [];

console.log(list);

function addToDo() {
// We could use the next line to simply push the new ToDo item into the list array
    // list.push(document.getElementById("todoInput").value, "todo" + Date.now());
// instead we create an object called 'newToDo' with the object values listed.
    const newToDo = {
        id: "todo" + Date.now(),
        content: document.getElementById("todoInput").value,
        completed: false
    };
// We then use push() to push the 'newToDo' object to the 'list' array.
   list.push(newToDo);
       console.log(list); 
// We loop through the array items
    for (let i = 0; i < list.length; i++) {
      listItem = list[i].content;
      console.log(listItem);
    }

// // We then create a <li> element
     const item = document.createElement("li");
// // We then create a text node:
//     const textNode = document.createTextNode(`${listItem}`);
// // We then add the text content of 'listItem' to the 'item' const.
//     item.appendChild(textNode);
// we could output the list array to the "todoList" <ul> like this:
      document.getElementById("todoList").appendChild(item).innerHTML = `<input type="checkbox">${listItem}<div class="delete">X</div>`;
    // document.getElementById("todoList").appendChild(item);
}