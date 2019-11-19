const express = require('express');
const routes= express.Router();

routes.get('/', function(req,res){
    Product.create({
        title: 'React Native',
        description: 'Fazer os bag foda',
        url:'www.google.com'
    });
        return res.send("Hello World");
});

module.exports = routes;

