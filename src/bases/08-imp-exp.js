//import {heroes} from './data/heroes';
//import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

//console.log(owners);


// const getHeroeById = (id)=>{
//   return heroes.find(( heroe) =>{
//     if(heroe.id === id){
//       return true;
//     }else{
//       return false;
//     }
//   });
// }

//find devuelve solo 1
export const getHeroeById = (id) => heroes.find((heroe)=> heroe.id===id);

//console.log( getHeroeById(2));

//filter devuelve mas de uno
export const getHeroesByOwner = (owner) => heroes.filter((heroe)=> heroe.owner===owner);

//console.log(getHeroesByOwner('DC'));