function contar() {
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
}
 