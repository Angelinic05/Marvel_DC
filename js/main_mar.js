document.addEventListener("DOMContentLoaded", function () {
    const heroesJson = "storage/json/dc.json";

    
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

        heroes.forEach(hero => {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");

            
            gridItem.innerHTML = `
                <div class="foto">
                    <img src="${hero.picture}" alt="${hero.name}">
                </div>
                <div class="detalles">
                    <p class="titulo">${hero.name}</p>
                    <div class="boton-ver">
                    <a href="#Irventana1" class="text-boton"><div>Ver</div></a>
                    </div>
                </div>
            `;
            gridContainer.appendChild(gridItem);
        });
    }

    function displayDetalles(heroes) {
        const detallesContainer = document.getElementById(id="detallesContainer");

        heroes.forEach(hero => {
            const detallesItem = document.createElement("div");
            detallesItem.classList.add("detalles-item");

            
            detallesItem.innerHTML = `
                <span class="titulo-det">${hero.name}</span>
                <span class="titulo-det">${hero.about}</span>
            `;
            detallesContainer.appendChild(detallesItem);
        });
    }


    getHeroes().then(displayDetalles);
    getHeroes().then(displayHeroes);
});

