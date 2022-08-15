const { json } = require("express");
const express = require("express");
const UserModel = require("../src/models/user.model");

// Iniciando o exress
app = express();
// Reconhecer que vamos usar json nas nossas requisições
app.use(express.json());

// Utilizando a lib ejs "express voçê irá utilizar o ejs como view"
app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({})
  res.render("index", {users});
});

// Criando um middlewares se não chamar o next a req não executa
app.use((req, res, next) => {
  console.log(req.body);
  next();
});

// Rota home
app.get("/home", (req, res) => {
  res.contentType("application.html");
  res.status(200).send("<h1>Olá Mundo</h1>");
});

// Pega todos usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Pega um usuário específico
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Adiciona um usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Atualiza uma informação de um usuário específico
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Deleta um usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    res.status(200).json(user);
  } catch {
    res.status(500).send(error.message);
  }
});

// Porta que o servidor está escutando
const port = 4000;
app.listen(port, () =>
  console.log(`Servidor rodando com express na porta ${port}`)
);
