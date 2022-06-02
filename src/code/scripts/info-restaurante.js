// gtting the id from URL
var id = parseInt(document.location.toString().replace("http://127.0.0.1:5501/src/code/html/info-restaurante.html?id=",''))

// read .json file as a objetct
const response = await fetch("../database/restaurants.json");
const restaurantsDatabaseJson = await response.json();
let rest = restaurantsDatabaseJson.restaurants[id-1];
