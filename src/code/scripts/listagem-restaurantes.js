let restaurantsDatabase;

// Função que recebe como parâmetro uma página qualquer e faz o redirecionamento.
function openPage(page) {
    window.location = page;
}

window.onload = async function () {
    console.log("Chamou a função window.onload");
    resetFilter();
    restaurantsDatabase = await getRestaurantsFromDatabase();
    const filter = getSearchFilter();
    fillFilter(filter);
    loadRestaurants(filter);
    startWindow();
    configureInputs();
    setOutputValues();
    configureButtonClicks();
}

function configureButtonClicks() {
    const resetFilterButton = document.getElementById("reset-filter");
    resetFilterButton.onclick = function (event) {
        event.preventDefault();
        resetFilter();
    };
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

function fillFilter(filter) {
    const restaurantSearchInput = document.getElementById("restaurant-search-input");
    if (filter.name !== null && filter.name !== "")
        restaurantSearchInput.value = filter.name;

    const averagePriceInput = document.getElementById("average-price");
    if (Number.isNaN(filter.averagePrice) == false)
        averagePriceInput.value = filter.averagePrice;

    const capacityInput = document.getElementById("capacity");
    if (Number.isNaN(filter.capacity) == false)
        capacityInput.value = filter.capacity;

    const waitingTimeInput = document.getElementById("waiting-time");
    if (Number.isNaN(filter.waitingTimeMinutes) == false)
        waitingTimeInput.value = filter.waitingTimeMinutes;

    const restaurantTypeInput = document.getElementById("restaurant-type");
    if (filter.type !== null && filter.type !== "")
        restaurantTypeInput.value = filter.type;

    const paymentMethodsInput = document.getElementById("payment-methods");
    if (filter.paymentMethod !== null && filter.paymentMethod !== "")
        paymentMethodsInput.value = filter.paymentMethod;

    const cityInput = document.getElementById("city");
    if (filter.city !== null && filter.city !== "")
        cityInput.value = filter.city;
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
        (filter.name === null || filter.name === "" || normalizeText(r.name).includes(normalizeText(filter.name)))
        && (filter.type === null || filter.type === "" || r.type.toUpperCase() == filter.type.toUpperCase())
        && (Number.isNaN(filter.averagePrice) || r.averagePrice <= filter.averagePrice)
        && (Number.isNaN(filter.capacity) || r.capacity <= filter.capacity)
        && (filter.paymentMethod === null || filter.paymentMethod === "" || r.paymentMethods.includes(filter.paymentMethod))
        && (Number.isNaN(filter.waitingTimeMinutes) || r.waitingTimeMinutes <= filter.waitingTimeMinutes)
        && (filter.city === null || filter.city === "" || normalizeText(r.address.city).includes(normalizeText(filter.city)))
    );

    console.log("Filtrou o que?", filteredRestaurants);

    return filteredRestaurants;
}

function normalizeText(text) {
    const textWithoutAccents = text.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    const normalizedText = textWithoutAccents.toUpperCase();
    return normalizedText;
}

