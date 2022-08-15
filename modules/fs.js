// Manipular arquvos file system

const fs = require('fs')
const { join } = require('path')
const path = require('path')

//  Criar uma pasta
 fs.mkdir(path.join(__dirname, '/teste'), (error)=>{
     if(error){
        return console.log('Erro', error)
     }
    console.log('pasta criada com sucesso! ')
 })

//OBS: Ao criar uma pasta ao tentar rodar o servidor novamente
// O código acima dará erro pois já existe o caminho especificado


// Criar um arquivo recebe 3 parâmetros:
// Nome do diretório e nome do arquivo com extensão
// Conteúdo 
// callback
fs.writeFile(
    path.join(__dirname, "/teste", "test.txt"),
    "hello node!",
    (error)=>{
        if(error){
            return console.log("Erro", error)
        }
        console.log("Arquivo gerado com sucesso!")
    }
)

// Adiconando um arquivo
fs.appendFile(
    path.join(__dirname, "/teste", "test.txt"), 
    "hello wolrd", 
    (error)=>{
        if(error){
           return console.log("Erro", error)
        }
        console.log("Arquivo modificado com sucesso!")
    }
)

// Ler arquivo e seu tipo e receber dados do arquivos no callback
fs.readFile(path.join(__dirname, "/teste", "test.txt"), "utf-8", (error, data)=>{
    if(error){
        return console.log("Erro", error)
    }
    console.log(data)
})