/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales (texto){
  let numeroVocales =0
  if(typeof texto === 'string'){
    if(texto && texto.length){
      numeroVocales = texto.match(/[aeiou]/gi)
      if(numeroVocales === null){
        return 0
      }
      return numeroVocales.length
      
    }
    if(texto.length === 0){
      return 0
    }
  } 
  else{
    return -1
  }
      
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo(url= 'https://github.com/vicenteloroxana/TP-N-1-NodeJs.git') {
  return url
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados 
contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad 
llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad 
texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario 
retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => class Texto {

  static contadorInstancias
  constructor(texto){
      this.texto = texto;
      !Texto.contadorInstancias ? Texto.contadorInstancias = 1 : Texto.contadorInstancias++
  }

  contadorPalabras(){
    if (typeof this.texto !== 'string'){
      return -1
    } else {
      let palabras = this.texto.split(' ')
      return (this.texto.trim() !=='') ? palabras.length : 0
    } 
  }

  hayNumeros(){
    let existingCharacter = false
    if (typeof this.texto !== 'string'){
      return -1
    } else {
      let caracteres = this.texto.trim().split('')
      for (const caracter of caracteres) {
        if (isNaN(parseInt(caracter)) ) {
          existingCharacter = false
        }else{
          existingCharacter = true
        }
      }
    } 
    return existingCharacter
  }
}

module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
