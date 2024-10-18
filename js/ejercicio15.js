/**5. Validación de entrada: Pide al usuario que ingrese un número y verifica si es
realmente un número. Si no lo es, muestra un mensaje de error. */
let numero=prompt("Ingres un numero");
if (!isNaN(numero)) {//en este apartado es donde comprueba si es un numero valido
    console.log("en efecto es un nùmero");
} else {
    console.log("Acaso crees que soy tonto, ingresa un numero");
}