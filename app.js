let opciones = ["piedra", "papel", "tijera"];
let opcionComputador = 0;
let jugador = 0;

let btnPiedra = document.querySelector("#btnpiedra");
let btnPapel = document.querySelector("#btnpapel");
let btnTijera = document.querySelector("#btntijera");

function computador() {
  opcionComputador = Math.floor(Math.random() * 3);
}
function reiniciar() {
  btnPapel.disabled = false;
  btnTijera.disabled = false;
  btnPiedra.disabled = false;
}

// jugador = parseInt(
//   prompt("Ingrese una opción (0 = Piedra, 1 = papel, 2 = Tijera )")
// );
function clickPiedra() {
  jugador = 0;
  btnPapel.disabled = true;
  btnTijera.disabled = true;
  swal("Click on either the button or outside the modal.").then((value) => {
    reiniciar();
  });
  //play();
  // document.querySelector("#btnpapel").disabled = true;
  // document.querySelector("#btntijera").disabled = true;
}
function clickPapel() {
  jugador = 1;
  btnPiedra.disabled = true;
  btnTijera.disabled = true;
  play();
}
function clickTijera() {
  jugador = 2;
  btnPapel.disabled = true;
  btnPiedra.disabled = true;
  play();
}

function controlEleccion() {
  switch (true) {
    case jugador === opcionComputador:
      console.log(
        `Elegiste ${opciones[jugador]} y computador eligió ${opciones[opcionComputador]}`
      );
      console.warn("EMPATE");
      swal("EMPATE");
      break;
    case (jugador === 0 && opcionComputador === 1) ||
      (jugador === 1 && opcionComputador === 2) ||
      (jugador === 2 && opcionComputador === 0):
      console.log(
        `Elegiste ${opciones[jugador]} y computador eligió ${opciones[opcionComputador]}`
      );
      console.error("PERDISTE");
      swal("PERDISTE");
      break;
    case (jugador === 0 && opcionComputador === 2) ||
      (jugador === 1 && opcionComputador === 0) ||
      (jugador === 2 && opcionComputador === 1):
      console.log(
        `Elegiste ${opciones[jugador]} y computador eligió ${opciones[opcionComputador]}`
      );
      console.log("GANASTE");
      swal("GANASTE");

      break;
    default:
      console.log(
        "Las opciones válidas son: (0 = Piedra, 1 = papel, 2 = Tijera )"
      );
      break;
  }
}

//piedra=>Papel = pierde
//piedra=>piedra = empate
//piedra=>tijera = gana

//papel=>Piedra = gana
//papel=>papel = empate
//paple=>tijera = pierde

//tijera=>Piedra = pierde
//tijera=>papel = gana
//tijera=>tijera = empate

function play() {
  computador();
  controlEleccion();
}

//play();
