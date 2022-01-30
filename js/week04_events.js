/******************************************************************************************/
/**************** THE FOLLOWING IS ALL THE JavaScript FOR MY EVENTS CODING *****************
 * When reading through the code I have commented out code that may conflict with code later in the page.
 * Hopefully my notes will explain what is happening.
 * You can also uncomment the test code to see how it works but be warned, there may be a conflict with
 * other uncommented code which you can comment out if needed.
 ********************************************************************************************/

/******* THE FOLLOWING CODE ARE BASED ON MOUSE EVENTS *******/
/* The following 4 line block will log a click if you click anywhere on the HTML page. Uncomment it to see in action. */
// function doSomething(){
//     console.log('Something Happened!');
// }
// addEventListener('click', doSomething);

/* Whenever an event handler is triggered by an event, the callback function is called.
* The function is automatically passed an event object as a parameter that contains information about the event.
* In the following codeblock you will see the word 'click' in the console every time you click anywhere on the page. (the counter by the word 'click' in the console will increase in Firefox).
* It is logging the event type of click. The 'type' property returns the even type.
*/
// function doSomething(event){ // You don't have to name the function parament 'event' you can call it anything you want. 'event' or 'e' is standard for events.
//     console.log(event.type);
// }
// addEventListener('click', doSomething);

/* The 'target' property returns a reference to the node that fired the event.
* The following code will show a message in the console telling us the node that was clicked on.
* For instance if you click on a page element like the 'Click on Me' paragraph in our HTML page,
* It will tell you that you clicked on a <p> element and show you what was in the tag like <p id="click"
* This is crazy amounts of useful for figuring out what an element is that you want to click on.
*/
// function doSomething(event){
//     console.log(event.target);
// }
// addEventListener('click', doSomething);

/* The following code block uses the click to trigger properties to tell you the coordinates of an event.
* 'screenX' and 'screenY' properties shows the number of pixels from the left and top of the screen where the event took place.
* 'clientX' and 'clientY' properties shows the number of pixels from the left and top of the Client that is being used (usually the browser window).
* 'pageX' and 'pageY' properties shows the number of pixels from the left and top, respectively, where the event took place in the 'document'. It takes account of whether the page has been scrolled.
* These are useful for finding out the place where a click happened or the position of the mouse cursor.
* To see these in actions, uncomment the following code, click around on the page and watch the browser console.
*/
// function doSomething(event){ // You don't have to name the function parament 'event' you can call it anything you want. 'event' or 'e' is standard for events.
//     console.log(`screen: (${event.screenX},${event.screenY}, page: (${event.pageX},${event.pageY}, client: (${event.screenX},${event.screenY})`);
// }
// addEventListener('click', doSomething);

/* The following code is for detecting mouse 'click', 'mousedown' and 'mouseup' events.
* 'mousedown' is the downpress of the mouse button. 'mouseup' is the release of the mouse button.
* Just click on the 'Click On Me' <p id="click" and you should see all three events fire in the browser console like this; down-up-click.
*/
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click'));
clickParagraph.addEventListener('mousedown',() => console.log('down'));
clickParagraph.addEventListener('mouseup',() => console.log('up'));

/* The following code is for the 'dblclick' event that detects mouse doubleclicks.
* it has an event listener attached to the paragraph with the id of 'dblclick.
* doublclick to see it toggle the 'highlight' style found in the style block at the top of the HTML.
* I also did an addEventListener that will log the 'dblclick' in the console.
* NOTE: be very cautious of adding both a 'click' and 'dblclick' event to the same element. Hard to discern if a single click is just the 1st click of a dblclick.
*/
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
dblclickParagraph.addEventListener('dblclick',() => console.log('dblclick'));

function highlight(event){
    event.target.classList.toggle('highlight'); // the use of 'target' comes into play in our 'Event Delegation' code found below.
}

/* The following code is for the 'mouseover' event and 'mouseout' event.
* 'mouseover' happens when the pointer is placed over the element the event listener is attached to.
* 'mouseout' happens when the pointer is moved away from the element the event listener is attached to.
* Just hover the pointer over the block with <p id="mouseover"
*/
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

/* The following code is the 'mousemove' event. It only occurs while the cursor is over the element to which it's applied.
* This line of code creates a console.log whenever the mouse moves over the third paragraph.
*/
mouseParagraph.addEventListener('mousemove', () => console.log('You Moved The Mouse!'));


/********** THE FOLLOWING CODE ARE KEYBOARD EVENTS  ************/

