/**5. Comparaciones: Escribe un programa que compare dos números y diga cuál
es mayor o si son iguales. */
let numero1=parseFloat(prompt("ingrese el primer número"));
let numero2=parseFloat(prompt("ingrese el segundo número"));
console.log("los numeros son", numero1," y ", numero2);

if (numero1>numero2){
    console.log("El numero ",numero1, " es mayor");
}else if(numero1<numero2){
    console.log("El numero ",numero2, " es mayor");
}else{
    console.log("los numeros son iguales");

}
