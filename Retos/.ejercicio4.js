// Solicitar al usuario una serie de números separados por comas
const numerosTexto = prompt("Ingrese una serie de números separados por comas:");
const numeros = numerosTexto.split(",").map(Number);
if (numeros.some(isNaN)) {
  alert("Por favor, ingrese números válidos separados por comas.");
} else {
  const numeroMasGrande = Math.max(...numeros);
  alert(`El número más grande es: ${numeroMasGrande}`);
}
