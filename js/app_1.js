///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'lukemiller04.l8mm4g9j'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoibHVrZW1pbGxlcjA0IiwiYSI6Ik9nSVNVSEkifQ.t1KFJCZFAL5ZDHxyuvcNWQ'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);
