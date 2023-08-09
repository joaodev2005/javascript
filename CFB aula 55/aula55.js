const caixa = document.getElementById('caixa')

let music = new Set(['musica1', 'Master of pupets', 'musica2', 'Sweet Child of mine'])

music.add('musica boa')
music.add('musica1')
music.add('musica2')

music.delete('musica1')
music.clear()

console.log(music)

// music.forEach((el) => {
//     caixa.innerHTML += el + '<br/>'
// })

for(let m of music){
    caixa.innerHTML += m + '<br/>'
}
