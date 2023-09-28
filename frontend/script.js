const cardText = document.getElementById('card-text');
const card = document.getElementById('card'); // Alteramos para buscar a div da carta com o ID "card"
const instruction = document.querySelector('.instruction'); // Selecionamos a div da instrução

const cartas = [
    "Reserve um tempo para não fazer absolutamente nada. Foque a atenção nisso.",
    "Lembre-se de respirar profundamente e relaxar.",
    "Aproveite o momento presente. O passado já se foi, o futuro ainda não chegou.",
    "Dedique algum tempo para fazer algo que te faz feliz.",
    "Seja grato pelas pequenas coisas da vida."
];

card.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * cartas.length);
    cardText.textContent = cartas[randomIndex];

    // Aplicar estilos ao texto dentro da carta
    cardText.style.color = 'white'; // Definir a cor do texto como branca
    cardText.textContent = cartaSelecionada;
});

// Registra a PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(function (registration) {
            console.log('Service Worker registrado com sucesso!', registration);
        })
        .catch(function (error) {
            console.error('Erro ao registrar o Service Worker:', error);
        });
}
