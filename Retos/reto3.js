<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Propina</title>
</head>
<body>
    <h1>Calculadora de Propina</h1>
    <label for="montoBoleta">Monto de la Boleta (CLP):</label>
    <input type="number" id="montoBoleta" placeholder="Ingrese el monto de la boleta" required>
    <br>
    <label for="porcentajePropina">Porcentaje de Propina:</label>
    <select id="porcentajePropina">
        <option value="10">10%</option>
        <option value="15">15%</option>
        <option value="20">20%</option>
    </select>
    <br>
    <button id="calcularBtn">Calcular</button>
    <br>
    <p>Resultado:</p>
    <p id="resultado"></p>

    <script src="app.js"></script>
</body>
</html>

// Obtener referencias a los elementos del DOM
const montoBoletaInput = document.getElementById("montoBoleta");
const porcentajePropinaSelect = document.getElementById("porcentajePropina");
const calcularBtn = document.getElementById("calcularBtn");
const resultadoP = document.getElementById("resultado");

// Agregar un evento click al botón de calcular
calcularBtn.addEventListener("click", () => {
    // Obtener el monto de la boleta y el porcentaje de propina seleccionado
    const montoBoleta = parseFloat(montoBoletaInput.value);
    const porcentajePropina = parseFloat(porcentajePropinaSelect.value);

    // Validar que se ingresó un número válido y se seleccionó un porcentaje válido
    if (isNaN(montoBoleta) || isNaN(porcentajePropina)) {
        resultadoP.textContent = "Por favor, ingrese un monto válido y seleccione un porcentaje de propina válido.";
    } else {
        // Calcular la propina y el total a pagar
        const propina = (montoBoleta * porcentajePropina) / 100;
        const totalPagar = montoBoleta + propina;

        // Mostrar el resultado en pantalla
        resultadoP.textContent = `Monto de la propina: CLP ${propina.toFixed(2)} - Total a pagar: CLP ${totalPagar.toFixed(2)}`;
    }
});