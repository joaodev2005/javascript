//BREAK  |  CONTINUE

//CONTINUE
let n = 0
let max = 1000
let pares = 0

for (let i = n; i < max; i++) {
    if( i % 2!= 0 ) {
        continue
    }
    pares++
}

console.log('Quantidade de numeros pares:', + pares)
console.log('FIM DO PROGRAMA')




//BREAK

let n = 1
let max = 1000


while (n < max) {
    console.log(`Passo: ${n}`)
    if (n > 10) {
        break
    }
    n++
}

console.log('Fim do programa')