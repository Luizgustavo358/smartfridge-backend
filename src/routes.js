const { Router } = require('express');
const axios = require('axios');

const ProductsController = require('./controllers/ProductsController');

const routes = Router();

routes.get('/products', ProductsController.index);
routes.post('/products', ProductsController.create);
routes.delete('/products/:id', ProductsController.delete);

routes.get('/productrfid/:id', ProductsController.getRFID);
routes.post('/productrfid', ProductsController.createRFID);

module.exports = routes;