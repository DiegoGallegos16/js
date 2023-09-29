//ingresar estatura y mostrar peso
const estatura = parseFloat(prompt("Ingrese su estatura en metros (por ejemplo, 1.75):"));

const peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));

const imc = peso / (estatura * estatura);

let categoria = "";
if (imc < 18.5) {
  categoria = "Bajo Peso";
} else if (imc >= 18.5 && imc <= 24.9) {
  categoria = "Peso Normal";
} else {
  categoria = "Sobrepeso";
}

document.write(`Su IMC es: ${imc.toFixed(2)}<br>`);
document.write(`Categoría: ${categoria}`);