document.addEventListener("DOMContentLoaded", function () {
    const heroesJson = "storage/json/marvel.json";

    // Función para obtener los héroes desde el archivo JSON
    function getHeroes() {
        return fetch(heroesJson)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .catch(error => console.error("Error fetching heroes:", error));
    }

    // Función para mostrar las tarjetas de héroes
    function displayHeroes(heroes) {
        const gridContainer = document.getElementById("grid-container");
        heroes.forEach((hero, index) => {
            const gridItem = createGridItem(hero, index);
            gridContainer.appendChild(gridItem);
        });
    }

    // Función para crear una tarjeta de héroe
    function createGridItem(hero, index) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        const modalId = `Irventana${index + 1}`;

        gridItem.innerHTML = `
            <div class="foto">
                <img src="${hero.picture}" alt="${hero.name}">
            </div>
            <div class="detalles">
                <p class="titulo">${hero.name}</p>
                <div class="boton-ver">
                    <a href="#${modalId}" class="text-boton"><div>Ver</div></a>
                </div>
            </div>
            <div id="${modalId}" class="modal">
                <div class="ventana ventana1">
                    <div class="foto-det"><img src="${hero.picture}" alt="${hero.name}"></div>
                    <div class="cont-det">
                        <div class="titulo-det" id="detallesContainer" style=" background-color: #500a0a;">${hero.name}</div>
                        <div class="titulo-det2" id="detallesContainer">${hero.about}</div>
                        <a href="#cerrar" class="cerrar1"><b style="color: weith; font-size: 20px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Regresar</b></a>
                    </div>
                </div>
            </div>
        `;
        return gridItem;
    }

    // Función para filtrar los héroes según el nombre
    function filterHeroes(heroes, searchText) {
        return heroes.filter(hero => hero.name.toLowerCase().includes(searchText.toLowerCase()));
    }

    // Función para mostrar las tarjetas de héroes filtradas
    function displayFilteredHeroes(heroes) {
        const gridContainer = document.getElementById("grid-container");
        gridContainer.innerHTML = '';

        heroes.forEach((hero, index) => {
            const gridItem = createGridItem(hero, index);
            gridContainer.appendChild(gridItem);
        });
    }

    // Escuchar el evento de entrada en el elemento de búsqueda
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", function () {
        const searchText = this.value;
        getHeroes().then(heroes => {
            const filteredHeroes = filterHeroes(heroes, searchText);
            displayFilteredHeroes(filteredHeroes);
        });
    });

    // Llamar a la función para mostrar todas las tarjetas al cargar la página
    getHeroes().then(displayHeroes);
});




