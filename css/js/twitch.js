let twitchChannels = [];
let currentChannelIndex = 0;

async function loadChannelList() {
    const response = await fetch('css/jsons/canales.json'); // Asegúrate de que el archivo esté en la misma carpeta
    const data = await response.json();
    twitchChannels = data.canales;
}
function loadLiveChannel(channelName) {
    // Eliminar el contenido actual del div
    document.getElementById('twitch-embed').innerHTML = '';

    // Crear un nuevo div para el reproductor de Twitch
    const newDiv = document.createElement('div');
    newDiv.id = 'twitch-embed';

    // Agregar el nuevo div al contenedor
    document.getElementById('twitch-iframe-container').appendChild(newDiv);

    // Cargar el nuevo reproductor de Twitch en el div recién creado
    new Twitch.Embed("twitch-embed", {
        width: '100%',
        height: '290rem',
        channel: channelName,
        layout: "video",
    });
}

function navigateChannel(direction) {
    currentChannelIndex += direction;

    // Asegurarse de que el índice no exceda los límites
    if (currentChannelIndex < 0) {
        currentChannelIndex = twitchChannels.length - 1;
    } else if (currentChannelIndex >= twitchChannels.length) {
        currentChannelIndex = 0;
    }

    const nextChannel = twitchChannels[currentChannelIndex];
    loadLiveChannel(nextChannel);
}

// Esperar a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    loadChannelList().then(() => {
        loadLiveChannel(twitchChannels[currentChannelIndex]);
    });
});