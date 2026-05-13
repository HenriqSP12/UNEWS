// Função para Alternar Alto Contraste
function toggleContrast() {
    document.body.classList.toggle('alto-contraste');
}

// Função para Alterar Tamanho da Fonte
let fontSize = 100; // Porcentagem inicial
function changeFontSize(action) {
    fontSize += (action * 10); // Aumenta ou diminui de 10 em 10%
    if (fontSize < 80) fontSize = 80; // Limite mínimo
    if (fontSize > 200) fontSize = 200; // Limite máximo
    document.documentElement.style.fontSize = fontSize + "%";
}

document.getElementById('campo-busca').addEventListener('input', function() {
    const termo = this.value.toLowerCase(); // O que você digitou
    const cards = document.querySelectorAll('.news-card'); // Pega todos os cards
    
    cards.forEach(card => {
        // Pega o texto do título e da descrição para comparar
        const titulo = card.querySelector('.card-title').innerText.toLowerCase();
        const texto = card.querySelector('.card-text').innerText.toLowerCase();
        
        // Encontra a coluna (pai) que envolve o card para escondê-la por inteiro
        const coluna = card.parentElement.parentElement; 

        if (titulo.includes(termo) || texto.includes(termo)) {
            coluna.style.display = "block"; // Mostra se bater com a busca
        } else {
            coluna.style.display = "none";  // Esconde se não bater
        }
    });
});