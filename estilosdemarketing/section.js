document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const seccion1 = document.getElementById("seccion1");
    const seccion2 = document.getElementById("seccion3");
    const seccion3 = document.getElementById("seccion2");

    function showSectionsWithZoom() {
        setTimeout(function() {
            seccion1.style.display = "block";
            seccion1.classList.add("zoom-effect");
        }, 0000); // Mostrar Sección 1 después de 2 segundos

        setTimeout(function() {
            seccion2.style.display = "block";
            seccion2.classList.add("zoom-effect");
        }, 2000); // Mostrar Sección 2 después de 4 segundos

        setTimeout(function() {
            seccion3.style.display = "block";
            seccion3.classList.add("zoom-effect");
        }, 3000); // Mostrar Sección 3 después de 5 segundos
    }

    // Mostrar las secciones con efecto de zoom después de cargar la página
    showSectionsWithZoom();
});
