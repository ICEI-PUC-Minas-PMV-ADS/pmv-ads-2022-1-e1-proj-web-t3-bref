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
        capacity: Number.parseFloat(params.get("capacity"))
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
        r.name.toUpperCase().includes(filter.name.toUpperCase())
        && (Number.isNaN(filter.capacity) || r.capacity <= filter.capacity));

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

    while (repetitions <= averagePrice) {
        formatedPrice = formatedPrice + "$";
        repetitions++;
    }

    return formatedPrice;
}
