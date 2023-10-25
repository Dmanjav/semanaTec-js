const express= require("express");
const app = express();
//Traer el objeto de conexión
const sequelize = require("./util/database");

//Middleware
app.use(express.json());

app.get("/test", (req, res) => {
    console.log("Esto no se debería de hacer pero sí funciona");
    res.send("<h1>El servidor funciona</h1>");
});

//Levantar servidor y escuchar peticiones
sequelize.sync()
    .then(res => {
        app.listen(8080, () => {
            console.log("Servidor iniciado");
        });
    })
    .catch(err => {
        console.log(err);
    });