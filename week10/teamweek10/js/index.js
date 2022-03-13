import QuakesController from './QuakesController.js';
import buildNavigation from './routing.js';

const navElement = document.getElementById('quakesMainNav');
buildNavigation(navElement);

//  const myQuakesController = new QuakesController('#quakeList');
//  myQuakesController.getQuakesByRadius();

