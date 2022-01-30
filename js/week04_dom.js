// this heroes const will hold all children of the 'roster' node which is specified by id='roster' in the <ul> tag.
const heroes = document.getElementById('roster');

// We can create a const that will hold the last-child <li> element of our <ul> with the id 'roster' like this:
const wonderWoman = document.querySelector('ul#roster li:last-child');

// Here we will use the 'classList' property to add class properties to the Wonder Woman list element 'class' attribute.
// 'classList()' adds a class to the existing one instead of overwriting it, thus preserving your stylesheet classes.
wonderWoman.classList.add('warrior');

// We can use setAttribute to either change the class or id of an element or to add it to the element.
// To change list the existing attribute first and then what you want it changed to. Or simply add the attribute name, like 'id' like so:
wonderWoman.setAttribute('id', 'Amazon');


// you can use the following 3 lines to create the element node, create the text node and append the text node to the element node. This adds Flash to the list.
// const flash = document.createElement('li');
// const flashText = document.createTextNode('Flash');
// flash.appendChild(flashText);

// you can make the previous lines turn into 2 lines using the 'textContent' property that every element has.
// this has added the flash <li> element and added the text 'Flash' to that element. It has not been added to the page yet.
const flash = document.createElement('li');
flash.textContent = 'Flash';

// Or even easier, make a function to create such elements. Here's the function:
function createElement (tag, text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el
}

// now we will add Aquaman and Green Lantern to the list
const aquaman = createElement('li', 'Aquaman');
const greenLantern = createElement('li', 'Green Lantern');

// now we will add the elements to the html page. Here we add Flash and Green Lantern to the list.
heroes.appendChild(flash);
heroes.appendChild(greenLantern);

// here we will insert Aquaman into the page but put it before Wonder Woman on the list
heroes.insertBefore(aquaman, wonderWoman);

// now if we want to move Wonder Woman to the bottom of the list we can use appendChild(). Even though Wonder Woman is already
// on the list, if we append it again, there can only be one instance and it will be shown at the bottom overriding the HTML code.
heroes.appendChild(wonderWoman);

// to remove an element from a page you simply use the 'removeChild()' method. You just insert the node to be removed like this:
heroes.removeChild(greenLantern);

// since we have a reference to the element (the const 'greenLantern') we can easily put it back in if we need to.
heroes.appendChild(greenLantern);

// To replace one node with another we can use 'replaceChild(). It takes two parameters: the new node and the node that is to be replaced.
// Here we will replace the content of the <h1> tag. This is how to replace the text node with a new one:
const h1 = document.getElementById('title');
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild(newText, oldText);

/************* THE FOLLOWING CODE UTILIZES THE POWER OF 'innerHTML' ****************/
// innerHTML returns all child elements as a string of HMTL to see it we can use console.log
console.log('this is our heroes innerHTML:', heroes.innerHTML);

// innerHTML can be used to place a chunk of HTML inside an element. It's much faster because you don't have to create new text nodes.
// it's done automatically and inserted into the DOM. For example, to rewrite the <h1> tag just use the following (uncomment the next line):
//  h1.innerHTML = 'Suicide Squad';

// innerHTML's power becomes more apparent if you want to insert a large amount of HTML into the document.
// instead of creating each element and text node individually you can simply enter the raw HTML as a string.
// the relevant nodes will then be added to the DOM tree automatically.
/************* Un-comment the next line of code to replace everything contained within the <ul> element. ***********/
//  heroes.innerHTML = '<li>Harley Quinn</li><li>Deadshot</li><li>Killer Croc</li><li>Enchantress</li><li>Captain Boomerang</li><li>Katana</li><li>Slipknot</li>';

/***********NOTE  **************
* We can update styles and CSS inline or on the fly with JavaScript but it is better to dynamically change the class of an element
* and keep the relevant styles for each class in a separate stylesheet.
 *********** end of note ************/

// Here is an example of editing styles on the fly
// first we assign the child at index[0] to the constant 'superman'
const superman = heroes.children[0];
// then we can address that element like this:
superman.style.border = 'red 2px solid';
// we have to use camelCase or bracket notation for CSS properties that have a dash.
// so 'background-color' becomes 'backgroundColor' or ['background color']. Here's an example:
superman.style.backgroundColor = 'lightblue';