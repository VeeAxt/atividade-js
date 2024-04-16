function vogalConsoante (){
    const vogais = ["a", "e", "i", "o", "u"];
    const consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    
    const letra = prompt("Escreva uma letra: ")

    if (vogais.includes(letra.toLowerCase())) {
        document.write(`${letra} é uma vogal`)
        return
    }

    if (consoantes.includes(letra.toLowerCase())) {
        document.write(`${letra} é uma consoante`)
        return
    }

    document.write(`${letra} não é uma consoante e nem uma vogal`)
}