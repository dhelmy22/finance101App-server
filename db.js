const Sequelize = require('sequelize');
const sequelize = new Sequelize('finance101App','postgres', 'Letmein8762',{
    host: 'localhost',
    dialect: 'postgres'
});



sequelize.authenticate().then(

function(){
    console.log('connected to finance101App postgres database');
},
function(err){
    console.log(err);
}

);

User = sequelize.import('./models/user');
Investments = sequelize.import('./models/investments');
Watchlist = sequelize.import('./models/watchlist'),

User.hasMany(Investments);
Investments.belongsTo(User);
User.hasMany(Watchlist);
Watchlist.belongsTo(User);



module.exports = sequelize;