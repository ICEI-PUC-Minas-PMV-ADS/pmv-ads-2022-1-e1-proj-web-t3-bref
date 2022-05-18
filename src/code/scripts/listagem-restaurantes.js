// Função que recebe como parâmetro uma página qualquer e faz o redirecionamento.
function openPage(page) {
    window.location = page;
}

window.onload = function () {
    loadRestaurants();
}

function loadRestaurants() {
    console.log("Chamou a função loadRestaurants");
    let allCardsHtml = "";

    for (let index = 0; index < restaurants.length; index++) {
        const restaurant = restaurants[index];
        const cardHtml = restaurantCardHtml(restaurant);

        allCardsHtml = allCardsHtml + cardHtml;
    }

    let restaurantListElement = document.getElementById('restaurant-list');
    restaurantListElement.innerHTML = allCardsHtml;
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

const restaurants = [
    {
        name: "MC Donalds",
        averagePrice: 2,
        type: "Fast-food",
        capacity: 60,
        waitingTimeMinutes: 15,
        paymentMethods: ["Cartão de Crédito", "Cartão de Débito", "PIX", "Cartão Refeição", "Dinheiro"],
        image: "place6.jpg"
    },
    {
        name: "Burger King",
        averagePrice: 2,
        type: "Fast-food",
        capacity: 90,
        waitingTimeMinutes: 40,
        paymentMethods: ["Cartão de Crédito", "Cartão de Débito", "PIX", "Cartão Refeição", "Dinheiro"],
        image: "place7.jpg"
    },
    {
        name: "Madero",
        averagePrice: 5,
        type: "Australiano",
        capacity: 30,
        waitingTimeMinutes: 60,
        paymentMethods: ["Cartão de Crédito", "Cartão de Débito", "PIX", "Cartão Refeição", "Dinheiro"],
        image: "place5.jpg"
    },
    {
        name: "Fujiyama",
        averagePrice: 1,
        type: "Pastelaria",
        capacity: 20,
        waitingTimeMinutes: 15,
        paymentMethods: ["Cartão de Crédito", "Cartão de Débito", "Dinheiro"],
        image: "place8.jpg"
    },
    {
        name: "Spoleto",
        averagePrice: 2,
        type: "Brasileiro",
        capacity: 10,
        waitingTimeMinutes: 20,
        paymentMethods: ["Cartão de Crédito", "Cartão de Débito", "PIX", "Cartão Refeição", "Dinheiro"],
        image: "place9.jpg"
    },
    {
        name: "Sushi Japa Chan",
        averagePrice: 4,
        type: "Japonese",
        capacity: 30,
        waitingTimeMinutes: 5,
        paymentMethods: ["Cartão de Crédito", "Cartão de Débito", "PIX", "Cartão Refeição"],
        image: "place10.jpg"
    }
]