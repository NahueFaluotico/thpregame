class Calculadora {
    num1:number;
    num2:number;
    constructor(valor:num1, valor2:num2){
        console.log('Iniciando calculadora..');
        this.num1 = valor;
        this.num2 = valor2;

        console.log(this.num1)
        console.log(this.num2)
    }
    suma(){
        return this.num1 + this.num2;
    }
}

let calcA = new Calculadora(10,15);
console.log(calcA.suma())