document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('encabezado1').addEventListener('click', function () {
        mostrarFilas('grupo1');
        var columna = document.getElementById('encabezado1');
        columna.classList.add('activo');
        columna = document.getElementById('encabezado2');
        columna.classList.remove('activo');
        ocultarFilas('grupo2');
    });

    document.getElementById('encabezado2').addEventListener('click', function () {
        mostrarFilas('grupo2');
        ocultarFilas('grupo1');
        var columna = document.getElementById('encabezado2');
        columna.classList.add('activo');
        columna = document.getElementById('encabezado1');
        columna.classList.remove('activo');
    });


    function mostrarFilas(grupo) {
        var filas = document.getElementsByClassName(grupo);

        for (var i = 0; i < filas.length; i++) {
            filas[i].classList.remove('oculto');
        }
    }

    function ocultarFilas(grupo) {
        var filas = document.getElementsByClassName(grupo);

        for (var i = 0; i < filas.length; i++) {
            filas[i].classList.add('oculto');
        }
    }
});