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
  updateUser: (id, newValues) => { // actualiza un usuario
    let identificador = Number(id);
    let idx = data.findIndex(dato => dato.id === identificador);
    data[idx].first_name = newValues.first_name;
    data[idx].last_name = newValues.last_name;
    data[idx].email = newValues.email;
    return data;
},
 deleteUser: (id) => { // borra un usuario
  let identificador = Number(id);
  let idx = data.findIndex(dato => dato.id === identificador);
  data.splice(idx,1);
  return data;
},
};
