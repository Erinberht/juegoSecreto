let numeroSecreto = 0;
let intentos = 1;
let intDisponibles = 5;
let numMaximoIntentos = 10;
let numerosJugados = [];

function asignarTexto(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function validarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTexto(
      "p",
      `YOU WIN!, Acertaste en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.querySelector("#iniciar").setAttribute("disabled", "true");
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTexto(
        "p",
        `El numero secreto es menor, tienes ${intDisponibles - 1} ${
          intDisponibles === 1 ? "intento" : "intentos"
        }`
      );
    } else {
      asignarTexto(
        "p",
        `el numero secreto es mayor, tienes ${intDisponibles - 1} ${
          intDisponibles === 1 ? "intento" : "intentos"
        }`
      );
    }
    intentos++;
    intDisponibles--;
    limpiarCaja();
    if (intDisponibles === 0) {
      asignarTexto(
        "p",
        `Agotaste todos tus intentos, el numero secreto era ${numeroSecreto}`
      );
      document.querySelector("#iniciar").setAttribute("disabled", "true");
      document.getElementById("reiniciar").removeAttribute("disabled");
    }
  }
  return;
}
function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let generarNumero = Math.floor(Math.random() * numMaximoIntentos) + 1;

  if (numerosJugados.length == numMaximoIntentos) {
    asignarTexto("p", "Haz sorteados todos los numeros posibles");
  } else {
    if (numerosJugados.includes(generarNumero)) {
      return generarNumeroSecreto();
    } else {
      numerosJugados.push(generarNumero);
      return generarNumero;
    }
  }
}
function condicionesIniciales() {
  asignarTexto("h1", "Juego del numero secreto");
  asignarTexto("p", `Indica un número entre 1 y ${numMaximoIntentos}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  intDisponibles = 5;
}
function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
  document.getElementById("iniciar").removeAttribute("disabled");
}
condicionesIniciales();
