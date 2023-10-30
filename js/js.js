// Obtén todos los botones con la clase "botones"
const buttons = document.querySelectorAll(".botones");

// Recorre los botones y agrega eventos "mouseover" y "mouseout" a cada uno
buttons.forEach((button) => {
    const textoOculto = button.querySelector(".texto-oculto");

    // Agrega un evento "mouseover" para mostrar el texto
    button.addEventListener("mouseover", function () {
        textoOculto.style.display = "inline"; // Muestra el texto
    });

    // Agrega un evento "mouseout" para ocultar el texto nuevamente
    button.addEventListener("mouseout", function () {
        textoOculto.style.display = "none"; // Oculta el texto
    });
});
