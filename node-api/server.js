const express = require('express');

//iniciando o app
const app = express();


//Rotas
app.get('/', function(req,res){
    res.send("Hello World");
});

app.listen(3001);
