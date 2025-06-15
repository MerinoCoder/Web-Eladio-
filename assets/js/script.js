// Espera que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones de "ver más"
  const toggleButtons = document.querySelectorAll(".toggle-info");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const info = button.nextElementSibling;

      // Toggle de clase para animar
      info.classList.toggle("active");

      // Cambia el texto del botón si quieres (opcional)
      button.textContent = info.classList.contains("active") ? "Ocultar info" : "Ver más";
    });
  });
});
