const path = require("path");

// Basename apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome da pasta atual
console.log(path.basename(__dirname));

// Nome do diretório atual
console.log(path.dirname(__dirname));

// Extensão do arquivo
console.log(path.extname(__filename))

// Criar um objeto Path
console.log(path.parse(__filename))

// Path.join juntar vários caminhos de arquivos
console.log(path.join(__dirname, 'teste', 'test.html'))