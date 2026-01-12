$(document).ready(function () { // Espera a que todo el HTML esté cargado antes de ejecutar el script
  
  // Definir una función reutilizable para mostrar el modal
  function showMenuModal(message, redirectURL) {
    
    $("#menuModalMessage").text(message);// Cambiar el texto dentro del modal

    let modal = new bootstrap.Modal(document.getElementById("menuModal")); // Crear y mostrar el modal
    modal.show();

    setTimeout(function () { // Ocultar el modal y redirigir después de 2 segundos
      modal.hide();
      window.location.href = redirectURL; // OJO: aquí debe coincidir con el parámetro
    }, 2000);
  }

  // Botón Depositar
  $("#depositButton").on("click", function () {
    showMenuModal(
      "Usted será redirigido a la página de Depósitos",
      "deposit.html"
    );
  });

  // Botón Enviar Dinero
  $("#sendMoneyButton").on("click", function () {
    showMenuModal(
      "Usted será redirigido a la página de Enviar Dinero",
      "sendmoney.html"
    );
  });

  // Botón Últimos Movimientos
  $("#transactionsButton").on("click", function () {
    showMenuModal(
      "Usted será redirigido a la página de Últimos Movimientos",
      "transactions.html"
    );
  });
});