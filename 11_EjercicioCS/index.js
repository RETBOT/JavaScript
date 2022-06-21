// Para ejecutar el index se utiliza el node index.js, desde la carpeta en donde se encuentra el archivo
const axios = require("axios");
const fs = require('fs').promises;
const path = require('path')

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;
  let characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
      };
    })
    .map((personaje) => Object.values(personaje).join(","))
    .join('\n')
 // Escribe en el archivo data.csv con los nombres de los personajes 
  await fs.writeFile(path.join(__dirname, 'data.csv'),'id,name,status,species\n'+characters)
  // console.log(path.join(__dirname, 'data.csv'));
  //console.log(characters);
};

main();
