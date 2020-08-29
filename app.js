// 
require('dotenv').config();
let express = require('express');
let app = express();
const sequelize = require('./db');

// //////////////////////////////////////////////////////
let user = require('./controllers/usercontroller');
let invest = require('./controllers/investcontroller');
let watchlist = require('./controllers/watchlistcontroller');

// //////////////////////////////////////////////////////

sequelize.sync();
// sequelize.sync(force: true);

app.use(express.json());
// app.options('*', cors());
app.use('/invest', invest);
app.use('/user', user);
app.use('/watchlist', watchlist);

// app.use('/watchlist', watchlist);



// ////////////////////////////////////////////////////////
app.listen(3002, function(){
    console.log('Running on 3002');
})