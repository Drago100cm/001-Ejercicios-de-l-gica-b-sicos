/* 4. Condicionales: Crea un programa que verifique si un número es positivo,
negativo o cero, e imprima el resultado.*/
let numero=prompt("Ingresa el numero");

if (numero>!0){
    console.log("el numero ",numero," es positivo");
}else if(numero<0){
    console.log("el numero  ", numero, " es negativo");
}else{
    console.log("el numero es igual a: ", numero)
}