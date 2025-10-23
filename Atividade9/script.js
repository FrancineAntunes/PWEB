function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}

function ordenarNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

function ehPalindromo(texto) {
    let palavra = texto.toUpperCase();
    let reverso = palavra.split('').reverse().join('');
    return palavra === reverso;
}

function tipoTriangulo(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Os valores não formam um triângulo.";
    } else if (a === b && b === c) {
        return "Triângulo Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Triângulo Isósceles";
    } else {
        return "Triângulo Escaleno";
    }
}


function executarMaiorNumero() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o terceiro número:"));

    let resultado = maiorNumero(n1, n2, n3);
    alert("O maior número é: " + resultado);
}

function executarOrdenarNumeros() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o terceiro número:"));

    let resultado = ordenarNumeros(n1, n2, n3);
    alert("Os números em ordem crescente são: " + resultado.join(", "));
}

function executarEhPalindromo() {
    let texto = prompt("Digite uma palavra para verificar se é palíndromo:");
    if (texto === null || texto.trim() === "") {
        alert("Por favor, digite uma palavra válida!");
        return;
    }

    let resultado = ehPalindromo(texto);
    if (resultado) {
        alert(`"${texto}" É um palíndromo!`);
    } else {
        alert(`"${texto}" NÃO é um palíndromo.`);
    }
}

function executarTipoTriangulo() {
    let a = Number(prompt("Digite o primeiro lado do triângulo:"));
    let b = Number(prompt("Digite o segundo lado do triângulo:"));
    let c = Number(prompt("Digite o terceiro lado do triângulo:"));

    let resultado = tipoTriangulo(a, b, c);
    alert(resultado);
}