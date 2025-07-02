/ Contador para a data do evento
const eventDate = new Date("2025-06-24T00:00:00");

function updateCountdown() {
    const now = new Date();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "O evento chegou!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

const countdownInterval = setInterval(updateCountdown, 1000);