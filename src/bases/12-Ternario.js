const activo = true;

//let mensaje= '';

// if(activo){
//     mensaje='Activo';
// }else{
//     mensaje='Inactivo';
// }

const mensaje = (activo) ? 'Activo': 'Inactivo' //if simple
const mensaje2 = !activo && 'Activo';

console.log(mensaje);
console.log(mensaje2);