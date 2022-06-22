const createErrors = require("http-errors");
const debug = require("debug")("app:products-controller");

const { ProductsService } = require("./services");
const { Response } = require("../common/response");

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    // Todos los productos
    try {
      let products = await ProductsService.getAll();
      Response.success(res, 200, "Lista de productos", products);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  getProduct: async (req, res) => {
    // Un solo producto
    try {
      const {
        params: { id },
      } = req;
      let product = await ProductsService.getById(id);
      if (!product) {
        Response.error(res, new createErrors.NotFound());
      } else {
        Response.success(res, 200, `Producto ${id}`, product);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  createProduct: async (req, res) => {
    // Crear un producto
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createErrors.BadRequest());
      } else {
        const insertId = await ProductsService.create(body);
        Response.success(res, 201, "Producto agregado", insertId);
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  updateProduct: async (req, res) => {
    // Actualizar producto
    try {
      //destructuramos los parametros por id y el body
      const {
        params: { id },
      } = req;
      const { body } = req;

      let product = await ProductsService.update(id, body);
      //validamos
      if (!product) {
        Response.error(res, new createError.NotFound());
      } else {
        //mostramos el product recibido
        Response.success(res, 200, `Producto ${id} modificado`, Object(body));
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  deleteProduct: async (req, res) => {
    // Eliminar producto
    try {
      //destructuramos el parametro del id
      const {
        params: { id },
      } = req;
      // almacenamos en la variable producto el id eliminado
      let product = await ProductsService.delet(id);
      //validamos si fue eliminado
      if (product.deletedCount === 1) {
        Response.success(res, 202, `producto ${id} eliminado`, product);
      } else {
        Response.error(res, new createError.NotFound());
      }
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
  generateReport: (req, res) => {
    // Generar reporte en un archivo exel
    try {
      ProductsService.generateReport("Inventario", res);
    } catch (error) {
      debug(error);
      Response.error(res);
    }
  },
};
