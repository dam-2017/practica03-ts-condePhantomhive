import { Cadena } from "./cadena";
import { Operaciones } from "./operaciones";
//César Antonio Pérez González 
let cad= new Cadena;
let ope= new Operaciones;


////////////Cadena////////////
console.log("\nCADENAS\n");
//Verificar si es palíndromo
console.log("Palíndromo: "+cad.esPalindromo("anita lava la tina"));
//Contar las vocales separadas
console.log("Vocales: \n"+cad.countVocales("Abecedario"));
//Contar cuantas letras tiene
console.log("# Letras: "+cad.countLetras("Hola"));
//Contar palabras
console.log("# Palabras: "+cad.countWords("Esta es una prueba"));

console.log("\nOPERACIONES\n");
////////////Operaciones////////////
//Suma
console.log("Suma de 5 y 10 = "+ope.getSuma(5,10));
//Resta
console.log("Resta de 10 y 5 = "+ope.getResta(10,5));
//Factorial
console.log("Factorial de 4= "+ope.getFactorial(4));
//Primo
console.log("El 7 es primo: "+ope.getPrimo(7));
console.log("El 8 es primo: "+ope.getPrimo(8));
