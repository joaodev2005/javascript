var idade = 91

if (idade < 16) {
    console.log ('NÃO VOTA')
}else {
    if (idade < 18 || idade >= 67){
        console.log ('VOTO OPCIONAL')
    }else {
        console.log ('VOTO OBRIGATORIO')
    }if (idade > 90){
        console.log('MORREU')
    }
}