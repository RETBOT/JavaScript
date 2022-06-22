const express = require('express');

const { UsersController } = require('./controller')

const router = express.Router();

module.exports.UsersAPI = (app) => {
    router
        .get('/', UsersController.getUsers) // Todos los usuarios 
        .get('/:id', UsersController.getUser) //Buscar un solo usuario
        .post('/create',  UsersController.createUser) // Crear un producto 
        .put('/upd/:id', UsersController.updateUser)// Actualizar producto 
        .delete('/del/:id', UsersController.deleteUser)// eliminar producto
    app.use('/api/users', router)
};