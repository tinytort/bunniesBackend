const Router = require('express').Router;
const router = Router();
const Bunny = require('../models/bunny');

router

    .get('/', (req, res, next) => {
        Bunny.find()
            .lean()
            .then( bunnies => res.send(bunnies))
            .catch(next);
    })

    .post('/', (req, res, next) => {
        const bunny = new Bunny(req.body);
        bunny
            .save()
            .then( bunny => res.send(bunny))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Bunny.findByIdAndRemove(req.params.id)
            .then(status => res.send({ removed: !!status }))
            .catch(next);
    });

module.exports = router;