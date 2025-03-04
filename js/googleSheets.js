
// Función para obtener datos de Google Sheets
export async function obtenerDatosDeGoogleSheets() {
    const apiKey = 'AIzaSyDig51SHK4ciSnQkdqTeuN60r-8hNN3RdA';
    const sheetId = '13lbO-8p3H6c07iqVv5iZizrWyA7XlnS8sfOpCB1Pi0M';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;

    try {
        const response = await fetch(url); // Hacemos una solicitud HTTP a la API de Google Sheets usando fecth, await pausa la ejecución de la función hasta que la solicitud se complete.
        const data = await response.json(); // Convertimos la respuesta a JSON
        //clave(data.values)
        mostrarSaldos(data.values); // Llamamos a la función mostrarSaldos con los datos obtenidos
    } catch (error) {
        console.error("Error al obtener los datos:", error); // Si hay un error, lo mostramos en la consola
    }
}

// Función para mostrar los saldos en la página
export function mostrarSaldos(data) {
    data.forEach(function (item) {
        const servicio = item[0].toLowerCase(); // Columna de servicio (en minúsculas)
        const saldo = item[1]; // Culumna de saldos
        const precio = item[2]; // Culumna de precio

        // Actualizamos el DOM según el servicio
        if (servicio === "netflix") {
            document.getElementById('saldo-netflix').textContent = saldo;
            document.getElementById("precio-netflix").textContent = precio;
        } else if (servicio === 'amazon prime') {
            document.getElementById('saldo-amazon').textContent = saldo;
            document.getElementById('precio-amazon').textContent = precio;
        } else if (servicio === 'hbo max') {
            document.getElementById('saldo-hbo').textContent = saldo;
            document.getElementById('precio-hbo').textContent = precio;
        } else if (servicio === 'spotify') {
            document.getElementById('saldo-spotify').textContent = saldo;
            document.getElementById('precio-spotify').textContent = precio;
        } else if (servicio === 'disney+') {
            document.getElementById('saldo-disney').textContent = saldo;
            document.getElementById('precio-disney').textContent = precio;
        } else {
            console.log("Servicio no reconocido:", servicio); // Si el servicio no coincide, mostramos un mensaje en la consola
        }
    });
}

//******************************** NO IMPLEMENTAR POR AHORA; COMMING SOON **********************************************/
// // Funcion contraseña
// export function clave (data) {
//     let userKey = prompt("escirbe tu contraseña, para poder acceder")
//     data.forEach(function (item) {
//         const key = item[4];

//         if (userKey == key) {
//             return mostrarSaldos(data)

//         } else {
//             alert("contraseña incorrecta")
//         }

//     })
// }
