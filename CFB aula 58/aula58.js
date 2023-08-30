// Orientação a objetos

// treino
class Games{
    constructor(gnome, ggenero){
        this.nome = gnome
        if(ggenero == 1){
            this.genero = 'RPG'
            this.class = 10
        }else if(ggenero == 2){
            this.genero = 'Terror'
            this.class = 16
        }else if(ggenero == 3) {
            this.genero = 'Ação'
            this.class = 13
        }else{
            this.genero = 'Aventura / Plataforma'
            this.class = 'Livre' 
        }
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Genero: ${this.genero}`)
        console.log(`Classificação: ${this.class}`)
    }
}

let Game1 = new Games('Silent Hill', 2)
let Game2 = new Games('Mario Odsey', 4)
let Game3 = new Games('The Last of Us Part II', 3)
let Game4 = new Games('Baldurs Gate 3', 1)

Game1.info()



class Carro{
    canal = 'Consoles e jogos Brasil'
    constructor(pnome, ptipo){
        this.nome = pnome
        this.canal = 'Youtube'
        if(ptipo == 1){
            this.tipo = 'Esportivo'
            this.velmax = 300
        }else if(ptipo == 2){
            this.tipo = 'Utilitário'
            this.velmax = 120
        }else if(ptipo == 3){
            this.tipo = 'Drift'
            this.velmax = 250
        }else {
            this.tipo = 'Militar'
            this.velmax = 180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelmax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }
    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo 
    }
    setVelmax(velmax){
        this.velmax = velmax 
    }
    info(){
        console.log(`Nome.: ${this.nome}`)
        console.log(`Tipo.: ${this.tipo}`)
        console.log(`V.Max: ${this.velmax}`)
        console.log(`Canal: ${this.canal}`)
        console.log('------------------------')
    } 
}

let c1 = new  Carro('Tesla Model x', 1)
let c2 = new  Carro('Caminhonete', 2)
let c3 = new  Carro('Opressora MK II', 4)
let c4 = new  Carro('350 Z', 3)

c1.setNome('Tesla Model S plaid')
c1.setTipo('Submersível')
c1.setVelmax(500)

c1.info()
c2.info()
c3.info()

console.log(c1.getInfo()[0])
console.log(c1.getNome())





