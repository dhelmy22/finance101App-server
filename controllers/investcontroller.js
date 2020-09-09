const express = require("express");
const router = express.Router();
const validateSession = require("../middleware/validate-session");
const Investments = require("../db").import("../models/investments");

// ----------------------------------------

// router.get('/practice', validateSession, function(req, res){
//     res.send('this is the practice route')
// })

// - Investment Create ---------------------------------------------
router.post("/create", validateSession, (req, res) => {
    const investmentsEntry = {
        title: req.body.investments.title,
        price: parseInt(req.body.investments.price),
        quantity: parseInt(req.body.investments.quantity),
        userId: req.user.id

    }
    Investments.create(investmentsEntry)
        .then((investments) => res.status(200).json(investments))
        .catch((err) => res.status(500).json({ error: err }));
});

// - Investment Save -------------------------------------------------
router.post("/save", validateSession, (req, res) => {
    const investmentsEntry = {
        id: req.body.user.id,
        title: req.body.investments.title,
        price: req.body.investments.price,
        quantity: req.body.investments.quantity

    }
    Investments.create(investmentsEntry)
        .then((investments) => res.status(200).json(investments))
        .catch((err) => res.status(500).json({ error: err }));
})

// - Get All Investments ---------------------------------------------

router.get('/', (req, res) => {
    Investments.findAll()
        .then(investments => res.status(200).json(investments))
        .catch(err => res.status(500).json({ error: err }))
});

// - Get Investment by User -------------------------------------------

router.get('/mine', validateSession, (req, res) => {
    let userId = req.user.id
    Investments.findAll({
        where: { userId: userId }
    })
        .then((investments) => res.status(200).json(investments))
        .catch((err) => res.status(500).json({ error: err }));
});

// - Get Investment By Name --------------------------------------------

router.get('/title', function (req, res) {
    let title = req.params.investments;

    Investments.findAll({
        where: { investments: investments }
    })
        .then((investments) => res.status(200).json(investments))
        .catch((err) => res.status(500).json({ error: err }))
})

// - Update Entry ---------------------------------------------

router.put('/update/:title', validateSession, function (req, res) {
    const updateInvestmentsEntry = {
        title: req.body.investments.title,
        price: req.body.investments.price,
        quantity: req.body.investments.quantity
    };
    const query = { where: { id: req.params.title, userId: req.user.id } };

    Investments.update(updateInvestmentsEntry, query)
        .then((investments) => res.status(200).json(investments))
        .catch((err) => res.status(500).json({ error: err }))
})

// - Deleting Entry -------------------------------------------

router.delete('/delete/:title', validateSession, function (req, res) {
    const query = { where: { title: req.params.title, userId: req.user.id } };

    Investments.destroy(query)
        .then(() => res.status(200).json({ message: 'Removed' }))
        .catch((err) => res.status(500).json({ error: err }))
})



module.exports = router;