const express = require('express');

const { ProductsController } = require('./controller')

const router = express.Router();

module.exports.ProductsAPI = (app) => {
    router
        .get('/', ProductsController.getProducts) // Todos los usuarios 
        .get("/report", ProductsController.generateReport) // Generar archivo exel 
        .get('/:id', ProductsController.getProduct) //Buscar un solo usuario
        .post('/create',  ProductsController.createProduct) // Crear un producto 
        .put('/upd/:id', ProductsController.updateProduct)// Actualizar producto 
        .delete('/del/:id', ProductsController.deleteProduct)// eliminar producto
    app.use('/api/products', router)
};