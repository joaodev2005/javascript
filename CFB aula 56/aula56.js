// Template String

const caixa = document.querySelector('#caixa')

const carros = ['Mercedez', 'GTR', 'Tesla', 'Mustang', 'Toyota']

let ul = `<ul>`

carros.map((el) => {
    ul += `<li>${el}</li>`
})

ul += `</ul>`

caixa.innerHTML = ul


// const curso = 'PHP'
// const canal = 'CursoEmVideo'

// const frase = 'Este é o curso de ' + curso + ', ' + ' do canal ' + canal

// const frase = `Este é o <br/> curso de ${curso}, do <br/> canal ${canal}`

