// filter

//funcao anonima

const idades = [15, 21, 30, 17, 18, 44, 11 , 50]
const maior = idades.filter((valor) => {
    if(valor >= 18){
        return valor
    }
})

const menor = idades.filter((valor) => {
    if(valor < 18){
        return valor
    }
})

console.log(`todos os numeros: ${idades}`)
console.log(`maiores numeros: ${maior}`)
console.log(`menores numeros: ${menor}`)



//forma com funcao

const filtroMaior18 = (valor) => {
    if(valor >= 18){
        return valor
    }
} 

const idade = [12, 45, 9, 10, 18, 35, 4, 2, 77, 50]
const maiores = idades.filter(filtroMaior18)

console.log(idades) //array completo
console.log(maior) //array filtrado