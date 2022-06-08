let restaurantsDatabase;

// Função que recebe como parâmetro uma página qualquer e faz o redirecionamento.
function openPage(page) {
    window.location = page;
}

window.onload = async function () {
    console.log("Chamou a função window.onload");
    restaurantsDatabase = await getRestaurantsFromDatabase();
    const filter = getSearchFilter();
    loadRestaurants(filter);
}

async function getRestaurantsFromDatabase() {
    console.log("Chamou a função getRestaurantsFromDatabase");
    const response = await fetch("../database/restaurants.json");
    const restaurantsDatabaseJson = await response.json();
    console.log(restaurantsDatabaseJson);
    return restaurantsDatabaseJson.restaurants;
}

function getSearchFilter() {
    console.log("Chamou a função getSearchFilter")
    const params = new URLSearchParams(window.location.search);

    const filter = {
        name: params.get("pesq"),
        capacity: Number.parseFloat(params.get("capacity")),
        type: params.get("restaurant-type"),
        averagePrice: Number.parseFloat(params.get("average-price")),
        paymentMethod: params.get("payment-methods"),
        city: params.get("city"),
        waitingTimeMinutes: Number.parseFloat(params.get("waiting-time"))
    };

    return filter;
}

function loadRestaurants(filter) {
    console.log("Chamou a função loadRestaurants", filter);
    let allCardsHtml = "";

    let filteredRestaurants = getRestaurantsBasedOnFilter(filter);

    if (filteredRestaurants.length === 0) {
        allCardsHtml = getNotFoundRestaurantsCardHtml();
        filteredRestaurants = getAllRestaurants();
    }

    for (let index = 0; index < filteredRestaurants.length; index++) {
        const restaurant = filteredRestaurants[index];
        const cardHtml = restaurantCardHtml(restaurant);

        allCardsHtml = allCardsHtml + cardHtml;
    }

    let restaurantListElement = document.getElementById('restaurant-list');
    restaurantListElement.innerHTML = allCardsHtml;
}

function getAllRestaurants() {
    return restaurantsDatabase;
}

function getNotFoundRestaurantsCardHtml() {
    const cardHtml =
        `
    <div class="card">
    <div class="card-info-group">

        <span class="card-title">Poxa, não encontramos os restaurantes, mas aqui está uma lista que você
            pode gostar.</span>
    </div>
    </div>
    `;

    return cardHtml;
}

function getRestaurantsBasedOnFilter(filter) {
    console.log("Chamou a função getRestaurantsBasedOnFilter", filter);

    if (filter == undefined || filter == null)
        return restaurantsDatabase;

    const filteredRestaurants = restaurantsDatabase.filter(r =>
        (filter.name == null || r.name.toUpperCase().includes(filter.name.toUpperCase()))
        && (filter.type == null || r.type.toUpperCase() == filter.type.toUpperCase())
        && (Number.isNaN(filter.averagePrice) || r.averagePrice <= filter.averagePrice)
        && (Number.isNaN(filter.capacity) || r.capacity <= filter.capacity)
        && (filter.paymentMethod == null || r.paymentMethods.includes(filter.paymentMethod))
        && (Number.isNaN(filter.waitingTimeMinutes) || r.waitingTimeMinutes <= filter.waitingTimeMinutes)
        && (filter.city == null || r.address.city.toUpperCase().includes(filter.city.toUpperCase()))
    );
    
    console.log("Filtrou o que?", filteredRestaurants);

    return filteredRestaurants;
}

function restaurantCardHtml(restaurant) {
    console.log("Chamou a função restaurantCardHtml com o seguinte parâmetro", restaurant);

    const formatedPrice = formatPrice(restaurant.averagePrice)

    const cardHtml =
        `<div class="card" onclick="openPage('index.html')">

        <!-- Imagem do local. -->
        <img class="card-image" src="../imgs/${restaurant.image}" alt="${restaurant.name}">

        <!--  Informações principais do restaurante. -->
        <div class="card-info-group">

            <span class="card-title">${restaurant.name}</span>

            <div class="card-item-group-container">

                <div class="card-item-group">
                    <div class="card-item">
                        <span><strong>Média de preços:</strong> ${formatedPrice}</span>
                    </div>
                    <div class="card-item">
                        <span><strong>Tipo:</strong> ${restaurant.type}</span>
                    </div>
                </div>

                <div class="card-item-group">
                    <div class="card-item">
                        <span><strong>Lotação:</strong> ${restaurant.capacity}%</span>
                    </div>
                    <div class="card-item">
                        <span><strong>Tempo de Espera:</strong> ${restaurant.waitingTimeMinutes}'</span>
                    </div>
                </div>
                
            </div>
        </div>
        </div>`;

    return cardHtml;
}

function formatPrice(averagePrice) {
    console.log("Chamou a função formatPrice com o seguinte parametro", averagePrice);

    let formatedPrice = "";
    let repetitions = 1;

    while (repetitions <= (averagePrice/20)) {
        formatedPrice = formatedPrice + "$";
        repetitions++;
    }

    return formatedPrice;
}


/* Zoom area scrit */

var maxClicksAddMoreSize = 6;
var maxClicksSubtractMoreSize = -2;

var countClicksToHiddenItems = 3;
var defaultSizeWindow = 0;

var countClicksChangeSizeItems = 0;
var namesItemToHidden = ['breffBig'];

function startWindow() {
    let currentDefaultWindowSize = getCurrentWindowSizeValue();
    if (defaultSizeWindow == 0)
        defaultSizeWindow = currentDefaultWindowSize;
}

function getCurrentWindowSizeValue() {
    let myWindowSize = window.getComputedStyle(document.body).fontSize;
    let currentDefaultWindowSize = parseInt(myWindowSize.replace('px', ''));

    return currentDefaultWindowSize;
}

function changeSizeAllItems(isAddMoreSize) {
    let currentWindowSize = getCurrentWindowSizeValue();
    if (isAddMoreSize && isValidAddMoreSize()) {
        countClicksChangeSizeItems++;
        document.body.style.fontSize = (currentWindowSize + 3) + 'px';
    }
    if (!isAddMoreSize && isValidSubtractMoreSize()) {
        countClicksChangeSizeItems--;
        document.body.style.fontSize = (currentWindowSize - 3) + 'px';
    }
    actionAboutShowableItems(namesItemToHidden, countClicksChangeSizeItems, countClicksToHiddenItems);
}

function isValidAddMoreSize() {
    return countClicksChangeSizeItems < maxClicksAddMoreSize;
}

function isValidSubtractMoreSize() {
    return countClicksChangeSizeItems > maxClicksSubtractMoreSize;
}

function resetDocumentSizes() {
    document.body.style.fontSize = defaultSizeWindow + 'px';
    countClicksChangeSizeItems = 0;
    showHiddenItems(namesItemToHidden, 'visible');
}

function actionAboutShowableItems(namesItemToHidden, currentCount, maxClicksToHiddenItems) {
    let show = 'visible';
    let notShow = 'hidden';
    let action = currentCount >= maxClicksToHiddenItems ? notShow : show;
    showHiddenItems(namesItemToHidden, action);
}

function showHiddenItems(namesItemToHidden, action) {
    for (x = 0; namesItemToHidden.length > x; x++) {
        let myBigBreff = document.getElementById(namesItemToHidden[x]);
        myBigBreff.style.visibility = action;
    }
}
