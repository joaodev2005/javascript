function tabuada() {
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
}


/*function tabuada() {
    var inputNumber = document.getElementById('txtn')
    var selectNumber = document.getElementById('seltab')
    var i = Number(txtn.value)

    if (inputNumber.value.length == 0) {
        window.alert('[ERRO] Escolha uma tabuada para prosseguir')
    } else {
        selectNumber.innerHTML = ""

        for (var c = 1; c <= 10; c++) {
            var option = document.createElement("option")
            option.text = i + "x" + c + "=" (i * c)
            selectNumber.add(option)
        }
    }
}*/