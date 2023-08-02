// some

const p_array = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnverificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [16,12,10,17,15,13,11,9,4,5,20]
p_array.innerHTML = elementos_array

btnVerificar.addEventListener('click', (evt) => {
    const ret = elementos_array.some((el, i) => {
        if(el < 18){
            resultado.innerHTML = `Array não conforme na Posição: ${i}`
        }
        return el >= 18
    })
    if(ret){
        resultado.innerHTML = 'OK'
    }
})