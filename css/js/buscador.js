function buscarh2() {
    var input = document.getElementById('searchInput');
    var button = document.getElementById('vertodo');
    button.innerHTML = "Ver todo"
    var filter = input.value.toUpperCase();
    var noticias = document.getElementById('noticiasContainer');
    var divsNoticias = noticias.getElementsByClassName('noticia');

    for (var i = 0; i < divsNoticias.length; i++) {
        var h2 = divsNoticias[i].getElementsByTagName('h2')[0];
        var txtValue = h2.textContent || h1.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            divsNoticias[i].style.display = "";
        } else {
            divsNoticias[i].style.display = "none";
        }
    }
}

function verh2() {
    var input = document.getElementById('searchInput');
    var button = document.getElementById('vertodo');
    button.innerHTML = "Borrar"
    input.value = "";

    var noticias = document.getElementById('noticiasContainer');
    var divsNoticias = noticias.getElementsByClassName('noticia');

    for (var i = 0; i < divsNoticias.length; i++) {
        var h2 = divsNoticias[i].getElementsByTagName('h2')[0];
        var txtValue = h2.textContent || h1.innerText;

        divsNoticias[i].style.display = "";

    }
}


function buscarh3() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var button = document.getElementById('vertodo');
    button.innerHTML = "Ver todo"
    var guiasContainer = document.getElementById('guiasContainer');
    var guias = guiasContainer.getElementsByClassName('item');

    // Filtrar y reorganizar
    for (var i = 0; i < guias.length; i++) {
        var h3 = guias[i].getElementsByTagName('h3')[0];
        var txtValue = h3.textContent || h3.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            guias[i].style.display = "block";
        } else {
            guias[i].style.display = "none";
        }
    }

    // Reorganizar columnas
    var columns = document.getElementsByClassName('column');
    for (var i = 0; i < columns.length; i++) {
        var guiasEnColumna = columns[i].getElementsByClassName('item');
        var visibleGuides = Array.from(guiasEnColumna).filter(guia => guia.style.display !== 'none');

        if (visibleGuides.length === 0) {
            columns[i].style.display = 'none';
        } else {
            columns[i].style.display = 'block';
        }
    }

}


function verh3() {
    var input = document.getElementById('searchInput');
    input.value = "";
    var button = document.getElementById('vertodo');
    button.innerHTML = "Borrar"
    var guiasContainer = document.getElementById('guiasContainer');
    var guias = guiasContainer.getElementsByClassName('item');

    // Filtrar y reorganizar
    for (var i = 0; i < guias.length; i++) {
        var h3 = guias[i].getElementsByTagName('h3')[0];
        var txtValue = h3.textContent || h3.innerText;


        guias[i].style.display = "block";

    }

    // Reorganizar columnas
    var columns = document.getElementsByClassName('column');
    for (var i = 0; i < columns.length; i++) {
        var guiasEnColumna = columns[i].getElementsByClassName('item');
        var visibleGuides = Array.from(guiasEnColumna).filter(guia => guia.style.display !== 'none');

        if (visibleGuides.length === 0) {
            columns[i].style.display = 'none';
        } else {
            columns[i].style.display = 'block';
        }
    }

}

