//OPERADOR SPREAD    ...

const objs1 = document.getElementsByTagName('div')
const objs2 = [...document.getElementsByTagName('div')]

objs2.forEach(element => {
    element.innerHTML = 'curso'
});

console.log(objs1)
console.log(objs2)



// const soma = (v1,v2,v3) => {
//     return v1+v2+v3
// }

// let valores = [1,5,4,10]

// console.log(soma(...valores))




// const jogador1 = {nome: 'joao', energia: 100, vidas: 3, arma: 'arco'}
// const jogador2 = {nome: 'felipe', energia: 100, vidas: 5, elemento: 'fogo'}
// const jogador3 = {...jogador1, ...jogador2}

// console.log(jogador3)





// let n1 = [10, 20, 30]
// let n2 = [40, 60, 90]
// let n3 = [...n1, ...n2]

// // console.log('n1: ' + n1)
// // console.log('n2: ' + n2)
// console.log('n3: ' + n3)