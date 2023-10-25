function applyRelations(sequelize) {
    console.log(sequelize.models);
    const Proyecto = sequelize.models.proyecto;
    const Persona = sequelize.models.persona;
    const ProyectoPersona = sequelize.models.proyectopersona;

    //Un proyecto tiene muchas personas
    Proyecto.belongsToMany(Persona, { through: ProyectoPersona });

    //Una persona tiene muchos proyectos
    Persona.belongsToMany(Proyecto, { through: ProyectoPersona });
}

module.exports = { applyRelations };