// Versao 01 (deprecated) - Sequestrando a funcao console.log pra poder capurar os prints em um array
// https://stackoverflow.com/questions/52347756/read-console-log-output-form-javascript

// Versao 02 - crio um array vazio e faço um push no fetch api
var consoleStorage = [];

// getting the id from URL
var id = parseInt(document.location.toString().replace("http://127.0.0.1:5501/src/code/html/info-restaurante.html?id=",''))

// DOM function
function start() {
    let name = consoleStorage[0]['name'];
    let type = consoleStorage[0]['type'];
    let avgPrice = consoleStorage[0]['averagePrice'];
    let capacity = consoleStorage[0]['capacity'];
    let waitTime = consoleStorage[0]['waitingTimeMinutes'];
    let tele = consoleStorage[0]['telephone'];
    let whatsapp = consoleStorage[0]['whatsapp'];
    let imgRest = consoleStorage[0]['image'];

    document.getElementById("restname").innerHTML = name;
    document.getElementById("type").innerHTML = `Tipo: ${type}`;
    document.getElementById("avgPrice").innerHTML = `Média de Preço: ${avgPrice}`;
    document.getElementById("capacity").innerHTML = `Capacidade: ${capacity}`;
    document.getElementById("waitTime").innerHTML = `Tempo de Espera: ${waitTime}`;
    document.getElementById("telephone").innerHTML = `Telefone: ${tele}`;
    document.getElementById("whatsapp").innerHTML = `Whatsapp: ${whatsapp}`;
    document.getElementById("rest-img").src=`../imgs/${imgRest}`;
}

// https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck
const readDB = fetch('../database/restaurants.json')
    .then((response) => response.json())
    .then((database => {
        consoleStorage.push(database.restaurants[id-1]);
    
    start(); // DOM
}));

// start sequence
// the restaurant information is acessable to consoleStorage[0]
window.onload = function() {
    readDB;
}