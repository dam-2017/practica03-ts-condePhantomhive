"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones() {
    }
    Operaciones.prototype.getSuma = function (n1, n2) {
        return n1 + n2;
    };
    Operaciones.prototype.getResta = function (n1, n2) {
        return n1 - n2;
    };
    Operaciones.prototype.getFactorial = function (n1) {
        var f = 1;
        for (var i = 1; i <= n1; i++) {
            f = f * i;
        }
        return f;
    };
    Operaciones.prototype.getPrimo = function (n1) {
        var count = 0;
        if (n1 == 0 || n1 == 1) {
            return false;
        }
        for (var i = 1; i <= n1; i++) {
            if (n1 % i == 0) {
                count += 1;
            }
        }
        if (count > 2) {
            return false;
        }
        else {
            return true;
        }
    };
    return Operaciones;
}());
exports.Operaciones = Operaciones;
/*
-Sumar
-Resta
-Factorial
-Primo
*/ 
