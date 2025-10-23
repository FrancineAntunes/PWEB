function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Magreza (Grau 0)";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal (Grau 0)";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso (Grau I)";
    } else if (imc >= 30 && imc <= 39.9) {
        return "Obesidade (Grau II)";
    } else {
        return "Obesidade Grave (Grau III)";
    }
}

function calcular() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let campoIMC = document.getElementById("imc");
    let campoClassificacao = document.getElementById("classificacao");

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores válidos para peso e altura!");
        campoIMC.value = "";
        campoClassificacao.value = "";
        return;
    }

    let imc = calcularIMC(peso, altura);
    let classificacao = classificarIMC(imc);

    campoIMC.value = imc.toFixed(2);
    campoClassificacao.value = classificacao;
}

function executarIMC() {
    let peso = Number(prompt("Digite seu peso (em kg):"));
    let altura = Number(prompt("Digite sua altura (em metros, use ponto):"));

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores válidos!");
        return;
    }

    let imc = calcularIMC(peso, altura);
    let classificacao = classificarIMC(imc);

    alert(
        "Seu IMC é: " + imc.toFixed(2) + "\n" +
        "Classificação: " + classificacao
    );
}