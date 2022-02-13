/*
 Start by brainstorming with class what methods the app will need to work.
Add Todo
Complete Todo
Edit ToDo?
Delete ToDo?
List Todos
Show/hide completed
Filter ToDos (complete/not complete)
Read toDos from local storage
Write ToDos to local storage
Then organize it into things that the interface needs (public) and things that it doesn't need direct access to (private)
Public:
Add Todo
Edit Todo
filter Todos
Delete todo
list todos
private:
read/write localStorage
*/
import { qs, writeToLS, readFromLS, bindTouch } from "./utils.js";
//  private code here. Not exported from the module
// we need a place to store our list of todos in memory. It does this instead of writing to the document.
let liveToDos = null; // starts out with our liveToDos being empty.
console.log("these are our live todos", liveToDos); // logs the 'liveToDos' on page load. If null, it loads them from localStorage.

// View code here
function renderList(list, element, toDos, hidden) {
  console.log(list); // Shows our current array loaded from localStorage in the Browser Console.
  element.innerHTML = ""; // starts out with an empty innerHTML element before writing list. Basically clears anything in the '<ul id="todoList">' on the HTML page.

  list.forEach(toDo => {
    const item = document.createElement("li");
    const formattedDate = new Date(toDo.id).toLocaleDateString("en-US");

    let cb = null;
    if(hidden && toDo.completed){
        item.innerHTML = `<label><input type="checkbox" checked><strike> ${toDo.content}</strike></label><button id="removeToDo">X</button>`;
    }
    else {
      item.innerHTML = `<label><input type="checkbox"> ${toDo.content}</label><button id="removeToDo">X</button>`;
    }

    //Wire listener to the checkbox
    cb = item.childNodes[0];  // Here it's calling the child node of the <li> item. Nodes are [0]=checkbox, [1]=X-Button

    if(cb){
      cb.addEventListener("change",function() {
        toDos.completeToDo(toDo.id);
      });  
    }

    //Wire listener to the X button
    cb = item.childNodes[1];  // Here it's calling the child node of the <li> item. Nodes are [0]=checkbox, [1]=X-Button

    if(cb){
      cb.addEventListener("click",function(){
        toDos.removeToDo(toDo.id);
      });
    }

    element.appendChild(item);
  });
}

// This function loads our ToDo's from localStorage.
function getToDos(key) {
  if (liveToDos === null) { // checks the liveToDos variable defined at top. If it equals null then it loads from localStorage using our 'readFromLS' function.
    // we need to go read the list from the data store
    liveToDos = readFromLS(key) || [];
  }

  return liveToDos;
}

// This is how we add a 'newToDo' object.
function addToDo(value, key) {
  // use Date.now() for UTC millisecond string.
  // This is our JavaScript object. We refer to it using the 'this' keyword in the other functions.
  const newToDo = {
    id: new Date(),
    content: value,
    completed: false
  };

  liveToDos.push(newToDo);
  writeToLS(key, liveToDos);
}

// this would be done last if you still have time...and if you haven't blown too many minds yet :)  If you do get here...mention how similar this method is with getToDos...they could probably be combined easily.
function filterToDos(key, completed = true) {
  let toDos = getToDos(key);

  // return a list of either completed or not completed toDos based on the parameter.
  return toDos.filter(item => item.completed === hidden);
}

// public
export default class ToDos {
  constructor(listElement, key) {
    // opted to store the listElement inside the class.
    this.listElement = listElement;
    // key for localStorage saving and lookup
    this.key = key;
    // why bind here? Because it binds the 'add item' button with id="addToDo" the the 'newToDo' function.
    bindTouch("#addToDo", this.newToDo.bind(this));
    this.listToDos();
    // why bind here? Because it binds the 'X' button with id="removeToDo" the the 'removeToDo' function BUT ONLY IF IT'S IN THE HTML FIRST! (can't be generated with JavaScript).
    // bindTouch("#removeToDo", this.removeToDo.bind(this));
    // this.listToDos();
  }


  newToDo() {
    console.log("NewToDo Button Pressed"); // logs when the Add Item button is pressed.
    const task = document.getElementById("todoInput"); // takes the text input from the 'todoInput' text box assigns it to the 'task' variable.
    addToDo(task.value, this.key);  // sends the 'task.value' which is our input and 'this.key' which is the id: date() in our JavaScript object to the 'addToDo' function above.
    task.value = "";  // Resets our 'todoInput' box back to blank after sending the task.
    this.listToDos(); // call the 'listToDos()' function ro render the new list. 'this' means the current object I think?
  }

// This function finds an element by it's id.
  findTodo(id) {
    let toDo = liveToDos.find( element => {   // This anonymous function uses find() which returns the value of the first element that passes the test. In this case, a matching id.
      return element.id === id;
    });
  
    return toDo;
  }
// This function watches for an item to be checked or unchecked.
  completeToDo(id) {
    console.log(id + "checked");  // Output to console.log whenever the checkbox is clicked
    let toDo = this.findTodo(id);  // calls the findTodo() function defined above on 'this' (the 'this' keyword refers to our JavaScript object). Assigns the id to the toDo variable which only has local scope.
  
    if(toDo){
      toDo.completed = !toDo.completed;   // Says, if toDo.completed is actually (=) not (!) toDo.completed, write it to LS and render the list changing 'completed' from false to true.
      writeToLS(this.key, liveToDos);   // calls the writeToLS() function and sends the callback values of "this.key" ('this' refers to the JavaScript object) which is the key and 'liveToDos' which is our value that gets converted to a string.
      renderList(liveToDos, this.listElement,this, true); // calls our 'renderList()' function ans passes 'liveToDos', 'this.listElement', 'this' (which is 'this' particular ToDo element), 'true'
    }  
  }

  listToDos(hidden = true) {
    renderList(getToDos(this.key), this.listElement, this, hidden);
  }

  // This function is used to remove an item from the list.
  removeToDo(id) {
    console.log("removeToDo button pressed");
    console.log("logged by Matt from 'removeToDo' function.", liveToDos);
    let toDo = this.findTodo(id); // Calls the findTodo() function defined above. Assigns the id to the ToDo variable which only has local scope because of 'let'.
    // NEED TO FIND THE ARRAY VALUE HERE (the following almost worked works in tandem with line 156)
    // let foundIndex = liveToDos.findIndex(el => el.toDo === toDo);
    // We use the 'splice()' function on the 'liveToDos' array that's created from localStorage.
    // splice(val1, val2) val1 = our item id defined in 'toDo' and val2 = the number of items to splice (in this case 1).
    // liveToDos.splice(foundIndex, 1);  // Works in tandem with line 153
    liveToDos.splice(toDo, 1); // This works but only takes index [0] out of the array. Need to find a way to target a specific id.
    writeToLS(this.key, liveToDos);   // calls the writeToLS() function and sends the callback values of "this.key" ('this' refers to the JavaScript object) which is the key and 'liveToDos' which is our value that gets converted to a string.
    renderList(liveToDos, this.listElement,this, true); // calls our 'renderList()' function ans passes 'liveToDos', 'this.listElement', 'this' (which is 'this' particular ToDo element), 'true'
  }

}

//  This could also be done as a simple object literal as well.
// const ToDos = {
//   _key: null,
//   _listElement: null,
//   newToDo: function(value) {
//     addToDo(value);
//     this.listToDos();
//   },
//   listToDos: function(hidden = true) {
//     renderList(getToDos(), this.listElement, hidden);
//   }
// };

// export default toDos;