// Iteradores

const valores = [10, 8, 9, 2, 15, 6, 0, 28]
const it_valores = valores[Symbol.iterator]()

const texto = 'YouTube'
const it_texto = texto[Symbol.iterator]()

console.log(valores)
console.log(it_texto.next())
 