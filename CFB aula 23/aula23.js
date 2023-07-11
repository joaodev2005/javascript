// PARÂMETROS REST

//FOR OF

function soma(...valores){
    let res = 0
    for(let v of valores){
        res += v
    }
    return res
}

console.log(soma(209, 98, 7, 52))





// function soma(...valores){
//     let num = valores.length
//     let res = 0
//     for( let i = 0; i < num; i++ ){
//         res += valores [i]
//     }
//     return res
// }

// console.log(soma(33, 6, 49, 26))
