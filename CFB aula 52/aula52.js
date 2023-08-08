// array

const caixa = document.getElementById('caixa')

let cores = ['azul', 'rosa', 'vermelho', 'dourado', 'roxo',['claro','forte',]]
let games = ['Undertale', 'Earthbound', 'The last Of Us', cores]

// games.push('GTA V')
// games.push('The Witcher 3')
// games.push('Elden ring')

// games.unshift('Fear and Hunger')
// games.shift()

console.log(games[3][5][1])

games.map((el) => {
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})
