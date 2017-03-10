"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena() {
        this.a = 0;
        this.e = 0;
        this.i = 0;
        this.o = 0;
        this.u = 0;
    }
    Cadena.prototype.esPalindromo = function (cad) {
        return cad == cad.split(' ').reverse().join('');
    };
    Cadena.prototype.countVocales = function (cad) {
        for (var i = 0; i < cad.length; i++) {
            if (cad.charAt(i) == "a" || cad.charAt(i) == "A") {
                this.a++;
            }
            if (cad.charAt(i) == "e" || cad.charAt(i) == "E") {
                this.e++;
            }
            if (cad.charAt(i) == "i" || cad.charAt(i) == "I") {
                this.i++;
            }
            if (cad.charAt(i) == "o" || cad.charAt(i) == "O") {
                this.o++;
            }
            if (cad.charAt(i) == "u" || cad.charAt(i) == "U") {
                this.u++;
            }
        }
        var c = "Total de a's: " + this.a + "\nTotal de e's: " + this.e
            + "\nTotal de i's: " + this.i + "\nTotal de o's: " + this.o + "\nTotal de u's: " + this.u;
        return c;
    };
    Cadena.prototype.countLetras = function (cad) {
        var aux;
        aux = cad.split(' ').join('');
        return aux.length;
    };
    Cadena.prototype.countWords = function (cad) {
        var a;
        a = cad.split(" ");
        return a.length;
    };
    return Cadena;
}());
exports.Cadena = Cadena;
/*
1) Verificar si es palíndromo
2) Contar las vocales separadas
3) Contar cuantas letras tiene
4)Contar palabras hay
*/ 
