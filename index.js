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
//selects the dropdown
const select = document.getElementById('select');

async function loadMap(){
    //find user's location...
    position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
    
    var latLong = {
        lat: position.coords.latitude,
        long: position.coords.longitude
    };

    //create map layer
    var userMap = L.map('map', {
        center: [latLong.lat, latLong.long],
        zoom: 13,
    });

    //create tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(userMap);

    
    //to create a circle around where they are
    L.circle([latLong.lat, latLong.long],{
        fillColor: '#0000FF',
        fillOpacity: 0.25,
        radius: 100
    }).addTo(userMap);
    //second circle just to be fancy and look like google maps lol
    L.circle([latLong.lat, latLong.long],{
        fillColor: '#0000FF',
        fillOpacity: 0.5,
        radius: 25
    }).addTo(userMap);

}

select.addEventListener('change', (event)=>{
    console.log(event.target.value);
})

loadMap();


