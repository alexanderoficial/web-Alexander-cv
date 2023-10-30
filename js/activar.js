// Obtén el botón y el cuerpo del documento
const botonModoOscuro = document.getElementById("modoOscuro");
const body = document.body;

// Escucha el evento de clic en el botón
botonModoOscuro.addEventListener("click", () => {
    // Alternar la clase "modo-oscuro" en el cuerpo
    body.classList.toggle("modo-oscuro");
});


