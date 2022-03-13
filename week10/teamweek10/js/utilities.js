export function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        //.then(data => console.log("This is the data from our getJSON() function in utilities.js ->", data)) // THIS IS FOR TESTING PURPOSES ONLY, remove it or it won't work correctly with our other js files.
        .catch(function(error) {
            console.log(error);
        });
}

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {   // The built-in geolocation API doesn't return a promise like fetch() does. We have to add one using 'Promise'.
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };



// THIS IS MY FUNCTION TO GET THE DATA -Matt
// fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => {console.error('There was a problem with the fetch operation ->', error)});


// THIS IS MY FUNCTION TO GET DATA mimicing the error handling shown in our 'function getJSON()' -Matt
// fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02')
// .then(response => {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     } else {
//         return response.json();
//     }
// })
// .then(data => console.log(data))
// .catch(error => {console.error('There was a problem with the fetch operation ->', error)});