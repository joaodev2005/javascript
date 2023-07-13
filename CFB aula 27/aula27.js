//  FUNÇÕES GERADORAS


function* contador(){
    let i = 1
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}

const its = contador()
for(let c of its){
    console.log(c)
}




// function* contador(){
//     let b = 0
//     while(true){
//         yield b++
//     }
// }
// const itc = contador()
// for (let i = 0; i < 10; i++){
//     console.log(itc.next().value)
// }




// function* perguntas(){
//     const nome = yield 'Qual seu nome?'
//     const jogo = yield 'Seu jogo favorito'
//     return `Seu nome e ${nome}, e seu jogo favorito é ${jogo}`
// }

// const questionario = perguntas()
// console.log(questionario.next().value)
// console.log(questionario.next('João').value)
// console.log(questionario.next('The Last of Us PART II').value)





// function* cores(){
//     yield 'Vermelho'
//     yield 'Verde'
//     yield 'Azul'
//     yield 'Roxo'
// }

// let cor = cores()

// console.log(cor.next().value) // vermelho
// console.log(cor.next().value) // verde
// console.log(cor.next().value) // azul
// console.log(cor.next().value) // roxo