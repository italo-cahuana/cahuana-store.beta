
// Importamos las funciones desde los otros archivos
import { ocultar, mostrarServicio } from './services.js';
import { redirigirAWhatsApp } from './whatsapp.js';
import { instagram, linkedin } from './social.js';
import { obtenerDatosDeGoogleSheets, mostrarSaldos } from './googleSheets.js';

// variable global, para mensaje de whatsapp
let mensajeServicio = "en adquirir una cuenta";

// Lógica para el input de búsqueda
const inputOpcion = document.getElementById('opccionusuario');
inputOpcion.addEventListener('input', function () {
    const opcion = inputOpcion.value.toLowerCase();

    const opcionesNetflix = ["netflix", "n", "ne", "net", "netf", "netfl", "netfli", "netflix "];
    const opcionesAmazon = ["amazon", "a", "am", "ama", "amaz", "amazo", "amazon "];
    const opcionesHbo = ["hbo", "h", "hb", "hbo "];
    const opcionesSpotify = ["spotify", "s", "sp", "spo", "spot", "spoti", "aspotif", "spotify "];
    const opcionesDisney = ["disney", "d", "di", "dis", "disn", "disne", "disney "];

    if (opcionesNetflix.includes(opcion)) {
        mostrarServicio('netflix');
        mensajeServicio = "en el servicio de Netflix";
    } else if (opcionesAmazon.includes(opcion)) {
        mostrarServicio('amazon');
        mensajeServicio = "en el servicio de Amazon";
    } else if (opcionesHbo.includes(opcion)) {
        mostrarServicio('hbo');
        mensajeServicio = "en el servicio de HBO";
    } else if (opcionesSpotify.includes(opcion)) {
        mostrarServicio('spo');
        mensajeServicio = "en el servicio de Spotify";
    } else if (opcionesDisney.includes(opcion)) {
        mostrarServicio('disney');
        mensajeServicio = "en el servicio de Disney";
    } else {
        const divs = document.querySelectorAll('.contenido');
        divs.forEach(div => div.style.display = 'block');
    }
});

// Lógica para redirigir a WhatsApp al hacer clic en las imágenes
document.getElementById('net-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de Netflix"));
document.getElementById('ama-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de Amazon"));
document.getElementById('hbo-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de HBO"));
document.getElementById('spo-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de Spotify"));
document.getElementById('dis-img').addEventListener('click', () => redirigirAWhatsApp("en el servicio de Disney"));

// Lógica para redirigir a redes sociales
document.getElementById('insta').addEventListener('click', instagram);
document.getElementById('linkedin').addEventListener('click', linkedin);

// Lógica para redirigir a whatsapp al hacer clic en el boton
document.getElementById('botonWhatsApp').addEventListener('click', () => redirigirAWhatsApp(mensajeServicio));

// Inicializar la obtención de datos cuando la página cargue
window.onload = function () {
    obtenerDatosDeGoogleSheets();
    setInterval(obtenerDatosDeGoogleSheets, 300000); // Actualiza los datos cada 30 segundos
};