//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
  }
  
  const {nombre,edad, clave} = persona;
  
  // console.log(persona.nombre);
  console.log(nombre);
  // console.log(persona.edad);
  console.log(edad);
  // console.log(persona.clave);
  console.log(clave);
  
  const retornaPersona = (usuario) => {
    console.log(usuario);
  }
  
  const userContext = ({nombre, edad, rango = 'Capitán', clave}) => {
    //console.log(nombre, edad, rango);
    return {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3434
      }
    }
  }
  
  
  
  retornaPersona(persona);
  
  const {nombreClave, anios, latlng:{lat, lng}} = userContext(persona);
  console.log(nombreClave, anios);
  console.log(lat, lng);