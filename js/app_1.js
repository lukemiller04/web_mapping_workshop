///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'lukemiller04.l8mm4g9j'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoibHVrZW1pbGxlcjA0IiwiYSI6Ik9nSVNVSEkifQ.t1KFJCZFAL5ZDHxyuvcNWQ'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

///////////////////////////////////////////////////////////////////////////
// This is the area we're going to use to add data to our map

var dataFileToAdd = 'data/KCEats.geojson'; //<- Point this to the file that you want to include on the map
var dataToAdd;

var featureLayer = L.mapbox.featureLayer()
    .loadURL(dataFileToAdd)
    .addTo(map);

featureLayer.on('ready', function() {
    this.setStyle({
        "color": "#F22E2E",
        "fillColor": "#F22E2E",
        "weight": 5,
        "opacity": 1
    });
    map.fitBounds(featureLayer.getBounds());
});

///////////////////////////////////////////////////////////////////////////
