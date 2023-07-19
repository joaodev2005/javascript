// stopPropagation()

const caixa1 = document.getElementById('caixa1')
const todos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evt) => {
    console.log('clicou')
})

todos.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.stopPropagation()
    })
})



//function com nome + arrow function

// const msg = () => {
//     console.log('clicou')
// }

// c1.addEventListener('click', msg)