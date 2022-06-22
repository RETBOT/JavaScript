const { Database } = require('../database');
const { ObjectId } = require('mongodb');
const { ProductsUtils } = require('./utils')
const COLLECTION = "products";

const getAll = async () => { // Todos los productos
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => { // Buscar un producto
    const collection = await Database(COLLECTION);
    return collection.findOne({_id : ObjectId(id) }); 
}

const create = async (product) => { // Crear producto 
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;
}

 const update = async (id, product) => { // Actualizar producto
      //acceso a la base de datos
    const collection = await Database(COLLECTION);
    //modificamos el objeto seleccionado
    let resultP = await collection.updateOne(
    { _id: ObjectId(id) },
    { $set: { ...product } },
    { upsert: true }
    );
    //mostramos resultado
    return resultP;
} 
  
  const delet = async (id) => { // Eliminar producto
    //acceso a base de datos
    const collection = await Database(COLLECTION);
     //eliminamos el objeto con el id seleccionad
    let result = await collection.deleteOne({ _id: ObjectId(id) });
    //mostramos resultado
    return result;
} 
const generateReport = async (name, res) => { // Generar reporte en un archivo exel
    let products = await getAll();
    ProductsUtils.excelGenerator(products, name, res);
}

module.exports.ProductsService = {
    getAll,
    getById,
    create,
    generateReport,
    update,
    delet,
}