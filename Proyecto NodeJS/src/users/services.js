const { Database } = require('../database');
const { ObjectId } = require('mongodb');
const COLLECTION = "users";

const getAll = async () => { // Todos los usuarios
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => { // Buscar un usuario
    const collection = await Database(COLLECTION);
    return collection.findOne({_id : ObjectId(id) }); 
}

const create = async (user) => { // Crear usuario 
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(user);
    return result.insertedId;
}

 const update = async (id, user) => { // Actualizar usuario
      //acceso a la base de datos
    const collection = await Database(COLLECTION);
    //modificamos el objeto seleccionado
    let resultP = await collection.updateOne(
    { _id: ObjectId(id) },
    { $set: { ...user } },
    { upsert: true }
    );
    //mostramos resultado
    return resultP;
} 
  
  const delet = async (id) => { // Eliminar usuario
    //acceso a base de datos
    const collection = await Database(COLLECTION);
     //eliminamos el objeto con el id seleccionad
    let result = await collection.deleteOne({ _id: ObjectId(id) });
    //mostramos resultado
    return result;
} 

module.exports.UsersService = {
    getAll,
    getById,
    create,
    update,
    delet,
}