fetch('css/jsons/noticias.json')
    .then(response => response.json())
    .then(data => {
        // Cargar información de las dos primeras noticias recomendadas
        document.getElementById('recomendado1-titulo').textContent = data[0].titulo;
        document.getElementById('recomendado1-imagen').src = data[0].imagen;

        document.getElementById('recomendado2-titulo').textContent = data[1].titulo;
        document.getElementById('recomendado2-imagen').src = data[1].imagen;

        // Añadir evento de clic a la primera noticia recomendada
        document.getElementById('recomendado1').addEventListener('click', () => {
            window.location.href = `noticia.html?titulo=${encodeURIComponent(data[0].titulo)}&imagen=${encodeURIComponent(data[0].imagen)}&contenido=${encodeURIComponent(data[0].contenido)}`;
        });

        // Añadir evento de clic a la segunda noticia recomendada
        document.getElementById('recomendado2').addEventListener('click', () => {
            window.location.href = `noticia.html?titulo=${encodeURIComponent(data[1].titulo)}&imagen=${encodeURIComponent(data[1].imagen)}&contenido=${encodeURIComponent(data[1].contenido)}`;
        });
    })
    .catch(error => console.error('Error:', error));
