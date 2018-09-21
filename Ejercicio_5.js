var numero = prompt("ingrese un numero");

if (numero < 0 || numero == 0){
    console.log("el numero debe no debe de ser negativo ni cero");
}
numero = numero*Math.PI;
console.log(Math.pow(numero,2));