// some

const p_array = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnverificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [9, 84, 1233, 94, 58, 333, 23, 133, 1633]
p_array.innerHTML = elementos_array

btnVerificar.addEventListener('click', (evt) => {
    const ret = elementos_array.every((el, i) => {
        if(el < 18){
            resultado.innerHTML = `Array não conforme na Posição: ${i}`
        }
        return el >= 18
    })
    if(ret){
        resultado.innerHTML = 'OK'
    }
    // console.log(ret)
})