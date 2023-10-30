// Función para mostrar las letras una por una
function mostrarLetras(elemento) {
  var texto = elemento.textContent;
  elemento.textContent = ""; // Vacía el contenido original del elemento
  for (var i = 0; i < texto.length; i++) {
    (function(i) {
      setTimeout(function() {
        elemento.textContent += texto[i];
      }, 300 * i); // Ajusta la velocidad aquí (100ms = 0.1 segundos)
    })(i);
  }
}

// Espera a que se cargue todo el contenido de la página
window.addEventListener("load", function() {
  var h1Element = document.getElementById("alexander");
  mostrarLetras(h1Element);
});


/* aparecen las letras debajo de Alexander Herrera López */

// Función para alternar la visibilidad de las palabras
function alternarPalabras() {
  var palabras = document.querySelectorAll("#palabras");
  var indiceActual = 0;

  // Oculta todas las palabras excepto la primera
  for (var i = 1; i < palabras.length; i++) {
    palabras[i].style.display = "none";
  }

  setInterval(function() {
    palabras[indiceActual].style.display = "none"; // Oculta la palabra actual
    indiceActual = (indiceActual + 1) % palabras.length; // Cambia al siguiente índice circularmente
    palabras[indiceActual].style.display = "block"; // Muestra la siguiente palabra
  }, 4000); // Cambia cada 5 segundos (5000ms)
}

// Espera a que se cargue todo el contenido de la página
window.addEventListener("load", function() {
  alternarPalabras();
});
