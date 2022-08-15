class Person{
    constructor(name){
        this.name = name
    }


    sayMyName(){
        return `My name is ${this.name}`
    }
}


// Exportando módulo
module.exports  = {
    Person
}