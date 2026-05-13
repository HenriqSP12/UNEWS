
function toggleContrast() {
    document.body.classList.toggle('alto-contraste');
}

let fontSize = 100; 
function changeFontSize(action) {
    fontSize += (action * 10); 
    if (fontSize < 80) fontSize = 80; 
    if (fontSize > 200) fontSize = 200; 
    document.documentElement.style.fontSize = fontSize + "%";
}

document.getElementById('campo-busca').addEventListener('input', function() {
    const termo = this.value.toLowerCase(); 
    const cards = document.querySelectorAll('.news-card'); 
    
    cards.forEach(card => {

        const titulo = card.querySelector('.card-title').innerText.toLowerCase();
        const texto = card.querySelector('.card-text').innerText.toLowerCase();
        

        const coluna = card.parentElement.parentElement; 

        if (titulo.includes(termo) || texto.includes(termo)) {
            coluna.style.display = "block"; 
        } else {
            coluna.style.display = "none";  
        }
    });
});
