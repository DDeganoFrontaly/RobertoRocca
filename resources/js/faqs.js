export default function faqs(){

let plus = document.getElementsByClassName("modulo_preguntas_frecuentes_pregunta_principal_svg");
if (!plus) { return; }
const contenido = document.getElementsByClassName("modulo_preguntas_frecuentes_info");
if (!contenido) { return; }
const bloque = document.getElementsByClassName("modulo_preguntas_frecuentes_pregunta");
if (!bloque) { return; }

console.log(plus);
for(let i = 0; i < plus.length; i++ ){

    plus[i].addEventListener('click', function(ev) {
	    contenido[i].classList.toggle('block');
	    bloque[i].classList.toggle('no_desplegado');
	    plus[i].classList.toggle('menos');
		plus[i].classList.toggle('change_color');
	})

}

}