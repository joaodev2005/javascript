// addEventListener

//const c1 = document.getElementById('c1')
const cursos = [...document.querySelectorAll('.curso')]
//funcao anonima
cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const el = evt.target
        el.classList.add('destaque') 
        console.log(`${el.innerHTML} foi clicado`)
    })
})

// c1.addEventListener('click', (evt) => {
//     const el = evt.target
//     el.classList.add('destaque')
// })

//evento com nome

const c1 = document.getElementById('caixa1')


const msg = () => {
    console.log('clicou')
}

c1.addEventListener('click', msg)