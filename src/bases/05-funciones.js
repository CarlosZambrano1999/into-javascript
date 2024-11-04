//funciones en js
const saludar = function (nombre){
  return `Hola, ${nombre}`;
}

//funciones de flecha
const saludar2 = (nombre) =>{
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;


console.log(saludar('Goku'));
console.log(saludar2('Vegueta'));
console.log(saludar3('Neymar'));
console.log(saludar4()); 

const getUser = () =>({
  uid:'ABC123',
  username: 'El_Papi1502'
})

const user = getUser();
console.log(user);

//Tarea
const getUserActive=(nombre) => ({
  uid:'ABC567',
  username:nombre
});

const usuarioActivo = getUserActive('Carlos');
console.log(usuarioActivo);