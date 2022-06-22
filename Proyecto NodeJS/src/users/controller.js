const createErrors = require("http-errors");
const debug = require("debug")("app:products-users-controller");

const { UsersService } = require("./services");
const { Response } = require("../common/response");

module.exports.UsersController = {
  getUsers: async (req, res) => {
    // Todos los usuarios
    try {
      let users = await UsersService.getAll();
      Response.success(res, 200, "Lista de usuarios", users);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  getUser: async (req, res) => {
    // Un solo usuario
    try {
      const {
        params: { id },
      } = req;
      let user = await UsersService.getById(id);
      if (!user) {
        Response.error(res, new createErrors.NotFound());
      } else {
        Response.success(res, 200, `User ${id}`, user);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  createUser: async (req, res) => {
    // Crear un usuario
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createErrors.BadRequest());
      } else {
        const insertId = await UsersService.create(body);
        Response.success(res, 201, "Usuario agregado", insertId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  updateUser: async (req, res) => {
    // Actualizar Usuario
    try {
      //destructuramos los parametros por id y el body
      const {
        params: { id },
      } = req;
      const { body } = req;

      let user = await UsersService.update(id, body);
      //validamos
      if (!user) {
        Response.error(res, new createError.NotFound());
      } else {
        //mostramos el user recibido
        Response.success(res, 200, `Usuario ${id} modificado`, Object(body));
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  deleteUser: async (req, res) => {
    // Eliminar Usuario
    try {
      //destructuramos el parametro del id
      const {
        params: { id },
      } = req;
      // almacenamos en la variable usuario el id eliminado
      let user = await UsersService.delet(id);
      //validamos si fue eliminado
      if (user.deletedCount === 1) {
        Response.success(res, 202, `Usuario ${id} eliminado`, user);
      } else {
        Response.error(res, new createError.NotFound());
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};
