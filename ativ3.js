function dinheiro() {
    const numeroDeMeses = 12
    const estatos = {
        ganhos: 0,
        gastos: 0
    }

    for (let index = 0; index < numeroDeMeses; index++) {
        estatos.ganhos += Number(prompt(`Escreva os ganhos do ${index + 1}° mês`))
        estatos.gastos += Number(prompt(`Escreva os gastos do ${index + 1}° mês`))
    }

    document.write(`Ganhos do ano: ${estatos.ganhos} <br>`)
    document.write(`Gastos do ano: ${estatos.gastos} <br>`)

    if (estatos.ganhos > estatos.gastos) {
        document.write('A empresa teve lucro 😁')
        return
    }

    if (estatos.ganhos < estatos.gastos) {
        document.write('A empresa teve prejuízo 😢')
        return
    }
}