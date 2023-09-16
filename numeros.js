var numero;
var resultado;

numero = parseInt(prompt("Ingrese un número menor a 1000:"));

if (numero < 1000) {
    if (numero < 10) {
         resultado = numero * numero;
        alert("El resultado es: " + resultado);
    } else if (numero >= 10 && numero < 100) {
         resultado = numero * 2;
        alert("El resultado es: " + resultado);
        } else {
         resultado = numero - 100;
        alert("El resultado es: " + resultado);
    }
} else {
    alert("Digite un número valido");
}