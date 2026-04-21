let images = [
  "images/foto1.jpg",
  "images/foto2.jpg",
  "images/foto3.jpg",
  "images/foto4.jpg",
  "images/foto5.jpg",
  "images/foto6.jpg"
];

let i = 0;
let iniciado = false;

let texto =
"Han pasado varios días, horas y segundos en los que no he podido escuchar un “te amo” de tu parte, y siento que todo fue por mi culpa, por no haber sabido valorar el hermoso amor que me has dado y por no ser el hombre que te prometí ser. Hoy me doy cuenta de que este hombre que tienes frente a ti está triste, con el corazón roto, y con un profundo deseo de volver a escuchar ese “te amo” de tus hermosos labios, esos labios que han sido testigos de la conexión tan especial entre nuestros corazones. Taty, te extraño mucho. Desearía que la distancia se acorte para poder decirte que te amo, porque mis acciones no siempre han sabido reflejar todo el amor que siento por ti. Reconozco que he fallado. No supe apreciar tu amor como merecías, pero he entendido que a una mujer tan valiosa como tú debo respetarla y cuidarla incluso con mi último respiro, porque es lo mínimo que mereces. Sé que mis errores han creado una distancia entre tú y yo, como un abismo. Sin embargo, quiero llenar ese abismo de amor para construir un puente que me lleve nuevamente a ti. Solo te pido la oportunidad de intentarlo juntos, de reconstruir lo nuestro, paso a paso. Quisiera que me digas si estás dispuesta a tomar mi mano otra vez y construir juntos ese puente hacia la felicidad. No quiero recorrer solo este camino de la vida; desde que te conocí, una parte de mí te pertenece. Quiero que seas esa persona con la que incluso las etapas más difíciles de la vida se sientan más llevaderas. Mi amor por ti forma parte de mi día a día, de mi vida, y me encantaría poder ser también parte de la tuya.";

let pos = 0;

/* PANTALLA 1 -> 2 */
function iniciarSorpresa() {
  if (iniciado) return;

  iniciado = true;

  document.getElementById("audioRomantico").play();
  document.getElementById("pantalla1").style.display = "none";
  document.getElementById("pantalla2").style.display = "block";

  maquinaEscribir();
}

/* TEXTO MÁQUINA */
function maquinaEscribir() {
  if (pos < texto.length) {
    document.getElementById("typing").innerHTML += texto.charAt(pos);
    pos++;
    setTimeout(maquinaEscribir, 80);
  } else {
    document.getElementById("continuar2").style.display = "block";
  }
}

/* PANTALLA 2 -> 3 */
function mostrarFotos() {
  document.getElementById("pantalla2").style.display = "none";
  document.getElementById("pantalla3").style.display = "block";

  setInterval(cambiarFoto, 3000);
  setInterval(crearCorazon, 500);
}

/* SLIDESHOW */
function cambiarFoto() {
  i = (i + 1) % images.length;
  document.getElementById("slideshow").src = images[i];
}

/* PANTALLA 3 -> 4 */
function mostrarFinal() {
  document.getElementById("pantalla3").style.display = "none";
  document.getElementById("pantalla4").style.display = "block";
}

/* BOTÓN SI */
function perdono() {
  document.getElementById("mensajeFinal").innerHTML =
    "Gracias mi amor... prometo hacerlo mejor ❤️";
}

/* BOTÓN NO MOVIL */
window.onload = function () {
  let botonNo = document.getElementById("noBtn");

  function moverBoton() {
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 80);

    botonNo.style.position = "fixed";
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";
  }

  botonNo.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moverBoton();
  });

  botonNo.addEventListener("click", function (e) {
    e.preventDefault();
    moverBoton();
  });
};

/* CORAZONES */
function crearCorazon() {
  let corazon = document.createElement("div");
  corazon.classList.add("heart");
  corazon.innerHTML = "❤️";
  corazon.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 8000);
}