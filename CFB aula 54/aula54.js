// coleção map

const caixa = document.querySelector('#caixa')


let mapa = new Map()

mapa.set('curso', 'javascript')
mapa.set(100, 'Joker')
mapa.set('100', 'lasanha')
mapa.set('number', 500)

mapa.delete('')


if(mapa.has('curso')){
    caixa.innerHTML = 'existe' 
}else {
    caixa.innerHTML = 'não existe'
}
caixa.innerHTML += ` <br/> o tamanho da coleção e: ${mapa.size}`

mapa.forEach((el) => {
    console.log(el)
})

// caixa.innerHTML = mapa.get('curso')

// console.log(mapa)[2]