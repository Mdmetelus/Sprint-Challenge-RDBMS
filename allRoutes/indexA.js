const express = require('express');
const db = require('../data/dbConfig');


const router = express.Router();


router.get('/:id', (req, res) => {
    db('actions')
    .where({ id: req.params.id})
    .then(action => {
      if(action.length) {
        res.status(200).json(action)
      } else { res.status(404).json({ message: "Error, no action by that id found"})}
    })
    .catch(err => res.status(500).json({ messgae: "Error, three was an error retrieving the data"}))
  })

// add actions
router.post('/', (req, res) => {
  const { description, notes, project_id } = req.body;
  if(!description 
    || !notes 
    || !project_id
    ) {
    res.status(400).json({ message: "Error, must provide a description, notes, and if complete or not, and a corresponding project id"})
  } else {

    db('actions')
    .insert(req.body)
    .then(ids => {
      db('actions')
        .where({ id: ids[0]})
        .then(action => {
          res.status(201).json(action)
        })
    })
    .catch(err => res.status(500).json({ message: "Error, there was an error creating the action"}))
  };
})

module.exports = router;