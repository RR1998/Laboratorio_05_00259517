var cadena = prompt("ingrese la palabra");

var aux = cadena.split("").reverse().join("");

aux = aux

console.log(aux);
if(aux == cadena){
    console.log("es palindromo");
}

else{
    console.log("no es palindromo;")
}