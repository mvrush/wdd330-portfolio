  // uses a touchend for mobile devices and falls back to a click for desktop
  export function bindTouch(selector, callback) {
    const element = qs(selector);
    element.addEventListener("touchend", e => {
      e.preventDefault();
      callback();
    });
    element.addEventListener("click", callback);
  }