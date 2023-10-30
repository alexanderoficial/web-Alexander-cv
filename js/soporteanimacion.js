document.addEventListener("DOMContentLoaded", function () {
    const animationContainer = document.querySelector(".animation-container");
    const shape = document.querySelector(".shape");

    shape.addEventListener("animationend", () => {
        // Esperar un momento antes de ocultar el elemento
        setTimeout(() => {
            animationContainer.style.display = "none";
        }, 5000); // Ajusta el tiempo según tus necesidades
    });
});
