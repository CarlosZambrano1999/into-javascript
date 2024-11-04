import { getHeroeById } from './bases/08-imp-exp';

// const promesa = new Promise(( resolve, reject) =>{
//     setTimeout( () =>{
//         //resolve();
//         const heroe = getHeroeById(2);
//         //resolve(heroe);
//         reject('no se puede encontar el heroe');
//     }, 2000)
// });

// promesa.then((heroe)=>{
//     console.log('heroe', heroe);
// }).catch(err => console.warn(err));

const getHeroeByIdAsync = ( id ) =>{
     return new Promise(( resolve, reject) =>{
     setTimeout( () =>{
         const heroe = getHeroeById(2);
         if (heroe) {
            resolve(heroe);
         }else{
            reject('No se pudo encontrar el héroe');
         }
     }, 2000)
 });
}

getHeroeByIdAsync(3)
    .then(heroe => console.log('Heroe', heroe))
    .catch(console.warn);