/* 'keydown' is the action of pressing a key. 'keyup' is the event that occurs when the key is released.
* 'keypress' happens between 'keydown' and 'keyup' and is the action of a character being typed on the screen.
* The following line adds a 'keydown' event lisenter to the entire page. Uncomment it and hold down a key.
* When keydown happens it applies the 'highlight' CSS to the entire page. Try pressing and releasing a key and also holding a key down.
*/
// addEventListener('keydown', highlight);

/* In this one when the 'keyup' event happens an anonymous arrow function will show the exact time the key was released
* in the console.
*/
//addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

/* There is a 'key' property on each of these events that returns the printed representation of the key.
* This can be super handy in programming games.
* The following code makes it so that when you press a key there is a message in the console telling you what the key represents.
*/
// addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

/* There are modifier keys such as 'alt' 'ctrl' 'shift' that fir the 'keydown' and 'keyup' events but not the 'keypress' event.
* The name of the modifier key will still be returned by the 'key' property if you apply it to the 'keydown' event instead. Like this:
*/
// addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

/*All event objects also contain info about whether a modifier key was held down when the event occured.
* The 'shift', 'ctrl', 'alt' and 'meta' key are all properties of the event object and return true if the relevant key was held down.
* The following code checks to see if the 'c' key was pressed while holding down 'ctrl'.
*/
addEventListener('keydown', (event) => {
    if(event.key === 'c' && event.ctrlKey){
        console.log('Action canceled!');
    }
});

/* The following code checks to see if the 'shift' key was held down when the mouse was clicked.
* It is like the code just above this comment.
*/
addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A shift-click combo occured!');
    }
});

/* An event listener can be removed by using the 'removeEventListener()' method.
* The following code adds a click event listener to the <p> element, but then removes it in the callback function named 'remove'.
* This means it will only be called once. (Try clicking it again and see what happens.)
* NOTE: Don't use anonymous functions as an argument for 'addEventListener()' if you want to remove it later.
* That's because there needs to be a reference to the same function name in the arguments of 'removeEventListener()'.
*/
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event) {
    console.log('Enjoy this one-time thing!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click', remove);
}

/* PREVENT DEFAULT BEHAVIOR Some elements have a default behavior associated with certain events. Like clicking on a link.
*  'preventDefault()' is a method of the 'event' object that can be used inside a callback function to stop default behavior.
* The following code stops the link from redirecting to the page specified and logs 'Broken Link!' in the console.
* It's confusing to users when default behaviors are changed so use this carefully.
*/
const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

/* EVENT PROPAGATION When you click on an element, you are actually clicking on all the elements it's nested inside of.
* If you click on an <li> element you're also clicking the <ul>, <body> and <html> elements.
* The event PROPOGATES as it moves from one element to another.
* The two forms of event propagation are 'bubbling' and 'capturing'. 
* 'bubbling' happens when you click the element and then it bubbles up the document tree firing on each parent element until it reaches the root node.
* 'capturing' starts by firing an event on the root element then propgates downward on each child element until it reaches the target element that was clicked on.
* 'Bubbling' is the default behavior.
*The following code shows bubbling. If you click on the first <li> item on the page the console will show you clicked on a <li> and an <ul>.
* if you click on the second or third <li> element it will only show you clicked on the <ul> because they don't have an event listener attached.
* That click bubbles up to the <ul> which does have an event listener attached. Uncomment the second block to see it work.
* the first block is needed for the capturing/bubbling code below.
*/
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

// ulElement.addEventListener('click', (event) => console.log('clicked on ul'));
// liElement.addEventListener('click', (e) => console.log('Clicked on li')); // here we used 'e' insted of 'event because you don't have to use the word 'event' you can use anything.

/* If you want to use both capture and bubble you have to set a separate event handler for both cases.
* To use Capture there's a third parameter which is boolean that specifies whether capturing should be used or not.
* The default is 'false' which is why bubbling happens by default. So we add 'true' or 'false' depending on if we want Capturing or Bubbling.
* The following code shows that. Uncomment one or the other to see it work.
*/
    // capturing
    ulElement.addEventListener('click', (event) => console.log('Clicked on ul'), true);
    liElement.addEventListener('click', (event) => console.log('Clicked on li'), true);

    // // bubbling
    // ulElement.addEventListener('click', (event) => console.log('Clicked on ul'), false);
    // liElement.addEventListener('clicl', (event) => console.log('Clicked on li'), false);

/* EVENT DELEGATION occurs when you attach an event listener to a parent to capture events that are triggered by it's child elements.
* In the following code we didn't want to attach an event listener to every <li> element so we attach the listener to the parent <ul> element.
* The 'target' property found in the 'highlight()' function we wrote on line 60 uses the 'target' property to target each <li> item when clicked.
* This is how the <ul> delegates it's listener to each child element.
*/
ulElement.addEventListener('click', highlight);