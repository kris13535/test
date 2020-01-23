
var express = require('express');
var router = express.Router();
var {postGame, getAllgames} = require('../db/dataFormGame')

router.post('/', function(req, res, next) {
    postGame(req.body)
        .then(game => res.status(200).json({game}))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.post('/history', function(req, res, next) {
    getAllgames(req.body)
        .then(games => res.status(200).json(games))
        .catch(error => res.status(500).json({ error: error.message }));
});

module.exports = router;