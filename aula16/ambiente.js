let num = [3, 4, 5, 6, 8]
num [5] = 9
num [6] = 10

let pos = num.indexOf(10)

if (pos == -1) {
    console.log('o valor nao foi encontrado')
} else {
    console.log(`o valor esta na posição ${pos} `)
}


/*for (let pos = 0; pos<num.length; pos++) {
    console.log(num[pos])
}*/



