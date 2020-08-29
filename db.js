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
module.exports = sequelize;