const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    },

    async create(req, res){
        const {
            rfid,
            name,
            brand,
            description,
            type,
            avatar_url,
            validity
        } = req.body;

        const product = await Product.create({
            rfid,
            name,
            brand,
            description,
            type,
            avatar_url,
            validity
        });

        return res.json(product);
    },

    async delete(req, res){
        const id = req.params.id;

        Product.findByIdAndDelete(id, (err, product) => {
            if(err) {
                return res.status(500).send(err);
            }

            const response = {
                message: "Product successfully deleted",
                id: product._id
            };

            return res.status(200).send(response);
        });
    }
};