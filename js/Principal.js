
document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia a los botones e identificadores de los encabezados
    const buttons = document.querySelectorAll(".botones");
    
    // Agrega un controlador de eventos clic a cada botón
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Obtén el ID del botón clicado
            const targetId = this.id.replace("mostrar-", "");
            
            // Oculta todos los encabezados
            const headers = document.querySelectorAll("header");
            headers.forEach(function (header) {
                header.style.display = "none";
            });
            
            // Muestra el encabezado correspondiente
            const targetHeader = document.getElementById(targetId);
            if (targetHeader) {
                targetHeader.style.display = "block";
            }
        });
    });
});

