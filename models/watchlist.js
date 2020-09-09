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
      typeOfSecurity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
     
    });
    return Watchlist;
  };