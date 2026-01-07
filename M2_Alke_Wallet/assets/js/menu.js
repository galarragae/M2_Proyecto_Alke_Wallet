// Con esto capturo cada botón

const depositBtn = document.getElementById("depositButton");
const sendMoneyBtn = document.getElementById("sendMoneyButton");
const transactionsBtn = document.getElementById("transactionsButton");

// Ahora agrego el evento "click"
// (Previamente cambié los botones de anchor a button sencillos
// para agregar el evento con JS)

depositBtn.addEventListener("click", function(){
  alert('Usted será redirigido a la página de Depósitos');
  window.location.href = "deposit.html";
})

sendMoneyBtn.addEventListener("click", function(){
  alert('Usted será redirigido a la página de Enviar Dinero');
  window.location.href = "sendmoney.html";
})

transactionsBtn.addEventListener("click", function(){
  alert('Usted será redirigido a la página de Últimos Movimientos');
  window.location.href = "transactions.html";
})