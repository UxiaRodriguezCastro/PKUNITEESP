// app.js

// Tu Client ID de Twitch
const twitchClientId = ($CLIENT_TWITCH_ID);

// Inicializa la lista de canales
let listaCanales = [];

// Carga la lista de canales desde el archivo JSON
$.getJSON('css/jsons/canales.json', function (data) {
    if (data && data.canales && Array.isArray(data.canales)) {
        listaCanales = data.canales;
        // Iniciar el proceso con el primer canal de la lista
        siguienteCanal();
    } else {
        console.error("Error al cargar la lista de canales desde el archivo JSON.");
    }
});

// Función para cargar el iframe con el canal en línea
function cargarIframe(channelName) {
    const iframeSrc = `https://player.twitch.tv/?channel=${channelName}`;
    const iframeHTML = `<iframe src="${iframeSrc}" height="720" width="1280" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>`;
    $("#twitch-iframe-container").html(iframeHTML);
}

// Función para comprobar si un canal está en línea
function comprobarCanalEnLinea(channelName) {
    const apiUrl = `https://api.twitch.tv/helix/streams?user_login=${channelName}`;

    $.ajax({
        url: apiUrl,
        headers: {
            "Client-ID": twitchClientId,
        },
        success: function (data) {
            if (data.data.length > 0) {
                // El canal está en línea
                cargarIframe(channelName);
            } else {
                // El canal no está en línea, pasar al siguiente
                siguienteCanal();
            }
        },
        error: function () {
            // Manejar errores de la petición
            console.error("Error al obtener información del canal: " + channelName);
            // Pasar al siguiente canal en caso de error
            siguienteCanal();
        }
    });
}

// Función para pasar al siguiente canal en la lista
function siguienteCanal() {
    // Si no hay más canales, cargar el primer canal por defecto
    if (listaCanales.length > 0) {
        const siguienteCanal = listaCanales.shift();
        comprobarCanalEnLinea(siguienteCanal);
    } else {
        // Si no hay más canales, cargar el primer canal por defecto
        cargarIframe("nombreCanalPorDefecto");
    }
}
