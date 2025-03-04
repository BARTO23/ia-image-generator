// Selecciona el botón que activa el cambio de tema
const themeToggle = document.querySelector(".theme-toggle");

// Función para alternar entre modo claro y oscuro
const toggleTheme = () => {
  // Alterna la clase "dark-theme" en el <body>
  const isDarkTheme = document.body.classList.toggle("dark-theme");

  // Cambia el ícono dentro del botón según el tema activo
  themeToggle.querySelector("i").className = isDarkTheme 
    ? "fa-solid fa-sun"  // Si es oscuro, muestra el ícono de sol
    : "fa-solid fa-moon"; // Si es claro, muestra el ícono de luna
};

// Agrega el evento de clic al botón para activar el cambio de tema
themeToggle.addEventListener("click", toggleTheme);
