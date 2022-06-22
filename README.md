# dependencias instaladas
## npm i express mongodb http-errors dotenv debug excel4node
# Dependencia para desarrollo 
## npm i -D nodemon 
# En el archivo package.json
## modificamos los scripts (por default esta el test, lo borramos y agregamos el siguiente)
"scripts": { 
    "dev": "nodemon index.js" 
    },
# Despues para iniciar el proyecto utilizamos el siguiente comando
## npm run dev

# URL de mi servidor : https://curso-nodejs-retbot.herokuapp.com/