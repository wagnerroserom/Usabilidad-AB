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


