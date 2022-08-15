// importando o módulo
// const { Person } = require("./person");
//require("./modules/path");
// require("./modules/fs");
// const person = new Person("Gabriel");

//require("./modules/http");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect")
// Configura para usaramos o arquivo .env
dotenv.config();
connectToDatabase();
require("./modules/express");
