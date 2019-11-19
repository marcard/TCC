const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async indexe(req, res){
        const products = await Product.find();

        return res.json(products)
    },
};