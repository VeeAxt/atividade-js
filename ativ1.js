function somarNumeros() {
    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseFloat(prompt("Digite um número (ou clique em 'Cancelar' para somar): "));
        if (!isNaN(numero)) {
            soma += numero;;
        } else {
            alert("Digite um número válido.");
        }

        continuar = confirm("Deseja continuar adicionando números?")
    }
    alert("A soma dos números é: " + soma);
}

somarNumeros();