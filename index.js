const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000


app.use(
    express.urlencoded({
        extended:true,
    }),
);

app.use(express.json());

const personRoutes = require('./routes/personRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use('/person', personRoutes)
app.use('/transaction', transactionRoutes)



app.get('/', (req, res) => {
   
    res.json({message:'oi mundo'})
})

mongoose.connect('mongodb+srv://marlon:marlonsantana4@cluster0.mdwfh.mongodb.net/apiRestfullbd?retryWrites=true&w=majority')
.then(() => {
    console.log("conectou ao mongodb")
    app.listen(port,() => {
        console.log('loggado na porta 3000')
    });
})
.catch((error) => console.log(error))



