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
//Rotas
app.get('/', function(req,res){
    res.send("Hello World");
});

app.listen(3001);
