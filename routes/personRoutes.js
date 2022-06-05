const router = require('express').Router();

const Person = require('../models/Person');



router.post('/', async (req, res) => {
    const { name, salary, approved } = req.body
  
    const person = {
      name,
      salary,
      approved,
    }
  
    try {
      await Person.create(person)
  
      res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  router.get('/', async (req, res) => {
      try{
        const people = await Person.find();
        res.status(200).send(people)

      }catch(err) {
        res.status(500).json({ erro: err })
      }
  })

  router.get('/:id', async (req, res) => {
      const id = req.params.id;
      try {
          const people = await Person.findOne({_id: id})
          res.status(200).send(people);

      }catch(err) {
        res.status(500).json({ erro: err })
      }
  })

  module.exports = router;