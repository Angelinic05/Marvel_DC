document.addEventListener("DOMContentLoaded", function () {
    const heroesJson = "storage/json/marvel.json";

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

    function displayHeroes(heroes) {
        const gridContainer = document.getElementById("grid-container");

        heroes.forEach((hero, index) => {
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
                    <div class="ventana">
                        <div class="foto-det"><img src="${hero.picture}" alt="${hero.name}"></div>
                        <div class="cont-det" id="detallesContainer"></div>
                        <a href="#cerrar" class="cerrar"><b style="color: black;">X</b></a>
                    </div>
                </div>
            `;
            gridContainer.appendChild(gridItem);
        });
    }

    getHeroes().then(displayHeroes);
});



