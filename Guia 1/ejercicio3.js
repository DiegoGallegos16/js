// Solicitar al usuario una contraseña
const contraseña = prompt("Ingrese una contraseña:");
function verificarContraseña(contraseña) {

  if (contraseña.length < 8) {
    return false;
  }
  if (!/[A-Z]/.test(contraseña)) {
    return false;
  }
  if (!/\d/.test(contraseña)) {
    return false;
  }
  if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(contraseña)) {
    return false;
  }

  return true;
}
if (verificarContraseña(contraseña)) {
  alert("La contraseña es válida.");
} else {
  alert("La contraseña no cumple con los criterios de seguridad.");
}
