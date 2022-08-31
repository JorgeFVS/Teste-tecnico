const readlineSync = require('readline-sync')

let name = readlineSync.question("Olá bem vindo ao jogo de dados, por favor digite o seu nome: ")

if (!name) {
    return console.log("Entrada inválida, o campo nome não pode estar vazio, vamos começar de novo.")
}

const numeroDeDadosEscolhidoPeloUsuario = readlineSync.questionInt(`Vamos começar ${name}. Digite quantos dados você quer jogar: `);


const rolarDados = (numeroDeDados) => {

    const dados = [
       `-----
        |   |
        | o |
        |   |
        -----`,
       `-----
        |o  |
        |   |
        |  o|
        -----`,
       `-----
        |o  |
        | o |
        |  o|
        -----`,
       `-----
        |o o|
        |   |
        |o o|
        -----`,
       `-----
        |o o|
        | o |
        |o o|
        -----`,
       `-----
        |o o|
        |o o|
        |o o|
        -----`
    ]


    for (i = 0; i < numeroDeDados; i++) {

        const sorteio = Math.floor(Math.random() * 6)


        console.log(`Dado: ${i + 1} caiu no número:
        ${dados[sorteio]}`)

    }

    
}


console.log(rolarDados(numeroDeDadosEscolhidoPeloUsuario))