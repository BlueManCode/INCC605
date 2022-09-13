// import files
const data2010 = require("../data/2010.json");
const data2011 = require("../data/2011.json");
const data2012 = require("../data/2012.json");
const data2013 = require("../data/2013.json");

const generateMap = require("./generateMap");

const options = {
  "2010": data2010,
  "2011": data2011,
  "2012": data2012,
  "2013": data2013
};

let myMap = generateMap();
let defaultYear = "2013"; // update this

// function to construct dropdown menu
function dropdownMenu(options) {
  const menu = document.getElementById("years");

  // add options
  for (const option in options) {
    let element = document.createElement("option");
    element.text = option;
    menu.add(element);
  }

  menu.value = defaultYear;
  displayData(options[menu.value]);

  // add selection change event listener
  menu.addEventListener("change", (e) => {
    // destroy map and create new instance
    myMap.off();
    myMap.remove();
    myMap = generateMap();
    displayData(options[e.target.value]);
  });
}

// function to display data
function displayData(data) {
  data.data.forEach((point) => {
    const info = `
      <b>${point.name}</b>
      <b>(${point.num_student})</b>
    `;
    L.marker(point.location).addTo(myMap).bindPopup(info);
  });
}

// display default selected
dropdownMenu(options);
