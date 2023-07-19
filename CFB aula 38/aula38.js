// Relação dos elementos no DOM 

const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]


console.log(document.getRootNode())
console.log(btn_c[0].ownerDocument)
console.log(caixa1.children[caixa1.children.length-3])
console.log(caixa1.children[3])
console.log(caixa1.lastElementChild)