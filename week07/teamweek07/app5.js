import Comments from './comments.js'; // This line imports our class called 'Comments' from comments.js.
import Hikes from './hikes.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes'); // This says take the "Hikes" class and output it to the element with the id 'hike' which is our <ul>. We assign it to the const 'myHikes'.
window.addEventListener('load', () => { // This event listener listens for the page to 'load' and then runs an anonymous function to run the 'showHikeList()' function on the 'myHikes' const which holds the 'Hikes' object.
  myHikes.showHikeList();
});

// START OF TEAM CODE


