
let fullImg, x, fullImgBox;

document.addEventListener("DOMContentLoaded", function () {
	fullImg = document.getElementById("fullimagen");
	x = document.getElementById("myTopnav");
	fullImgBox = document.getElementById("fullimgbox");
	empezando();
});
function empezando() {
	var filas = document.getElementsByClassName('grupo1');
	var columna = document.getElementById('encabezado1');
	columna.classList.add('activo');

	for (var i = 0; i < filas.length; i++) {
		filas[i].classList.remove('oculto');
	}

	var filas = document.getElementsByClassName('grupo2');
	var columna = document.getElementById('encabezado2');
	columna.classList.remove('activo');
	for (var i = 0; i < filas.length; i++) {
		filas[i].classList.add('oculto');
	}
};


function menuFunction() {
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
function openFullImg(reference) {
	fullImgBox.style.display = "flex";
	fullImg.src = reference;
	document.body.style.overflow = "hidden";
}
function closeImg() {
	document.body.style.overflow = "auto";
	fullImgBox.style.display = "none";
	fullImgBox2.style.display = "none";
}

