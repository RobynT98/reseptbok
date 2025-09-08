async function loadRecipes() {
  const res = await fetch("recipes.json");
  const data = await res.json();

  const app = document.getElementById("app");
  app.innerHTML = "";

  for (const [category, recipes] of Object.entries(data)) {
    const section = document.createElement("section");
    section.className = "category";

    const h2 = document.createElement("h2");
    h2.textContent = category;
    section.appendChild(h2);

    recipes.forEach(r => {
      const div = document.createElement("div");
      div.className = "recipe";
      div.innerHTML = `
        <h3>${r.title}</h3>
        <strong>Ingredienser:</strong>
        <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <strong>Steg:</strong>
        <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
      `;
      section.appendChild(div);
    });

    app.appendChild(section);
  }
}

loadRecipes();