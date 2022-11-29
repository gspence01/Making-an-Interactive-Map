/* REQUIREMENTS:
obtain user location
map location on leaflet map
allow user to select business type from a list and map five nearest locations using Foursquare API */

/*WHAT TO ADD

a drop-down to select the business type (cafes, resturaunts, hotels, markets)
    - requires an onclick event listener 
APIs required in order of appearance?: 
    -leaflet to render the map and markers
    -Geolocation API (provided by browser) to get user's location
    -Foursquare to select certain businesses nearby*/

/* I want to render the map by centering it based on the user's location coordinates
    make a function with body:
    return new Promise ((resolve, reject) =>{
        navigator.geolocation.getCurrentPosition(resolve, reject)
    }) 
    
    ... and passing the coordinates into center property of L.map*/