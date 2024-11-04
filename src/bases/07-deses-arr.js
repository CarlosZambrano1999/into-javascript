//Desestructuración Arreglos
//Asignación Desestructurante

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [,,ps3] = personajes;

console.log(ps3)

const retornaArreglo = ()=>{
  return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras, numeros);

const usesState = (valor) => {
  return [ valor, ()=> {console.log('Hola mundo')}]
};

const [nombre, setNombre] = usesState('Goku');
console.log(nombre);
setNombre();