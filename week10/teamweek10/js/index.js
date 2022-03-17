// make sure you add the .js at the end of javascript files to avoid "blocked because of disallowed MIME type" message.
import QuakesController from './QuakesController.js';
import buildNavigation from './routing.js';

const navElement = document.getElementById('quakesMainNav');
buildNavigation(navElement);

//  const myQuakesController = new QuakesController('#quakeList');
//  myQuakesController.getQuakesByRadius();

