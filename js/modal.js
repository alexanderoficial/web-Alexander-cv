document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");
    var cerrarModal = document.getElementById("cerrarmodal");

    // Función para mostrar el modal en pantallas más pequeñas (menos de 800px de ancho).
    function showOnSmallScreens() {
        if (window.innerWidth < 1000) {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }

    // Función para cerrar el modal al hacer clic en "cerrar modal".
    function closeModal() {
        modal.style.display = "none";
    }

    // Ejecutar la función cuando la página se carga y cuando se redimensiona la ventana.
    showOnSmallScreens();
    window.addEventListener("resize", showOnSmallScreens);

    // Agregar evento clic para cerrar el modal.
    cerrarModal.addEventListener("click", closeModal);
});




/*  

document.addEventListener("DOMContentLoaded", function () {
    var isAndroidOrTablet = /Android|tablet/i.test(navigator.userAgent);
    var modal = document.getElementById("modal");
    var cerrarModal = document.getElementById("cerrarmodal");

    if (isAndroidOrTablet) {
        modal.style.display = "block";  // Muestra el modal en dispositivos Android y tabletas.

        cerrarModal.addEventListener("click", function () {
            modal.style.display = "none";  // Oculta el modal al hacer clic en "cerrar modal".
        });
    } else {
        modal.style.display = "none";  // Oculta el modal en otros dispositivos.
    }
});
 */