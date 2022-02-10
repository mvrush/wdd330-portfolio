// These functions are exported from the ls.js file. They are for controlling the localStorage.

// This function reads the key for the value from localStorage. It then uses JSON.parse() to read the string
// that the key holds and constructs it into the JavaScript value for that string.
export function readFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

// This function writes the key/value pair to localStorage using the setItem() function.
// setItem() uses two properties. The 'key' and the 'data'. We use JSON.stringify() to convert the 'data' into a string.
export function writeToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

