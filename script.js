// Selecciona el botón que activa el cambio de tema
const themeToggle = document.querySelector(".theme-toggle");
const promptForm = document.querySelector(".prompt-form");
const promptInput = document.querySelector(".prompt-input");
const promptBtn = document.querySelector(".prompt-btn");
const modelSelect = document.getElementById("model-select");
const countSelect = document.getElementById("count-select");
const ratioSelect = document.getElementById("ratio-select");
const gridGallery = document.querySelector(".galeryGrid");

const examplePrompts = [
  "A magic forest with glowing plants and fairy homes among giant mushrooms",
  "An old steampunk airship floating through golden clouds at sunset",
  "A future Mars colony with glass domes and gardens against red mountains",
  "A dragon sleeping on gold coins in a crystal cave",
  "An underwater kingdom with merpeople and glowing coral buildings",
  "A floating island with waterfalls pouring into clouds below",
  "A witch's cottage in fall with magic herbs in the garden",
  "A robot painting in a sunny studio with art supplies around it",
  "A magical library with floating glowing books and spiral staircases",
  "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
  "A cosmic beach with glowing sand and an aurora in the night sky",
  "A medieval marketplace with colorful tents and street performers",
  "A cyberpunk city with neon signs and flying cars at night",
  "A peaceful bamboo forest with a hidden ancient temple",
  "A giant turtle carrying a village on its back in the ocean",
];

// colocar el tema basado en las preferencias del sistema
(() => {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const isDarkTheme =
    savedTheme === "dark" || (!savedTheme && systemPrefersDark);
  document.body.classList.toggle("dark-theme", isDarkTheme);
  themeToggle.querySelector("i").className = isDarkTheme
    ? "fa-solid fa-sun"
    : "fa-solid fa-moon";
})();

// Función para alternar entre modo claro y oscuro
const toggleTheme = () => {
  // Alterna la clase "dark-theme" en el <body>
  const isDarkTheme = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");

  // Cambia el ícono dentro del botón según el tema activo
  themeToggle.querySelector("i").className = isDarkTheme
    ? "fa-solid fa-sun" // Si es oscuro, muestra el ícono de sol
    : "fa-solid fa-moon"; // Si es claro, muestra el ícono de luna
};

// Llenar el input con ejemplos random
promptBtn.addEventListener("click", () => {
  const prompt =
    examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
  promptInput.value = prompt;
  promptInput.focus();
});

//
const createImageCards = (selectedModel, imageCount, aspectRatio, promptText) => {
  // Limpia la galería antes de agregar nuevas imágenes
  gridGallery.innerHTML = "";

  for (let i = 0; i < imageCount; i++) {
    // Crear la estructura HTML de cada imagen
    const imageCard = `
      <div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${aspectRatio}">
        <div class="status-container">
          <div class="spinner"></div>
          <i class="fa-solid fa-triangle-exclamation"></i>
          <p class="status-text">Generando imagen ${i + 1} de ${imageCount}...</p>
        </div>
        <img src="test.png" class="result-img" />
      </div>`;

    // Agregar la tarjeta de imagen al contenedor de la galería
    gridGallery.innerHTML += imageCard;
  }
};

// Función para manejar el envío del formulario
const handleFormSubmit = (e) => {
  e.preventDefault();

  const selectedModel = modelSelect.value;
  const imageCount = parseInt(countSelect.value) || 1;
  const aspectRatio = ratioSelect.value || "1/1";
  const promptText = promptInput.value.trim();

  // Llamamos a la función corregida
  createImageCards(selectedModel, imageCount, aspectRatio, promptText);
};

// Agregar el evento de envío del formulario
promptForm.addEventListener("submit", handleFormSubmit);

// Agrega el evento de clic al botón para activar el cambio de tema
themeToggle.addEventListener("click", toggleTheme);
