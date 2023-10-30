// Función para alternar la visibilidad de los botones
function alternarBotones() {
  var botones = document.getElementById("botonesOcultos");

  if (botones.style.display === "none" || botones.style.display === "") {
    botones.style.display = "block"; // Muestra los botones
  } else {
    botones.style.display = "none"; // Oculta los botones
  }
}

// Escucha el clic en el enlace "MAS"
document.getElementById("mostrarBotones").addEventListener("click", function(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  alternarBotones(); // Llama a la función para mostrar u ocultar los botones
});
