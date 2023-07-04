let colocacao = 3

switch(colocacao){
    case 1:
        console.log('Primeiro Lugar')
        break
    case 2:
        console.log('Segundo Lugar')
        break
    case 3:
        console.log('Terceiro Lugar')
        break
    case 4: case 5: case 6:
        console.log('PREMIO DE PARTICIPAÇÃO')
        break
    default:
        console.log('ELIMINADO')
        break
}

if (colocacao == 1) {
    console.log('---MEDALHA DE OURO---')
}else {
    if(colocacao == 2) {
        console.log('--MEDALHA DE PRATA--')
    }else {
        if(colocacao == 3) {
            console.log('-MEDALHA DE BRONZE-')
        } else {
            console.log('MAIS SORTE NA PROXIMA VEZ')
        }
    }
}