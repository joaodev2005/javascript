//FUNCTION COM RETORNO

function soma() {
    let n1 = 3
    let n2 = 2
    let res = n1 * n2
    if( res % 2 == 0 ) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

let res = soma()

console.log(res)
