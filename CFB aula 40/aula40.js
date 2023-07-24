// createElement

const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'MongoDB']

cursos.map((el, indice) => {
    const newElement = document.createElement('div')
    newElement.setAttribute('id', `c${indice}`)
    newElement.setAttribute('class', 'curso c1')
    newElement.innerHTML = el
    caixa1.appendChild(newElement)
})

// const newElement = document.createElement('div')
// newElement.setAttribute('id', 'c7')
// newElement.setAttribute('class', 'curso c1')
// newElement.innerHTML = 'MongoDB'

// caixa1.appendChild(newElement)

