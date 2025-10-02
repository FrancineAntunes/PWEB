function jogar(jogador) {
  const numeroAleatorio = Math.random(); // entre 0 e quase 1 (0.999...)
  let computador = "";

  // Divide o número em 3 faixas
  if (numeroAleatorio < 0.33) {
    computador = "pedra";
  } else if (numeroAleatorio < 0.66) {
    computador = "papel";
  } else {
    computador = "tesoura";
  }

  let resultado = "";
  let explicacao = "";

  if (jogador === computador) {
    resultado = "Empate!";
    explicacao = `Ambos escolheram ${jogador}.`;
  } else if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
  ) {
    resultado = "Você venceu!";
    explicacao = getExplicacao(jogador, computador);
  } else {
    resultado = "Você perdeu!";
    explicacao = getExplicacao(computador, jogador);
  }

  document.getElementById("resultado").innerHTML = `
    Você escolheu <strong>${jogador}</strong>.<br>
    O computador escolheu <strong>${computador}</strong>.<br><br>
    ${explicacao}<br>
    <strong>${resultado}</strong>
  `;
}

function getExplicacao(vencedor, perdedor) {
  if (vencedor === "pedra" && perdedor === "tesoura") {
    return "Pedra quebra tesoura.";
  } else if (vencedor === "tesoura" && perdedor === "papel") {
    return "Tesoura corta papel.";
  } else if (vencedor === "papel" && perdedor === "pedra") {
    return "Papel cobre a pedra.";
  }
  return "";
}