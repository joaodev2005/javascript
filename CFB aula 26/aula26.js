//  FUNÇÕES ANINHADAS

const soma = (...valores) =>{
    const somar = val => {
        let res = 0
        for(v of val )
            res += v
        return res  
    }
    return somar(valores)
}

console.log(soma(10, 5, 15, 3))




valor = [10, 15, 40]
console.log(soma(...valor))