function restaurantCardHtml(restaurant) {
    console.log("Chamou a função restaurantCardHtml com o seguinte parâmetro", restaurant);

    const formatedPrice = formatPrice(restaurant.averagePrice)

    const cardHtml =

        `<div class="card" onclick="openPage('info-restaurante.html?id=${restaurant.id}')">

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
    const priceRange = getPriceRange(averagePrice);

    while (repetitions <= priceRange) {
        formatedPrice = formatedPrice + "$";
        repetitions++;
    }

    return formatedPrice;
}

function getPriceRange(averagePrice) {
    if (averagePrice <= 20)
        return 1;
    else if (averagePrice <= 40)
        return 2;
    else if (averagePrice <= 60)
        return 3;
    else if (averagePrice <= 80)
        return 4;
    else
        return 5;
}

function configureInputs() {
    const averagePriceInput = document.getElementById("average-price");
    averagePriceInput.oninput = setAveragePriceOutput;

    const capacityInput = document.getElementById("capacity");
    capacityInput.oninput = setCapacityOutput;

    const waitingTimeInput = document.getElementById("waiting-time");
    waitingTimeInput.oninput = setWaitingTimeOutput;
}

function setOutputValues() {
    console.log("Chamou a função setOutputValues");
    setAveragePriceOutput();
    setCapacityOutput();
    setWaitingTimeOutput();
}

function setAveragePriceOutput() {
    const averagePriceInput = document.getElementById("average-price");
    const averagePriceOutput = document.getElementById("average-price-output");
    averagePriceOutput.value = averagePriceInput.value;
}

function setCapacityOutput() {
    const capacityInput = document.getElementById("capacity");
    const capacityOutput = document.getElementById("capacity-output");
    capacityOutput.value = capacityInput.value;
}

function setWaitingTimeOutput() {
    const waitingTimeInput = document.getElementById("waiting-time");
    const waitingTimeOutput = document.getElementById("waiting-time-output");
    waitingTimeOutput.value = waitingTimeInput.value;
}


function resetFilter() {
    const restaurantSearchInput = document.getElementById("restaurant-search-input");
    restaurantSearchInput.value = "";

    const averagePriceInput = document.getElementById("average-price");
    averagePriceInput.min = 1;
    averagePriceInput.max = 100;
    averagePriceInput.value = 100;

    const capacityInput = document.getElementById("capacity");
    capacityInput.min = 0;
    capacityInput.max = 100;
    capacityInput.value = 100;

    const waitingTimeInput = document.getElementById("waiting-time");
    waitingTimeInput.min = 0;
    waitingTimeInput.max = 75;
    waitingTimeInput.value = 75;

    const restaurantTypeInput = document.getElementById("restaurant-type");
    restaurantTypeInput.value = "";

    const paymentMethodsInput = document.getElementById("payment-methods");
    paymentMethodsInput.value = "";

    const cityInput = document.getElementById("city");
    cityInput.value = "";

    setOutputValues();
}

/* Zoom area script */

var maxClicksAddMoreSize = 6;
var maxClicksSubtractMoreSize = -2;

var countClicksToHiddenItems = 3;
var defaultSizeWindow = 0;

var countClicksChangeSizeItems = 0;
var namesItemToHidden = ['breffBig'];

function startWindow() {
    console.log("Chamou a função startWindow ");

    setDefaultSizeWindow();

    let currentDefaultWindowSize = getCurrentWindowSizeValue();
    document.body.style.fontSize = currentDefaultWindowSize + 'px';
    console.log("Na função startWindow o valor de defaultSizeWindow é:", defaultSizeWindow);
}

function setDefaultSizeWindow() {
    console.log("Chamou a função setDefaultSizeWindow")
    if (defaultSizeWindow == 0) {
        let myWindowSize = window.getComputedStyle(document.body).fontSize;
        defaultSizeWindow = parseInt(myWindowSize.replace('px', ''));
        console.log("Na função startWindow o valor atribuido a defaultSizeWindow foi:", defaultSizeWindow);
    }
}

function getCurrentWindowSizeValue() {
    console.log("Chamou a função getCurrentWindowSizeValue");

    let fontSizeFromLocalStorage = localStorage.getItem("userFontSize");

    console.log("valor de fonte retornado do localStorage foi:", fontSizeFromLocalStorage);

    if (fontSizeFromLocalStorage !== null) {
        return Number.parseInt(fontSizeFromLocalStorage);
    }
    else {
        let myWindowSize = window.getComputedStyle(document.body).fontSize;
        let currentDefaultWindowSize = parseInt(myWindowSize.replace('px', ''));
        return currentDefaultWindowSize;
    }
}

function changeSizeAllItems(isAddMoreSize) {
    let currentWindowSize = getCurrentWindowSizeValue();

    if (isAddMoreSize && isValidAddMoreSize()) {
        countClicksChangeSizeItems++;
        const newFontSize = (currentWindowSize + 3);
        document.body.style.fontSize = newFontSize + 'px';
        setUserFontSize(newFontSize);
    }

    if (!isAddMoreSize && isValidSubtractMoreSize()) {
        countClicksChangeSizeItems--;
        const newFontSize = (currentWindowSize - 3);
        document.body.style.fontSize = newFontSize + 'px';
        setUserFontSize(newFontSize);
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
    setUserFontSize(defaultSizeWindow);
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

        if (myBigBreff !== null)
            myBigBreff.style.visibility = action;
    }
}

function setUserFontSize(fontSize) {
    localStorage.setItem("userFontSize", fontSize);
    console.log("Salvou userFontSize no localStorage com valor:", fontSize);
}