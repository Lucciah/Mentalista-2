var numeroSecreto = parseInt(Math.random() * 51);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 50 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 50";
  } else {
    elementoResultado.innerHTML = "Errou";
  }
}