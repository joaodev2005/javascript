const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const btnCopiar = document.getElementById('btn_copiar')
const btnRemover = document.getElementById('btn_remover')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const curso = evt.target
        curso.classList.toggle('selecionado')
    })
})

btnCopiar.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)
    })
})

btnRemover.addEventListener('click', () => {
    const tirarSelecionados = [...document.querySelectorAll('.curso:not(.selecionado')]
    tirarSelecionados.map((el) => {
        caixa1.appendChild(el)
    })
})