import recipes from "./recipes.mjs";

const container = document.getElementById("recipeContainer");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

function buildStars(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

function renderRecipes(list) {
    container.innerHTML = "";

    list.forEach(recipe => {
        const card = document.createElement("article");
        card.classList.add("recipe");

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
            <div class="recipe-info">
                <span class="tag">${recipe.tags[0]}</span>
                <h2 class="recipe-title">${recipe.name}</h2>
                ${buildStars(recipe.rating)}
                <p class="recipe-description">${recipe.description}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

renderRecipes(recipes);

/* SEARCH FUNCTIONALITY */
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const term = searchInput.value.toLowerCase();

    const filtered = recipes.filter(r =>
        r.name.toLowerCase().includes(term) ||
        r.tags.some(tag => tag.toLowerCase().includes(term))
    );

    renderRecipes(filtered);
});
