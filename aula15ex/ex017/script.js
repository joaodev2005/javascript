function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('[ERRO] Digite um numero')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}


/*function tabuada() {
    var tabu = document.getElementById('txtn')
    var sele = document.getElementById('seltab')
    var t = Number(txtn.value)

    if (tabu.value.length == 0) {
        window.alert('[ERRO] escolha uma tabuada para começar')
    } else {
        sele.innerHTML = ""

        for (var i = 1; i <= 10; i++) {
            var option = document.createElement("option")
            option.text = t + "x" + i + "=" + (t * i)
            sele.add(option)
        }
    } 
}*/