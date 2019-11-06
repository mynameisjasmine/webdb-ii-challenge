const express = require('express');

const db = require('../data/dbConfig.js');
const knex = require('../data/dbConfig.js');

const router = express.Router();


//GET
router.get('/', (req, res) => {
knex
.select('*')
.from('cars')
.then(cars => {
res.status(200).json(cars)
})
.catch(err => {
res.status(500).json({error: "Could not load data from cars"})
 })
});

//POST
router.post('/', (req, res) => {
knex
.insert(req.body, 'id')
.into('cars')
.then(ids => {
res.status(200).json(ids)
})
.catch(err => {
res.status(500).json({error: "Failed to insert post to database"})
 })
});

//PUT
router.put('/:id', (req, res) => {
const updatedInfo = req.body

knex('cars')
.where({id: req.params.id})
.update(updatedInfo)
.then(count => {
res.status(200).json(count)
 })
 .catch(err => {
res.status(500).json({error: "Failed to update account"})
 })
});

//DELETE
router.delete('/:id', (req, res) => {
knex('cars')
.where({id: req.params.id})
.del()
.then(count => {
res.status(200).json(count)
})
.catch(err => {
res.status(500).json({error: "Failed to delete account"})
 })
});


module.exports = router;