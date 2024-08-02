function resultado() {
    var nome = document.getElementById("nome").value;
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let resultado;
    let situacao;
    var tabela_resultado = document.querySelector("#tabela_resultado");

    resultado = peso / (altura * altura);

    if (resultado < 18.5) {
        situacao = "Magreza";
    } else if (resultado >= 18.5 && resultado < 24.9) {
        situacao = "Normal";
    } else if (resultado >= 25 && resultado < 29.9) {
        situacao = "Sobrepeso";
    } else if (resultado >= 30 && resultado < 34.9) {
        situacao = "Obesidade Grau 1";
    } else if (resultado >= 35 && resultado < 39.9) {
        situacao = "Obesidade Grau 2";
    } else {
        situacao = "Obesidade Grau 3";
    }


    tabela_resultado.innerHTML += `

    <table border="1" id="tabela_resultado">

            <tbody>
             <tr>
                    <td>${resultado.toFixed(2)}</td>
                    <td>${situacao}</td>
                
                </tr>
            </tbody>
    `
}