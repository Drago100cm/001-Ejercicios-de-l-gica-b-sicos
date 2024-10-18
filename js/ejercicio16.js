/**6. Palíndromos: Pide al usuario ingresar una palabra y determina si es un
palíndromo (se lee igual al derecho y al revés). */
let palabra=prompt(String ("ingres alguna palabra"));
palabra=palabra.replace(/\s/g,"").toLowerCase();//.replace(/\s/g,"") es para que elimine todos los espacios
let alrevez;
alrevez=palabra.split("").reverse().join("");
console.log(alrevez)
if (palabra==alrevez){
    console.log("es palindromo");
}else{
    console.log("no es polindromo");
}