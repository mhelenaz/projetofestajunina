// Função para contagem regressiva
function contar() {
    let now = new Date();
    let festaJuninaDate = new Date(now.getFullYear(), 5, 24); // 24 de junho (festa de São João)

    if (now > festaJuninaDate) {
        festaJuninaDate.setFullYear(festaJuninaDate.getFullYear() + 1); // Se já passou, ajusta para o próximo ano
    }

    let diff = festaJuninaDate - now; // Diferença em milissegundos
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("contagem").innerHTML = `Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos para a Festa Junina!`;
}