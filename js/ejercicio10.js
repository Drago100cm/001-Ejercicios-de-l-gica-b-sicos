/**10. Acceder a un array: Crea un programa que modifique el tercer valor de un
array y luego imprima el array completo. */
let nombres = ['Aida', 'Pablo', 'Sebas', 'Diana', 'Omis'];
let nuevalista=prompt("escriba la palabra ");
console.log("La palabra que cambiara es  " + nombres[2] + " y la cambiara por  " + nuevalista );
nombres[2]=nuevalista;
console.log(nombres);
