// Tomo el form por su id y "escucho" el evento submit (primer parámetro), function (anónima, segundo parámetro)
// y "event" es un objeto automático, representa el evento que acaba de ocurrir (el nombre es libre, el concepto no)

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); //para evitar enviar el formulario y recargar la pág automáticamente

  // obtener datos ingresados por usuario // .trim() elimina espacios en blanco al inicio y al final
  const emailIngresado = document.getElementById("loginEmail").value.trim();
  const passwordIngresada = document
    .getElementById("loginPassword")
    .value.trim();

  // credenciales válidas simuladas
  const emailCorrecto = "usuario@ejemplo.com";
  const passwordCorrecta = "1234";

  // preparar el modal (Bootstrap) del login
  const modal = new bootstrap.Modal(document.getElementById("loginModal"));
  const modalMessage = document.getElementById("loginModalMessage");

  if (emailIngresado === emailCorrecto && passwordIngresada === passwordCorrecta) {
    modalMessage.textContent = "Has iniciado sesión correctamente"; // mensaje dinámico
    modal.show();

    setTimeout(function () {
      modal.hide();
      window.location.href = "menu.html";
    }, 2000);

  } else if (emailIngresado === "" || passwordIngresada === "") {
    modalMessage.textContent =
      "Debes ingresar un email y contraseña para iniciar sesión";
    modal.show();

  } else {
    modalMessage.textContent =
      "Email y/o contraseña no válidos. Intenta nuevamente";
    modal.show();
  }
});
