// Versao 01 (deprecated) - Sequestrando a funcao console.log pra poder capurar os prints em um array
// https://stackoverflow.com/questions/52347756/read-console-log-output-form-javascript

// Versao 02 - crio um array vazio e faço um push no fetch api
var consoleStorage = [];

// getting the id from URL
var url = document.location.toString();

var id = parseInt(url.substring(url.length - 4).replace(/[^0-9]/g, ''));

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
    let address = consoleStorage[0]['address']['city'] + ', ' + consoleStorage[0]['address']['state'] + ', ' + consoleStorage[0]['address']['street'] + ', nº ' + consoleStorage[0]['address']['number'];

    document.getElementById("restname").innerHTML = name;
    document.getElementById("type").innerHTML = `Tipo: ${type}`;
    document.getElementById("avgPrice").innerHTML = `Média de Preço: R$ ${avgPrice}`;
    document.getElementById("capacity").innerHTML = `Capacidade: ${capacity} pessoas`;
    document.getElementById("waitTime").innerHTML = `Tempo de Espera: ${waitTime} minutos`;
    document.getElementById("telephone").innerHTML = `Telefone: ${tele}`;
    document.getElementById("whatsapp").innerHTML = `Whatsapp: ${whatsapp}`;
    document.getElementById("address").innerHTML = `End: ${address}`;
    document.getElementById("rest-img").src=`./src/code/imgs/${imgRest}`;

    // avaliacao url
    document.getElementById("avaliacaoURL").setAttribute('href',`\avaliacao.html?name='${name}'`)
}

function main_plate() {
    for (let index=0; index < 3; index++) {
        let plate = consoleStorage[0]['infoRestaurant']['pratoPrincipal'][index]['nomePrato'];
        let preco = consoleStorage[0]['infoRestaurant']['pratoPrincipal'][index]['price'];
        let timePrep = consoleStorage[0]['infoRestaurant']['pratoPrincipal'][index]['timePrep'];
        let classification = consoleStorage[0]['infoRestaurant']['pratoPrincipal'][index]['classfication'];
        let imagePlate = consoleStorage[0]['infoRestaurant']['pratoPrincipal'][index]['plateImage'];

//        console.log(index);

        document.getElementById(`namePlate${index+1}`).innerHTML = plate;
        document.getElementById(`preco${index+1}`).innerHTML = `Preço: R$ ${preco}`;
        document.getElementById(`tempo${index+1}`).innerHTML = `Tempo de Preparo: ${timePrep} minutos`;
        document.getElementById(`classi${index+1}`).innerHTML = `Classificação: ${classification} Estrelas`;
        document.getElementById(`item-img${index+1}`).src=`src/code/imgs/${imagePlate}`;
    }
}

function drinks() {
    for (let index=0; index < 3; index++) {
        let plate = consoleStorage[0]['infoRestaurant']['bebidas'][index]['nomePrato'];
        let preco = consoleStorage[0]['infoRestaurant']['bebidas'][index]['price'];
        let timePrep = consoleStorage[0]['infoRestaurant']['bebidas'][index]['timePrep'];
        let classification = consoleStorage[0]['infoRestaurant']['bebidas'][index]['classfication'];
        let imagePlate = consoleStorage[0]['infoRestaurant']['bebidas'][index]['plateImage'];


//        console.log(index);

        document.getElementById(`namePlate${index+1}`).innerHTML = plate;
        document.getElementById(`preco${index+1}`).innerHTML = `Preço: R$ ${preco}`;
        document.getElementById(`tempo${index+1}`).innerHTML = `Tempo de Preparo: ${timePrep} minutos`;
        document.getElementById(`classi${index+1}`).innerHTML = `Classificação: ${classification} Estrelas`;
        document.getElementById(`item-img${index+1}`).src=`./src/code/imgs/${imagePlate}`;
    }
}

function dessert() {
    for (let index=0; index < 3; index++) {
        let plate = consoleStorage[0]['infoRestaurant']['sobremesa'][index]['nomePrato'];
        let preco = consoleStorage[0]['infoRestaurant']['sobremesa'][index]['price'];
        let timePrep = consoleStorage[0]['infoRestaurant']['sobremesa'][index]['timePrep'];
        let classification = consoleStorage[0]['infoRestaurant']['sobremesa'][index]['classfication'];
        let imagePlate = consoleStorage[0]['infoRestaurant']['sobremesa'][index]['plateImage'];

        document.getElementById(`namePlate${index+1}`).innerHTML = plate;
        document.getElementById(`preco${index+1}`).innerHTML = `Preço: R$ ${preco}`;
        document.getElementById(`tempo${index+1}`).innerHTML = `Tempo de Preparo: ${timePrep} minutos`;
        document.getElementById(`classi${index+1}`).innerHTML = `Classificação: ${classification} Estrelas`;
        document.getElementById(`item-img${index+1}`).src=`./src/code/imgs/${imagePlate}`;
    }
}

// https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck
const readDB = fetch('./src/code/database/restaurants.json')
    .then((response) => response.json())
    .then((database => {
        consoleStorage.push(database.restaurants[id-1]);
    
    // API DOM to update the page
    start(); 
    main_plate();
}));

// start sequence
// the restaurant information is acessable to consoleStorage[0]
window.onload = function() {
    readDB;
}