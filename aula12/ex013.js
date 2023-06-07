var agora = new Date()
var hora = agora.getHours()

console.log (`são exatamente ${hora} horas`)
if (hora >= 6 && hora < 12) {
    console.log ('BOM DIA')
}else {
    if (hora <= 18) {
        console.log ('BOA TARDE')
    }else {
        console.log ("BOA NOITE") 
    }
}