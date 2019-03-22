var nome = "Type Script";
console.log("Hello, " + nome);
function dobra(x) {
    return x * 2;
}
var ab = function (numero) { return numero * 2; };
console.log(ab(3));
var numeros = [1, 2, 3, 4];
numeros = numeros.map(function (numero) { return numero * 2; });
console.log(numeros);
var a = 10;
var b = 10;
b = 2;
var c = 10;
c = 2;
function soma(x, y) {
    return x + y;
}
console.log(soma(1));
var estados;
(function (estados) {
    estados[estados["PI"] = 0] = "PI";
    estados[estados["CE"] = 1] = "CE";
    estados[estados["MA"] = 2] = "MA";
})(estados || (estados = {}));
;
for (var estado in estados) {
    console.log(estado);
}
function exibir() {
    var frases = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        frases[_i] = arguments[_i];
    }
    var frase_completa = "";
    for (var _a = 0, frases_1 = frases; _a < frases_1.length; _a++) {
        var frase = frases_1[_a];
        frase_completa += frase;
    }
    console.log(frase_completa);
}
exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
var arrow = function () { return console.log('Olá'); };
arrow();
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var arrays = array.filter(function (x) { return x % 2 == 0; });
console.log(arrays);
//# sourceMappingURL=app.js.map