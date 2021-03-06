// instalar 
// npm i express
// npm i -D nodemon

// nodemon index.js // para hacer cambios sin tener que reiniciar el servidor
/** y cambiar el scripts en package
 * "scripts": {
    "dev": "nodemon index.js"
   },
 */
// usar al final npm run dev
const express = require('express');

const Service = require('./src/service');

const app = express();
const port = 3000;

app.use(express.json());

// Lista de todos los usuarios 
app.get("/", (req,res) => {
  res.json({
    message : "Lista de usuarios",
    body : Service.getUsers(),
  });
});

// Obtener solo un usuario
app.get("/:id", (req,res) => {
    let {params : {id}} = req;
    let user = Service.getUser(id);
    res.json({
      message : `Usuario ${id}`,
      body : user,
    });
  });

// agregar un usuario
app.post('/', (req,res) => {
    let { body : newUser} = req;
    let user =  Service.createUser(newUser);
    res.status(201).json({
        message : 'Usuario creado',
        body : user
    })
  });

  // modificar usuario
  app.put('/:id', (req,res) => {
    let {
        params: {id},
        body : newValues
    } = req;
    res.json(
        {
            message : `Actualiza usuario ${id}`,
            body: Service.updateUser(id, newValues),
        }
    );
});

// eliminar usuario
app.delete('/:id', (req,res) => {
  let {
      params: {id}
  } = req;
  res.json(
      {
          message : `Borra usuario ${id}`,
          body: Service.deleteUser(id),
      }
  );
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});