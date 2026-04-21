let images=[
"images/foto1.jpg",
"images/foto2.jpg",
"images/foto3.jpg",
"images/foto4.jpg",
"images/foto5.jpg",
"images/foto6.jpg"
];

let i=0;

let iniciado=false;

let texto=
"Sé que cometí errores... pero me gustaría pedirte una oportunidad para volver a intentarlo.";

let pos=0;


/* PANTALLA 1 -> 2 */
function iniciarSorpresa(){

if(iniciado) return;

iniciado=true;

document.getElementById("audioRomantico").play();

document.getElementById("pantalla1").style.display="none";

document.getElementById("pantalla2").style.display="block";

maquinaEscribir();

}


/* TEXTO MAQUINA */
function maquinaEscribir(){

if(pos<texto.length){

document.getElementById("typing").innerHTML += texto.charAt(pos);

pos++;

setTimeout(maquinaEscribir,80);

}else{

document.getElementById("continuar2").style.display="block";

}

}


/* PANTALLA 2 -> 3 */
function mostrarFotos(){

document.getElementById("pantalla2").style.display="none";

document.getElementById("pantalla3").style.display="block";

setInterval(cambiarFoto,3000);

setInterval(crearCorazon,500);

}


/* SLIDESHOW */
function cambiarFoto(){

i=(i+1)%images.length;

document.getElementById("slideshow").src=images[i];

}


/* PANTALLA 3 -> 4 */
function mostrarFinal(){

document.getElementById("pantalla3").style.display="none";

document.getElementById("pantalla4").style.display="block";

}


/* BOTON SI */
function perdono(){

document.getElementById("mensajeFinal").innerHTML=
"Gracias mi amor... prometo hacerlo mejor ❤️";

}


/* BOTON NO MOVIL */
let botonNo=document.getElementById("noBtn");

function moverBoton(){

let x=Math.random()*(window.innerWidth-150);

let y=Math.random()*(window.innerHeight-80);

botonNo.style.position="fixed";

botonNo.style.left=x+"px";

botonNo.style.top=y+"px";

}

botonNo.addEventListener("touchstart",function(e){

e.preventDefault();

moverBoton();

});

botonNo.addEventListener("click",function(e){

e.preventDefault();

moverBoton();

});


/* CORAZONES */
function crearCorazon(){

let corazon=document.createElement("div");

corazon.classList.add("heart");

corazon.innerHTML="❤️";

corazon.style.left=Math.random()*100+"vw";

document.body.appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},8000);

}