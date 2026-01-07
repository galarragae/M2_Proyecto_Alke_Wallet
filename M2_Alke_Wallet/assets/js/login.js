// Por defecto, un formulario recarga la página al enviarse
// Queremos evitar eso para validar con JavaScript

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const emailIngresado = document.getElementById("loginEmail").value; // obtener el correo ingresado por usuario
  const passwordIngresada = document.getElementById("loginPassword").value; // obtener la contraseña ingresada por usuario

  const emailCorrecto = "usuario@ejemplo.com"; // credenciales válidas simuladas!!!
  const passwordCorrecta = "1234";

  if (emailIngresado === emailCorrecto && passwordIngresada === passwordCorrecta){
    alert('Inicio de sesión exitoso');
    window.location.href = "menu.html"; // para redirigir al Menú Principal
  } else {
    alert('Error en las credenciales. Intente nuevamente.');
  }
});