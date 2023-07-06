//FUNÇÕES PARAMETRIZADAS


//PARAMETRO 1

function add(v) {
    valor += v
}

let valor = 0
console.log(valor)

add(10)
console.log(valor)

add(10)
console.log(valor)

add(10)
console.log(valor)




//PARAMETRO 2

const valor_Padrao1 = 1
const valor_Padrao2 = 1

function soma(n1 = valor_Padrao1, n2 = valor_Padrao2) {
    let res
    res = n1 + n2
    return res
}

let resultado_Soma = soma()
console.log(resultado_Soma)





