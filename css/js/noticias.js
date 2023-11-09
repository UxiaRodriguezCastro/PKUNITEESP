const noticiasContainer = document.getElementById('noticiasContainer');

fetch('css/jsons/noticias.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((noticia, index) => {
            const noticiaDiv = document.createElement('div');
            noticiaDiv.classList.add('noticia');
            noticiaDiv.id = `noticia${index + 1}`;

            const img = document.createElement('img');
            img.src = noticia.imagen;
            img.alt = `Noticia ${index + 1}`;

            const h2 = document.createElement('h2');
            h2.textContent = noticia.titulo;

            noticiaDiv.appendChild(img);
            noticiaDiv.appendChild(h2);

            noticiaDiv.addEventListener('click', () => {
                window.location.href = `noticia.html?titulo=${encodeURIComponent(noticia.titulo)}&imagen=${encodeURIComponent(noticia.imagen)}&contenido=${encodeURIComponent(noticia.contenido)}`;
            });

            noticiasContainer.appendChild(noticiaDiv);
        });
    })
    .catch(error => console.error('Error:', error));




