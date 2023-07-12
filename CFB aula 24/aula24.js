// FUNÇÕES ANÔNIMAS


//CONSTRUTOR

const f = new Function('v1', 'v2', 'v3', 'return (v1+v2) / v3')

console.log(f(20, 10, 12))







const num = function(...valores){
    let res = 0
    for (v of valores){
        res += v
    }
    return res
}

console.log(num(10, 5))

