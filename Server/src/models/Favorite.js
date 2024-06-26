const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "favorite",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      platforms: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        //  allowNull: false,
      },
      launchDate: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        //allowNull: false,
      },
    },
    { timestamps: false }
  );
};
