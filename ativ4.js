function decrescente() {
    const numeros = []

    for (let i = 0; i < 4; i++) {
        const input = prompt("Escreva 1 número:")
        numeros.push(Number(input))
    }

    numeros.sort((a, b) => b - a)

    numeros.forEach(numero => {
        document.write(numero)
        document.write("<br>")
    })
}