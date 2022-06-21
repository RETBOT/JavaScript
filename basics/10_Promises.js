/**
 * Promises
 */

const getData = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => {
            resolve({
                nombre : 'RET',
                apellido :'BOT'
            })
        },3000);
    }else{
        reject('No pudimos obtener los datos');
    }
})
const getData2 = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => {
            resolve({
                nombre : 'RET2',
                apellido :'BOT2'
            })
        },3000);
    }else{
        reject('No pudimos obtener los datos 2');
    }
})
console.log("Inicio");
getData(false)
.then((data) => {
    console.log(data);
    return getData2(false)
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
console.log("Fin");


////////////////////////////////////////////////////////////////////////////////////
// async - await
const getData3 = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => {
            resolve({
                nombre : 'RET',
                apellido :'BOT'
            })
        },3000);
    }else{
        reject('No pudimos obtener los datos 3');
    }
})

const getData4 = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => {
            resolve({
                nombre : 'RET2',
                apellido :'BOT2'
            })
        },3000);
    }else{
        reject('No pudimos obtener los datos 4');
    }
})

const main = async () => {
    try{
        let resultado3 = await getData3(true);
        let resultado4 = await getData4(false);
        console.log(resultado3);
        console.log(resultado4);
    }catch(error){
        console.log(error);
    }
};

main()