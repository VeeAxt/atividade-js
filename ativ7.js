// Sabores de Picolé
// a. Chocolate custa R$:1,50
// b. Morango custa R$:2,50
// c. Creme custa R$:2,50
// d. Manga custa R$:3,20
// e. Melancia custa R$:3,40
// f. Vanilla Ice custa R$:3,00
// g. Céu Azul custa R$:3,60
// h. Brownie custa R$:4,00
// i. Hawaiano custa R$:5,00

function picotelaria() {

    const sabores = {
        "Chocolate": 1.50,
        "Morango": 2.50,
        "Creme": 2.50,
        "Manga": 3.20,
        "Melancia": 3.40,
        "Vanilla Ice": 3.00,
        "Céu Azul": 3.60,
        "Brownie": 4.00,
        "Hawaiano": 5.00
    }

    document.write('<div id="picotelaria">Escolha um sabor de sorvete </div>')

    const select = document.createElement("select")
    const html = document.querySelector('#picotelaria')

    for (const sabor in sabores) {
        const option = document.createElement("option")

        option.innerText = sabor
        option.value = sabores[sabor]

        select.appendChild(option)
    }

    const button = document.createElement('button')
    button.innerText = "Escolho esse"
    button.addEventListener('click', () => {
        const preco = Number(select.value)

        const texto = document.createElement("p")
        texto.innerText = `O preço será de R$${(preco)}`

        html.appendChild(texto)
    })

    html.appendChild(select)
    html.appendChild(button)
}