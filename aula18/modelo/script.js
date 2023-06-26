const num = document.getElementById('fnum')
const lista = document.getElementById('flista')
const res = document.getElementById('res')
const valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value)) {
        
    } else {
        window.alert('valor invalido ou já encontrado na lista')
    }
} 














/*const num = document.getElementById('fnum')
const lista = document.getElementById('flista')
const res = document.getElementById('res')
const valores = []


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        
    } else {
        window.alert('valor invalido ou já encontrado na lista')
    }
}*/