// Agregar un event listener para el botón "X"
document.getElementById("cerrarmodal").addEventListener("click", function() {
  // Obtener el elemento del modal
  var modal = document.getElementById("modal");

  // Verificar si el modal existe
  if (modal) {
    // Eliminar el modal (su elemento padre)
    modal.parentNode.removeChild(modal);
  }
});
