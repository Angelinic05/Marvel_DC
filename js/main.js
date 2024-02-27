document.addEventListener("DOMContentLoaded", function () {
    const heroesJson = "storage/json/heroes.json";

    
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
                        <p class="text-boton">ver</p>
                    </div>
                </div>
            `;

            gridContainer.appendChild(gridItem);
        });
    }

    
    getHeroes().then(displayHeroes);
});
