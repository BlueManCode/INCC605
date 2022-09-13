const L = require("leaflet");

module.exports = function generateMap() {
  // create an instance of the map
  let myMap = L.map("map", { zoomControl: false }).setView([0, 0], 2);

  // move the zoom button to bottom right
  L.control
    .zoom({
      position: "bottomright"
    })
    .addTo(myMap);

  // Add tile layer for the map
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 20
    }
  ).addTo(myMap);

  return myMap;
};
