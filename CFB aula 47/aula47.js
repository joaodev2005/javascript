const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnpesquisar')
const resultado = document.querySelector('#resultado')

// const elementos_array = [10, 40, 53, 12, 36, 28, 74, 100] array number
const elementos_array = ['HTML', 'React', 'Kotlin', 'Docker', 'Vue', 'Laravel', 'PHP'] //array string
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = 'VALOR NÃO ENCONTRADO'
    const ret = elementos_array.find((e, i) => {
        if (e.toUpperCase() == txt_pesquisar.value.toUpperCase()) {
            resultado.innerHTML = `Valor encontrado: ${e} na Posição: ${i}`
            return e
        }
    })
    console.log(ret)
})
