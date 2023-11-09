
const guiasContainer = document.querySelector('.guias .grid-container');

fetch('css/jsons/videos.json').then(response => response.json())
    .then(data => {
        const columns = [
            document.getElementById('column-1'),
            document.getElementById('column-2'),
            document.getElementById('column-3')
        ];

        data.forEach((guia, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            const h3 = document.createElement('h3');
            h3.textContent = guia.titulo;

            const img = document.createElement('img');
            img.src = guia.imagen;
            img.alt = `Imagen ${index + 1}`;

            // Añade el evento onclick
            itemDiv.onclick = function () {
                window.location.href = guia.url;
            }

            itemDiv.appendChild(h3);
            itemDiv.appendChild(img);

            columns[index % 3].appendChild(itemDiv);
        });
    })
    .catch(error => console.error('Error:', error));
