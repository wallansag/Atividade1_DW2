import { somar } from "./somar";
import { dividir } from "./dividir";
import { multiplicar } from "./multiplicar";
import { subtrair } from "./subtrair";

let num1 = 20
let num2 = 10

let operação = "-"
let resultado

switch(operação){
    case '+':
    resultado = somar(num1,num2)
    break;
    case '-':
        resultado = subtrair(num1,num2)
        break;
    case '*':
        resultado = multiplicar(num1,num2)
        break;
    case '/':
        if (num2 ===0){
            resultado = "Erro = divisão por zero"
        }else{
        resultado = dividir(num1,num2)    }
        break;
        default:
            resultado = "Erro"
}

console.log(resultado)