//Como utilizar el ORM de sequelize 


//mysql -u admin -h database-1.cyxjks1ka8gq.us-east-1.rds.amazonaws.com -p
const Sequelize= require('sequelize');
//Configurar la conexion a la base de datos
//mysql -u admin -h -P 3306 -p
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

const Ejemplo = sequelize.define('ejemplo', {
    idTrabajo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

const Ejemplo2 = sequelize.define('ejemplo', {
    idTrabajo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: true
    },
});

//Prueba de conexión
sequelize.sync()
    .then(result=>{
        console.log("Conexión exitosa");
    })
    .catch(error=>{
        console.log('Error en la conexión', error);
    })