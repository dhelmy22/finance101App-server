const express = require("express");
const router = express.Router();
const validateSession = require("../middleware/validate-session");
const Watchlist = require("../db").import("../models/watchlist");

// ----------------------------------------

// router.get('/practice', validateSession, function(req, res){
//     res.send('this is the practice route')
// })

// - Watchlist Create ---------------------------------------------
router.post("/create", validateSession, (req, res) => {
    const watchlistEntry = {
        title: req.body.watchlist.title,
        price: parseInt(req.body.watchlist.price),
        typeOfSecurity: req.body.watchlist.typeOfSecurity,
        userId: req.user.id

    }
    Watchlist.create(watchlistEntry)
        .then((watchlist) => res.status(200).json(watchlist))
        .catch((err) => res.status(500).json({ error: err }));
});

// - Watchlist Save -------------------------------------------------
router.post("/save", validateSession, (req, res) => {
    const watchlistEntry = {
        id: req.body.user.id,
        title: req.body.watchlist.title,
        price: req.body.watchlist.price,
        typeOfSecurity: req.body.watchlist.typeOfSecurity

    }
    Watchlist.create(watchlistEntry)
        .then((watchlist) => res.status(200).json(watchlist))
        .catch((err) => res.status(500).json({ error: err }));
})

// - Get All Watchlist ---------------------------------------------

router.get('/', (req, res) => {
    Watchlist.findAll()
        .then(watchlist => res.status(200).json(watchlist))
        .catch(err => res.status(500).json({ error: err }))
});

// - Get Watchlist by User -------------------------------------------

router.get('/mine', validateSession, (req, res) => {
    let user = req.user.id
    Watchlist.findAll({
        where: { userId: user}
    })
        .then((watchlist) => res.status(200).json(watchlist))
        .catch((err) => res.status(500).json({ error: err }));
});

// - Get Watchlist By Name --------------------------------------------

router.get('/title', function (req, res) {
    let title = req.params.watchlist;

    Watchlist.findAll({
        where: { watchlist: watchlist }
    })
        .then((watchlist) => res.status(200).json(watchlist))
        .catch((err) => res.status(500).json({ error: err }))
})

// - Update Entry ---------------------------------------------

router.put('/update/:title', validateSession, function (req, res) {
    const updatePlantEntry = {
        title: req.body.watchlist.title,
        price: req.body.watchlist.price,
        typeOfSecurity: req.body.watchlist.typeOfSecurity
    };
    const query = { where: { id: req.params.title, userId: req.user.id } };

    Watchlist.update(updateWatchlistEntry, query)
        .then((watchlist) => res.status(200).json(watchlist))
        .catch((err) => res.status(500).json({ error: err }))
})

// - Deleting Entry -------------------------------------------

router.delete('/delete/:title', validateSession, function (req, res) {
    const query = { where: { title: req.params.title, userId: req.user.id } };

    Watchlist.destroy(query)
        .then(() => res.status(200).json({ message: 'Watchlist Removed' }))
        .catch((err) => res.status(500).json({ error: err }))
})



module.exports = router;