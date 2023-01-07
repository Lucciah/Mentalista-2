var numeroSecreto = parseInt(Math.random() * 13);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 12 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 12";
  } else {
    elementoResultado.innerHTML = "Errou";
  }
}
