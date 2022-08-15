// // Criando servido com node puro

// const http = require("http");

// const port = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/home") {
//     // Tipo de conteúdo
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>Home Page</h1>");
//   }

//   if (req.url === "/users") {
//     const users = [
//       {
//         name: "Gabriel Cardoso",
//         email: "gr78787@gmail.com",
//       },
//       {
//         name: "Beatriz Ferreira",
//         email: "bea@gmail.com",
//       },
//     ];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//   }
// });

// server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
