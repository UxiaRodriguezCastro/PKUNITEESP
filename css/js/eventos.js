fetch('css/jsons/eventos_int.json')
    .then(response => response.json())
    .then(data => {
        const eventosContainer = document.getElementById('eventosContainer');
        data.forEach(evento => {
            const eventoDiv = document.createElement('div');
            eventoDiv.classList.add('evento');

            const imageneventoDiv = document.createElement('div');
            imageneventoDiv.classList.add('imagenevento');
            const imagen = document.createElement('img');
            imagen.src = evento.imagen;
            imagen.alt = evento.titulo;
            imageneventoDiv.appendChild(imagen);

            const informacionDiv = document.createElement('div');
            informacionDiv.classList.add('informacion');

            const tituloDiv = document.createElement('div');
            tituloDiv.classList.add('titulo');
            tituloDiv.textContent = evento.titulo;

            const lugarDiv = document.createElement('div');
            lugarDiv.classList.add('lugar');
            lugarDiv.textContent = `Lugar: ${evento.lugar}`;

            const fechaDiv = document.createElement('div');
            fechaDiv.classList.add('fecha');
            fechaDiv.textContent = `Fecha: ${evento.fecha}`;

            const descripcionDiv = document.createElement('div');
            descripcionDiv.classList.add('descripcion');
            descripcionDiv.textContent = evento.descripcion;

            const botonDiv = document.createElement('div');
            botonDiv.classList.add('boton');
            botonDiv.textContent = 'Más Información';

            informacionDiv.appendChild(tituloDiv);
            informacionDiv.appendChild(lugarDiv);
            informacionDiv.appendChild(fechaDiv);
            informacionDiv.appendChild(descripcionDiv);
            informacionDiv.appendChild(botonDiv);

            eventoDiv.appendChild(imageneventoDiv);
            eventoDiv.appendChild(informacionDiv);

            eventosContainer.appendChild(eventoDiv);
        });
    })
    .catch(error => console.error('Error:', error));
