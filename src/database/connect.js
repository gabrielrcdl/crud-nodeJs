const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.cbogw6p.mongodb.net/database?retryWrites=true&w=majority`),
    (error) => {
      if (error) {
        return console.log(
          "Occoreu um erro ao se conectar com o banco de dados",
          error
        );
      }
     
      return console.log("Conexão com banco de dados bem sucedida!");
    };
};

module.exports = connectToDatabase;
