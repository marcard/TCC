const express = require('express');
const ProductController = require('../controllers/ProductController');
const routes = express.Router();

routes.get('/products',ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.StorageEvent);
routes.put ('/products/:id', ProductController.update);
routes.delete ('/products/:id', ProductController.destroy);
module.exports = routes;

