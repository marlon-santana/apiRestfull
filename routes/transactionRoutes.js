const router = require('express').Router();

const Transaction = require('../models/transactions');

router.get('/', async (req, res) => {
    try{
      const transaction = await Transaction.find();
      res.status(200).send(transaction)

    }catch(err) {
      res.status(500).json({ erro: err })
    }
})

router.post('/', async (req, res) => {
    const { title, value,  amount, category, type, createdAt } = req.body

    
    const transaction = {
     title,
     value,
     amount,
     category,
     type,
     createdAt
    }
  
    try {
      await Transaction.create(transaction)
  
      res.status(201).json({ message: 'Transação inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

module.exports = router;