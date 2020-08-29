module.exports = (sequelize, DataTypes) => {
    const Investments = sequelize.define("investments", {
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
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
     
    });
    return Investments;
  };