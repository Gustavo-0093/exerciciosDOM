function pegarArray(id) {
    return document.getElementById(id).value.split(",").map(item => item.trim());
}


function exercicio1() {
    let nomes = pegarArray("nomesA");

    let resultado = nomes.filter(nome =>
        nome.toUpperCase().startsWith("A")
    );

    document.getElementById("resultado1").textContent =
        resultado.length > 0
            ? "Nomes encontrados: " + resultado.join(", ")
            : "Nenhum nome começa com A.";
}


function exercicio2() {
    let notas = pegarArray("notas7").map(Number);

    let resultado = notas.filter(nota => nota >= 7);

    document.getElementById("resultado2").textContent =
        resultado.length > 0
            ? "Notas: " + resultado.join(", ")
            : "Nenhuma nota é maior ou igual a 7.";
}


function exercicio3() {
    let numeros = pegarArray("multiplos3").map(Number);

    let resultado = numeros.filter(numero => numero % 3 === 0);

    document.getElementById("resultado3").textContent =
        resultado.length > 0
            ? "Múltiplos de 3: " + resultado.join(", ")
            : "Nenhum múltiplo de 3 encontrado.";
}


function exercicio4() {
    let numeros = pegarArray("negativos").map(Number);

    let resultado = numeros.find(numero => numero < 0);

    document.getElementById("resultado4").textContent =
        resultado !== undefined
            ? "Primeiro número negativo: " + resultado
            : "Nenhum número negativo encontrado.";
}


function exercicio5() {
    let precos = pegarArray("precos100").map(Number);

    let resultado = precos.find(preco => preco > 100);

    document.getElementById("resultado5").textContent =
        resultado !== undefined
            ? "Primeiro preço acima de 100: R$ " + resultado.toFixed(2)
            : "Nenhum preço acima de 100.";
}


function exercicio6() {
    let palavras = pegarArray("palavrasZ");

    let resultado = palavras.find(palavra =>
        palavra.toLowerCase().includes("z")
    );

    document.getElementById("resultado6").textContent =
        resultado !== undefined
            ? "Primeira palavra com Z: " + resultado
            : "Nenhuma palavra possui a letra Z.";
}


function exercicio7() {
    let idades = pegarArray("idades").map(Number);

    let soma = idades.reduce((total, idade) => total + idade, 0);

    let media = soma / idades.length;

    document.getElementById("resultado7").textContent =
        "Média das idades: " + media.toFixed(2);
}


function exercicio8() {
    let numeros = pegarArray("produto").map(Number);

    let resultado = numeros.reduce(
        (total, numero) => total * numero,
        1
    );

    document.getElementById("resultado8").textContent =
        "Produto dos números: " + resultado;
}


function exercicio9() {
    let nomes = pegarArray("nomesReduce");

    let resultado = nomes.reduce(
        (texto, nome) => texto + nome + " ",
        ""
    );

    document.getElementById("resultado9").textContent =
        "Nomes juntos: " + resultado.trim();
}


function exercicio10() {
    let frutas = pegarArray("frutas");

    let resultado = frutas.map(fruta =>
        "Eu gosto de " + fruta
    );

    document.getElementById("resultado10").innerHTML =
        resultado.join("<br>");
}


function exercicio11() {
    let precos = pegarArray("precosDesconto").map(Number);

    let resultado = precos.map(preco =>
        preco * 0.9
    );

    document.getElementById("resultado11").innerHTML =
        resultado
            .map(preco => "Preço com desconto: R$ " + preco.toFixed(2))
            .join("<br>");
}


function exercicio12() {
    let notas = pegarArray("notasAluno").map(Number);

    let resultado = notas.map(nota =>
        nota >= 7 ? "Aprovado" : "Reprovado"
    );

    document.getElementById("resultado12").innerHTML =
        resultado.join("<br>");
}