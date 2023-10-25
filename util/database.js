const Sequelize= require('sequelize');
const { applyRelations } = require('./relations');
//Configurar la conexion a la base de datos
const sequelize = new Sequelize('semanatec', 'admin', 'password', {
    dialect: 'mysql',
    host: 'database-1.cyxjks1ka8gq.us-east-1.rds.amazonaws.com',
    define: {
        //Evitar que nos ponga createdAt y updatedAt
        timestamps: false,
        //Evitar plural
        freezeTableName: true
    }
});

//Cargar Modelos
const modelDefiners = [
    require('../models/persona'),
    require('../models/proyecto'),
    require('../models/proyectoPersona')
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

//Construir las relaciones
applyRelations(sequelize);

//Exportar el elemento de conexión
module.exports = sequelize;