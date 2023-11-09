const urlParams = new URLSearchParams(window.location.search);
const titulo = decodeURIComponent(urlParams.get('titulo'));
const imagen = decodeURIComponent(urlParams.get('imagen'));
const contenido = decodeURIComponent(urlParams.get('contenido'));

const noticiaTitulo = document.getElementById('noticia-titulo');
const noticiaImagen = document.getElementById('noticia-imagen');
const noticiaContenido = document.getElementById('noticia-contenido');

noticiaTitulo.textContent = titulo;
noticiaImagen.src = imagen;

const contenidoArray = contenido.split('\n');
contenidoArray.forEach(parrafo => {
    const p = document.createElement('p');
    p.textContent = parrafo;
    noticiaContenido.appendChild(p);
});
