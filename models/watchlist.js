module.exports = (sequelize, DataTypes) => {
    const Watchlist = sequelize.define("watchlist", {
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
    return Watchlist;
  };