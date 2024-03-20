function insertarTexto(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  numero = Math.floor(Math.random() * numeroMax) + 1;
  if (listaNumerosAleatorios.length == numeroMax) {
    insertarTexto("p", "Se han sorteado todos los números posibles");
  } else {
    if (listaNumerosAleatorios.includes(numero)) {
      console.log(`numero repetido en el listado: ${numero}`);
      return generarNumeroSecreto();
    } else {
      console.log(`nuevo numero: ${numero}`);
      listaNumerosAleatorios.push(numero);

      return numero;
    }
  }
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

// BOTÓN "NUEVO JUEGO"

function restart() {
  limpiarCaja();
  document.getElementById("reiniciar").setAttribute("disabled", "");
  condicionesIniciales();
}

function condicionesIniciales() {
  insertarTexto("h1", "Juego del número secreto actualizado");
  insertarTexto("p", `Adivinar el número secreto del 1 al ${numeroMax}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  console.log(listaNumerosAleatorios);
  console.log(numeroSecreto);
}

// BOTÓN "INTENTAR"

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroSecreto === numeroUsuario) {
    insertarTexto(
      "p",
      `Has acertado el número secreto en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      insertarTexto("p", "El número es menor");
    } else {
      insertarTexto("p", "El número es mayor");
    }
    intentos++;
    limpiarCaja();
  }
}

let numeroSecreto;
let intentos;
let listaNumerosAleatorios = [];
let numeroMax = 10;
condicionesIniciales();
