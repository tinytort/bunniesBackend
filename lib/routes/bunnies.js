const Router = require('express').Router;
const router = Router();
const Bunny = require('../models/bunny');

router
    .get('/', (req, res, next) => {
        Bunny.find()
            .lean()
            .then(bunnies => res.send(bunnies))
            .catch(next);
    })

    .post('/', (req, res, next) => {
        new Bunny(req.body)
            .save()
            .then(bunny => res.send(bunny))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Bunny.findByIdAndRemove(req.params.id)
            .then(response => {
                res.send({ removed: !!response });
            })
            .catch(next);
    })

    .get('/:id', (req, res, next)=> {
        const id = req.params.id;
        Bunny.findById(id)
            .lean()
            .then(bunny => { 
                if(!bunny) throw { code: 404, error: `${id} not found`};
                else res.send(bunny);
            })
            .catch(next);
    });

module.exports = router; 