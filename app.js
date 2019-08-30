var Calculadora = /** @class */ (function () {
    function Calculadora(valor, valor2) {
        console.log('Iniciando calculadora..');
        this.num1 = valor;
        this.num2 = valor2;
        console.log(this.num1);
        console.log(this.num2);
    }
    Calculadora.prototype.suma = function () {
        return this.num1 + this.num2;
    };
    return Calculadora;
}());
var calcA = new Calculadora(10, 15);
console.log(calcA.suma());
