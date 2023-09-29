// Solicitar al usuario que ingrese una oración
const oracion = prompt("Ingrese una oración:");
if (!oracion) {
  alert("Por favor, ingrese una oración válida.");
} else {
  const palabras = oracion.split(" ");
  const numeroPalabras = palabras.length;
  document.write(`Oración ingresada: ${oracion}<br>`);
  document.write(`Número de palabras: ${numeroPalabras}`);
}