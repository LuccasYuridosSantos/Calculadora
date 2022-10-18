function limpar() {
    document.getElementById("saida").innerHTML = "0";
}

function removeZero() {
    var value = document.getElementById("saida").innerHTML;
    if (value == "0") {
        value = " "
        document.getElementById("saida").innerHTML = value;
    }
}

function porcentagem() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}

function adicionarNatela(valor) {
    removeZero()
    document.getElementById("saida").innerHTML += valor;
}

function resolver() {
    removeZero()
    var equation = document.getElementById("saida").innerHTML;
    var solved = eval(equation);
    document.getElementById('saida').innerHTML = solved;
}