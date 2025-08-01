//Elementos del DOM
const btnA = document.getElementById('follow-btn-a');
const btnB = document.getElementById('follow-btn-b');
const timerDisplay = document.getElementById('timer');

//Inicio y actualizar el temporizador
let startTime = Date.now();

setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    timerDisplay.textContent = `Tiempo hasta clic: ${elapsed.toFixed(1)} segundos`;
}, 100);

//Función que se ejecuta al hacer clic
function handleChoice(version) {
    const elapsed = (Date.now() - startTime) / 1000;
    
    sessionStorage.setItem('version', version);
    sessionStorage.setItem('timeToClick', elapsed.toFixed(2));
    sessionStorage.setItem('timestamp', new Date().toISOString());

    alert(`¡Gracias por tu elección!\nSeleccionaste la Versión ${version}\nTiempo: ${elapsed.toFixed(2)} segundos`);

    //Registrar en consola
    console.log({
        version: version,
        timeToClick: elapsed.toFixed(2),
        timestamp: new Date().toISOString()
    });

    //para redirigir a la página "gracias.html"
    setTimeout(() => {
        window.location.href = 'gracias.html';
    }, 500);
}

