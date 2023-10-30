document.addEventListener("DOMContentLoaded", function() {
    const enlaceVerMas = document.querySelector(".vermasderecha a");
    const contenidoPrueba = document.getElementById("derecha");

    let visible = false; // Variable para rastrear la visibilidad del contenido

    enlaceVerMas.addEventListener("click", function(event) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
        
        if (visible) {
            contenidoPrueba.style.display = "none"; // Oculta el contenido
        } else {
            contenidoPrueba.style.display = "block"; // Muestra el contenido
        }

        visible = !visible; // Cambia el estado de visibilidad
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const enlaceVerMas = document.querySelector(".vermasmedio a");
    const contenidoPrueba = document.getElementById("centro");

    let visible = false; // Variable para rastrear la visibilidad del contenido

    enlaceVerMas.addEventListener("click", function(event) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
        
        if (visible) {
            contenidoPrueba.style.display = "none"; // Oculta el contenido
        } else {
            contenidoPrueba.style.display = "block"; // Muestra el contenido
        }

        visible = !visible; // Cambia el estado de visibilidad
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const enlaceVerMas = document.querySelector(".vermas a");
    const contenidoPrueba = document.getElementById("vermasuno");

    let visible = false; // Variable para rastrear la visibilidad del contenido

    enlaceVerMas.addEventListener("click", function(event) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
        
        if (visible) {
            contenidoPrueba.style.display = "none"; // Oculta el contenido
        } else {
            contenidoPrueba.style.display = "block"; // Muestra el contenido
        }

        visible = !visible; // Cambia el estado de visibilidad
    });
});
