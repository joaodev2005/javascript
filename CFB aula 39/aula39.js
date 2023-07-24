//Relações do DOM

const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')

console.log(c1_2.parentNode.parentNode.children[4])

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)


console.log(btn_c[0].children.length > 0 ? 'Possui Filhos' : 'Não Possui Filhos')

caixa1.children[0].innerHTML = 'teste'

// if(caixa1.children.length > 0) {
//     console.log('Possui Filhos')
// }else{
//     console.log('Não Possui filhos')
// }