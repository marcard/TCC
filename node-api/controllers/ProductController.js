const Product = require('../src/Models/Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();

        return res.json(products)
    },
};