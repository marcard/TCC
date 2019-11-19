const express = require('express');
const mongoose = require('mongoose');


//iniciando o app
const app = express();
app.use(express.json());

//iniciando DB

mongoose.connect('mongodb+srv://marco:mongo123@tcc-pu7z2.mongodb.net/Productsst?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});




//Rotas
app.use("/api",require('./src/routes'));

app.listen(3001);
