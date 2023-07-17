//DOM = querrySelector | querrySelectorAll

const divTodas = [...document.getElementsByTagName('div')]
const cursosTodos = [...document.getElementsByClassName('curso')]
const cursosC1 = [...document.getElementsByClassName('c1')]
const cursosC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementById('c1')

// const querry_divTodas = [...document.querySelectorAll('div[class]')]
const querry_divTodas = [...document.querySelectorAll('div > p')]
const querry_Todos = [...document.querySelectorAll('.curso')]
const querry_cursosC1 = [...document.querySelectorAll('.c1,p')]
const querry_cursosC2 = [...document.querySelectorAll('.c2,p')]
const querry_cursoEspecial = document.querySelector('#c1')


console.log(querry_divTodas)
// console.log(querry_cursosC2)

// console.log(divTodas)
// console.log(cursoTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)

// cursosC1.map((el) => {
//     el.classList.add('destaque')
// })