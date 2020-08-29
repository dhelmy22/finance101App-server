module.exports = (sequelize, DataTypes) => {
    const Invest = sequelize.define("invest", {
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      typeOfSesurity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
     
    });
    return Invest;
  };