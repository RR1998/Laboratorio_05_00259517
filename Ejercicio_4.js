var numero = prompt("ingrese un numero");
var aux = "";

    aux = aux.concat(numero%2);
    console.log(numero);
    numero = parseInt(Math.floor(numero/2));
    console.log(numero);
while(numero/2 != 0 || numero/2 != 1){
    aux = aux.concat(numero%2);
    numero = Math.floor(numero/2);
    console.log("aiuda!")
}
    aux = aux.concat(numero%2);
console.log(aux.split("").reverse().join(""));