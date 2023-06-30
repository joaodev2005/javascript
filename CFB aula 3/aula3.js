"use stricts"


//CONST VALOR FIXO

const curso = 'java'

curso = HTML

console.log(curso)


//ATRIBUIR OUTRO VALOR 

let nome = 'joao'
nome = 'JS'
nome = 10
nome += 5

console.log(nome)



//ESCOPO DA LET

function teste() {
    let nome = 'joao'
    if(true) {
        console.log(`Dentro do IF do teste ${nome}`)
    }
    console.log(`Dentro do teste ${nome}`)
}
teste() //chamando a function

console.log(`Fora do teste ${nome}`)



