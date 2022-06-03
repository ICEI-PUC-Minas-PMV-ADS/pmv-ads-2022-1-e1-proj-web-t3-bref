// Sequestrando a funcao console.log pra poder capurar os prints em um array
// https://stackoverflow.com/questions/52347756/read-console-log-output-form-javascript
var consoleStorage = [];

console.log = function(msg){
   consoleStorage.push(msg);
   console.warn(msg); // if you need to print the output
}

// getting the id from URL
var id = parseInt(document.location.toString().replace("http://127.0.0.1:5501/src/code/html/info-restaurante.html?id=",''))

// https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck
const readDB = fetch('../database/restaurants.json')
    .then((response) => response.json())
    .then((database => {
        return database.restaurants[id];
}));

const printRest = () => {
    readDB.then((a) => {
        console.log(a);
    })
};

// start sequence
// the restaurant information is acessable to consoleStorage[0]
window.onload = function() {
    printRest();
}