function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'impossivel contar'
        window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        } 
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c+= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
            
        }
        res.innerHTML += `\u{1f3c1}`
    } 
}   














/*function contar() {
    var inicio = document.getElementById('start').value
    var fim = document.getElementById('fim').value
    var pass = document.getElementById('passo').value
    var res = document.getElementById('res')
    var contador = ''
    if (inicio.value.length == 0) {
        res.innerHTML = 'impossivel contar'
    } else {
        if (fim.value.length == 0){
            res.innerHTML = 'determine um final pra começar'
        } else {
            inicio = parseInt(inicio);
            fim = parseInt(fim);

            if (inicio < fim) {
                for (contador = inicio; contador <= fim; contador++) {
                    res.innerHTML = `${contador}`
                }
            } 
        }
    }
}*/
 