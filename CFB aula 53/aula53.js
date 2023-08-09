// arrays com funções

const soma = document.querySelector('#soma')
const subtrair = document.querySelector('#subtrair')
const multiplicar = document.querySelector('#multiplicar')
const dividir = document.querySelector('#dividir')

const resultado = document.querySelector('#res')

const op = [
    () => {
        const val = [document.querySelector('#value1').value, document.querySelector('#value2').value]
        resultado.value = Number(val[0])+Number(val[1])
    },
    () => {
        const val = [document.querySelector('#value1').value, document.querySelector('#value2').value]
        resultado.value = Number(val[0])-Number(val[1])
    },
    () => {
        const val = [document.querySelector('#value1').value, document.querySelector('#value2').value]
        resultado.value = Number(val[0])*Number(val[1])
    },
    () => {
        const val = [document.querySelector('#value1').value, document.querySelector('#value2').value]
        resultado.value = Number(val[0])/Number(val[1])
    }
]



soma = addEventListener('click', op[0])
subtrair = addEventListener('click', op[1])
multiplicar = addEventListener('click', op[2])
dividir = addEventListener('click', op[3])


// let valores = [3, 3]

// const op = [
//     (val) => {
//         let res = 0
//         for(v of val){
//             res += v
//         }
//         return res
//     },
//     (val) => {
//         let res = 1
//         for(v of val){
//             res *= v
//         }
//         return res
//     },
//     (val) => {
//         let res = 0
//         for(v of val){
//             console.log(v)
//         }
//     }
// ]
// console.log(op[0](valores))

function isColor(data) {
    const color = {
        red: 'vermelho',
        blue: 'azul',
        green: 'verde'
    }

    return color[data] || 'nao e uma cor'
}

console.log(isColor('vermelho'))