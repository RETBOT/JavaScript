const data = require("./MOCK_DATA.json");

module.exports = {
  getUsers: () => data, // todos los usuarios
  getUser: (id) => { // un solo usuario
    let identificador = Number(id);
    let user = data.filter((person) => person.id === identificador)[0];
    return user;
  },
  createUser: (dataUser) => { // crear un usuario
    let newUser = {
      id: data.length + 1,
      ...dataUser,
    };
    data.push(newUser);
    return newUser;
  },
  updateUser : (id, dataUser) => { // actualizar un usuario
    let identificador = Number(id);
    data[identificador] = dataUser;
    return dataUser;
  },
  deleteUser : (id) => { // actualizar un usuario
    let identificador = Number(id);
    let usuario = data.slice(identificador, 1); // eliminamos el elemento
    return usuario;
  },
};
