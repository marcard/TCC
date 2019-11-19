const express = require('express');
const mongoose = require('mongoose');

//iniciando o app
const app = express();

//iniciando DB

mongoose.connect('mongodb://localhost:32769/nodeapi',
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

require('./src/models/Product');



//Rotas
 app.use('/api', require ("./src/routes"));

app.listen(3001);
