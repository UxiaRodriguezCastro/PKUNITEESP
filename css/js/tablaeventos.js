fetch('css/jsons/eventos_esp.json') // Reemplaza 'ruta/del/json.json' con la ruta correcta
    .then(response => response.json())
    .then(datosJson => {
        // Obtén la referencia al cuerpo de la tabla
        var tablaBody = document.getElementById('tablaBody');

        // Recorre el JSON y crea una fila para cada entrada
        datosJson.forEach(function (torneo, index) {
            var fila = document.createElement('tr');

            // Agrega la clase "grupo1" a las primeras cuatro filas y "grupo2" a las últimas cuatro
            var grupoClass = index < 4 ? 'grupo1' : 'grupo2';
            fila.classList.add(grupoClass);

            var celdaFecha = document.createElement('td');
            celdaFecha.textContent = torneo.fecha;
            fila.appendChild(celdaFecha);

            var celdaTorneo = document.createElement('td');
            celdaTorneo.textContent = torneo.torneo;
            fila.appendChild(celdaTorneo);

            var celdaLugar = document.createElement('td');
            celdaLugar.textContent = torneo.lugar;
            fila.appendChild(celdaLugar);

            var celdaEnlaces = document.createElement('td');
            var enlaceInscripcion = document.createElement('a');
            enlaceInscripcion.href = torneo.inscripcion;
            enlaceInscripcion.textContent = 'Inscripción';
            celdaEnlaces.appendChild(enlaceInscripcion);

            var separador = document.createTextNode('/');
            celdaEnlaces.appendChild(separador);

            var enlaceDirecto = document.createElement('a');
            enlaceDirecto.href = torneo.directo;
            enlaceDirecto.textContent = 'Directo';
            celdaEnlaces.appendChild(enlaceDirecto);

            fila.appendChild(celdaEnlaces);

            // Agrega la fila al cuerpo de la tabla
            tablaBody.appendChild(fila);
            document.getElementById('encabezado1').addEventListener('click', function () {
                mostrarFilas('grupo1');
                var columna = document.getElementById('encabezado1');
                columna.classList.add('activo');
                columna = document.getElementById('encabezado2');
                columna.classList.remove('activo');
                ocultarFilas('grupo2');
            });
            document.getElementById('encabezado1').click();
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
    })
    .catch(error => console.error('Error al obtener el JSON:', error));