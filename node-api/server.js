const express = require('express');
const mongoose = require('mongoose');

//iniciando o app
const app = express();

//iniciando DB

mongoose.connect('mongodb+srv://marco:mongo123@tcc-pu7z2.mongodb.net/Productsst?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});


const routes = require('./src/routes');

//Rotas
app.use(routes);

app.listen(3001);
