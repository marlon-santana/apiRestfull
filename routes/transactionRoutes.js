const router = require('express').Router();
const middleware = require('../middleware/cors');


const Transaction = require('../models/transactions');

router.use(middleware)

router.get('/', async (req, res) => {
    try{
      const transaction = await Transaction.find();
      res.status(200).send(transaction)

    }catch(err) {
      res.status(500).json({ erro: err })
    }
})

router.post('/', async (req, res) => {
    const { title,  amount, category, type } = req.body

    
    const transaction = {
     title,
     amount,
     category,
     type,
    
    }
  
    try {
      await Transaction.create(transaction)
  
      res.status(201).json({ message: 'Transação inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  router.delete('/:transactionId', async (req, res) => {
    try {
       await Transaction.findByIdAndRemove(req.params.transactionId);
 
        return res.send('transaction apagada');
 
    }catch(err) {
        return res.status(400).send({ erro: 'Erro deleting project'});
    }
});

module.exports = router;