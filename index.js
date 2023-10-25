//Importar bibliotecas

const express= require("express");
const app = express();

//Middleware
app.use(express.json());

app.get("/test", (req, res) => {
    console.log("Esto no se debería de hacer pero sí funciona");
    res.send("<h1>El servidor funciona</h1>");
});

//Levantar servidor y escuchar peticiones
app.listen(8080, () => {
    console.log("Servidor iniciado");
});