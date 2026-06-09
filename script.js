
const traducoes = {
    'pt': {
        // ... (mantenha os que já existiam)
        'altoContraste': 'Alto Contraste',
        'ouvirNoticia': '🔊 Ouvir Notícia',
        'pararLeitura': '⏹️ Parar',
        'menuJornal': 'Jornal',
        'menuEsportes': 'Esportes',
        'menuEntretenimento': 'Entretenimento',
        'buscar': 'Pesquisar notícias...',
        'tituloSecao': 'Últimas Notícias',
        'tituloEsportes': 'Últimas do Esporte',
        'tituloEntretenimento': 'Cultura e Lazer',
        'semNoticias': 'Nenhuma notícia publicada ainda nesta seção.',
        'semNoticiasEsportes': 'Nenhuma notícia sobre esportes publicada ainda.',
        'semNoticiasEntretenimento': 'Nenhuma notícia sobre entretenimento publicada ainda.',
        'rodape': '© 2026 UNews. Projeto de Acessibilidade Acadêmico.',
        'leiaMais': 'Leia mais',
        'fechar': 'Fechar [X]',
        'chatTitulo': 'Assistente UNews',
        'chatBoasVindas': 'Olá! Sou o assistente do portal. Como posso ajudar você a ler as notícias hoje?',
        'chatPlaceholder': 'Digite sua dúvida...'
    },
    'en': {
        // ... (mantenha os que já existiam)
        'altoContraste': 'High Contrast',
        'ouvirNoticia': '🔊 Read Aloud',
        'pararLeitura': '⏹️ Stop',
        'menuJornal': 'News',
        'menuEsportes': 'Sports',
        'menuEntretenimento': 'Entertainment',
        'buscar': 'Search news...',
        'tituloSecao': 'Latest News',
        'tituloEsportes': 'Latest in Sports',
        'tituloEntretenimento': 'Culture & Leisure',
        'semNoticias': 'No news published in this section yet.',
        'semNoticiasEsportes': 'No sports news published yet.',
        'semNoticiasEntretenimento': 'No entertainment news published yet.',
        'rodape': '© 2026 UNews. Academic Accessibility Project.',
        'leiaMais': 'Read more',
        'fechar': 'Close [X]',
        'chatTitulo': 'UNews Assistant',
        'chatBoasVindas': 'Hello! I am the portal assistant. How can I help you read the news today?',
        'chatPlaceholder': 'Type your question...'
    },
    'es': {
        // ... (mantenha os que já existiam)
        'altoContraste': 'Alto Contraste',
        'ouvirNoticia': '🔊 Leer en voz alta',
        'pararLeitura': '⏹️ Detener',
        'menuJornal': 'Periódico',
        'menuEsportes': 'Deportes',
        'menuEntretenimento': 'Entretenimiento',
        'buscar': 'Buscar noticias...',
        'tituloSecao': 'Últimas Noticias',
        'tituloEsportes': 'Últimas de Deportes',
        'tituloEntretenimento': 'Cultura y Ocio',
        'semNoticias': 'Aún no se han publicado noticias en esta sección.',
        'semNoticiasEsportes': 'Aún no se han publicado noticias deportivas.',
        'semNoticiasEntretenimento': 'Aún no se han publicado noticias de entretenimiento.',
        'rodape': '© 2026 UNews. Proyecto de Accesibilidad Académico.',
        'leiaMais': 'Leer más',
        'fechar': 'Cerrar [X]',
        'chatTitulo': 'Asistente UNews',
        'chatBoasVindas': '¡Hola! Soy el asistente del portal. ¿Cómo puedo ayudarte a leer las noticias hoy?',
        'chatPlaceholder': 'Escribe tu duda...'
    }
};

const respostasChatbot = {
    'pt': [
        // Dificuldades gerais de leitura / visão
        { palavras: ['ler', 'leitura', 'enxergar', 'visão', 'dificuldade', 'ajuda', 'problema', 'cego', 'ruim'], resposta: "Entendo! O portal tem várias ferramentas para te ajudar. Você pode clicar em 'A+' lá em cima para aumentar as letras, ativar o 'Alto Contraste', ou abrir uma notícia e clicar em '🔊 Ouvir Notícia' para que eu leia o texto para você." },
        
        // Comandos específicos
        { palavras: ['esporte', 'futebol', 'jogos'], resposta: "Você pode encontrar as notícias esportivas clicando no botão 'Esportes', que tem o ícone de um troféu lá no topo da tela!" },
        { palavras: ['entretenimento', 'filme', 'cultura', 'lazer'], resposta: "A seção de Entretenimento fica no menu superior, ao lado do ícone de um rolo de filme." },
        { palavras: ['letra', 'fonte', 'aumentar', 'pequena'], resposta: "Para facilitar a leitura, vá até a barra superior e clique no botão 'A+' para aumentar o tamanho de todo o texto do site." },
        { palavras: ['lupa', 'ampliar', 'zoom', 'detalhe'], resposta: "Temos uma lupa especial! Clique no botão '🔍 Lupa' lá em cima e mova o mouse pela tela para ver os detalhes ampliados." },
        { palavras: ['cor', 'escuro', 'contraste', 'luz', 'claro', 'brilho'], resposta: "Se a luz da tela estiver incomodando, clique no botão 'Alto Contraste' na barra superior para deixar o fundo escuro e as letras amarelas." },
        
        // Saudações
        { palavras: ['olá', 'oi', 'bom dia', 'boa tarde', 'boa noite', 'tudo bem'], resposta: "Olá! Seja muito bem-vindo ao portal UNews. Estou aqui para ajudar. Como posso facilitar sua experiência hoje?" }
    ],
    'en': [
        // General reading / vision difficulties
        { palavras: ['read', 'reading', 'see', 'vision', 'trouble', 'help', 'problem', 'blind', 'bad'], resposta: "I understand! We have tools to help. You can click 'A+' at the top to make the text bigger, turn on 'High Contrast', or open a news article and click '🔊 Read Aloud' so I can read it to you." },
        
        // Specific commands
        { palavras: ['sport', 'soccer', 'football', 'games'], resposta: "You can find sports news by clicking the 'Sports' button with the trophy icon at the top of the screen!" },
        { palavras: ['entertainment', 'movie', 'culture', 'leisure'], resposta: "The Entertainment section is in the top menu, next to the film roll icon." },
        { palavras: ['font', 'letter', 'increase', 'small'], resposta: "To make reading easier, go to the top bar and click the 'A+' button to increase the text size." },
        { palavras: ['zoom', 'magnify', 'detail'], resposta: "We have a special magnifier! Click the '🔍 Zoom' button at the top and move your mouse to see details." },
        { palavras: ['color', 'dark', 'contrast', 'bright', 'light'], resposta: "If the screen is too bright, click the 'High Contrast' button in the top bar for a dark background and yellow letters." },
        
        // Greetings
        { palavras: ['hello', 'hi', 'good morning', 'good afternoon', 'good evening', 'how are you'], resposta: "Hello! Welcome to the UNews portal. I'm here to help. How can I make your experience easier today?" }
    ],
    'es': [
        // Dificultades generales de lectura / visión
        { palavras: ['leer', 'lectura', 'ver', 'visión', 'dificultad', 'ayuda', 'problema', 'ciego', 'mal'], resposta: "¡Entiendo! Tenemos varias herramientas para ayudarte. Puedes hacer clic en 'A+' arriba para agrandar las letras, activar el 'Alto Contraste', o abrir una noticia y hacer clic en '🔊 Leer en voz alta' para que te la lea." },
        
        // Comandos específicos
        { palavras: ['deporte', 'futbol', 'juegos'], resposta: "¡Puedes encontrar noticias deportivas haciendo clic en el botón 'Deportes' con el icono del trofeo en la parte superior!" },
        { palavras: ['entretenimiento', 'pelicula', 'cultura', 'ocio'], resposta: "La sección de Entretenimiento está en el menú superior, junto al icono del rollo de película." },
        { palavras: ['letra', 'fuente', 'aumentar', 'pequeña'], resposta: "Para facilitar la lectura, ve a la barra superior y haz clic en 'A+' para aumentar el tamaño del texto." },
        { palavras: ['lupa', 'zoom', 'detalle'], resposta: "¡Tenemos una lupa especial! Haz clic en el botón '🔍 Lupa' arriba y mueve el ratón para ver los detalles." },
        { palavras: ['color', 'oscuro', 'contraste', 'luz', 'brillo'], resposta: "Si la luz molesta, haz clic en 'Alto Contraste' en la barra superior para un fondo oscuro y letras amarillas." },
        
        // Saludos
        { palavras: ['hola', 'buenos', 'buenas', 'qué tal', 'como estas'], resposta: "¡Hola! Bienvenido al portal UNews. Estoy aquí para ayudar. ¿Cómo puedo facilitar tu experiencia hoy?" }
    ]
};

const respostasPadrao = {
    'pt': "Ainda estou aprendendo! Tente me perguntar como 'aumentar a letra', ou 'onde encontro os esportes'.",
    'en': "I'm still learning! Try asking me how to 'increase font' or 'where to find sports'.",
    'es': "¡Todavía estoy aprendiendo! Intenta preguntarme cómo 'aumentar letra' o 'dónde están los deportes'."
};

let idiomaAtual = 'pt';


function anunciarParaLeitor(mensagem) {
    let divAnuncio = document.getElementById('anunciador-acessibilidade');
    if (!divAnuncio) {
        divAnuncio = document.createElement('div');
        divAnuncio.id = 'anunciador-acessibilidade';
        divAnuncio.setAttribute('aria-live', 'polite');
        divAnuncio.classList.add('visually-hidden');
        document.body.appendChild(divAnuncio);
    }

    divAnuncio.innerText = '';
    setTimeout(() => {
        divAnuncio.innerText = mensagem;
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {

    const altoContrasteSalvo = localStorage.getItem('altoContraste');
    if (altoContrasteSalvo === 'true') {
        document.body.classList.add('alto-contraste');
    }


    const idiomaSalvo = localStorage.getItem('idioma') || 'pt';
    mudarIdioma(idiomaSalvo);
});

function mudarIdioma(idioma) {
    idiomaAtual = idioma;
    localStorage.setItem('idioma', idioma);

    document.documentElement.lang = idioma;

    const elementosTexto = document.querySelectorAll('[data-i18n]');
    elementosTexto.forEach(el => {
        const chave = el.getAttribute('data-i18n');
        if (traducoes[idioma][chave]) {
            el.innerText = traducoes[idioma][chave];
        }
    });

    const elementosPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
    elementosPlaceholder.forEach(el => {
        const chave = el.getAttribute('data-i18n-placeholder');
        if (traducoes[idioma][chave]) {
            el.placeholder = traducoes[idioma][chave];
        }
    });

    const botoesLeiaMais = document.querySelectorAll('.leia-mais');
    botoesLeiaMais.forEach(btn => {
        btn.innerText = traducoes[idioma]['leiaMais'];
    });

    const btnFechar = document.querySelector('.fechar-btn');
    if (btnFechar) {
        btnFechar.innerText = traducoes[idioma]['fechar'];
    }

    if (noticiaAbertaAtual) {
        let templateElemento = document.getElementById('template-' + noticiaAbertaAtual + '-' + idiomaAtual);
        if (!templateElemento) {
            templateElemento = document.getElementById('template-' + noticiaAbertaAtual + '-pt');
        }
        document.getElementById('leitor-conteudo').innerHTML = templateElemento.innerHTML;
    }

    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');
    
    if (btnPt && btnEn && btnEs) {
        btnPt.classList.remove('active');
        btnEn.classList.remove('active');
        btnEs.classList.remove('active');
        
        const btnAtivo = document.getElementById('btn-' + idioma);
        if (btnAtivo) btnAtivo.classList.add('active');
    }

    anunciarParaLeitor(`Idioma alterado para ${idioma.toUpperCase()}`);
}

function toggleContrast() {
    document.body.classList.toggle('alto-contraste');
    

    const estadoAtivo = document.body.classList.contains('alto-contraste');
    localStorage.setItem('altoContraste', estadoAtivo); 
    
    const estadoMensagem = estadoAtivo ? 'ativado' : 'desativado';
    anunciarParaLeitor(`Modo de alto contraste ${estadoMensagem}`);
}


let fontSize = 100; 
function changeFontSize(action) {
    fontSize += (action * 10); 
    
    if (fontSize < 80) fontSize = 80; 
    if (fontSize > 200) fontSize = 200; 
    
    document.documentElement.style.fontSize = fontSize + "%";
    anunciarParaLeitor(`Tamanho do texto alterado para ${fontSize} porcento`);
}

document.getElementById('campo-busca').addEventListener('input', function() {
    const termo = this.value.toLowerCase().trim(); 
    const cards = document.querySelectorAll('.news-card'); 
    const carrossel = document.querySelector('.carousel-section');
    
    if (carrossel) {
        if (termo !== '') {
            carrossel.classList.add('d-none');
        } else {
            carrossel.classList.remove('d-none');
        }
    }
    
    cards.forEach(card => {
        const titulo = card.querySelector('.card-title').innerText.toLowerCase();
        const texto = card.querySelector('.card-text').innerText.toLowerCase();
        
        const botao = card.querySelector('.leia-mais');
        let conteudoExtra = "";
        
        if (botao) {
            const onclickAttr = botao.getAttribute('onclick');
            const matchId = onclickAttr.match(/'([^']+)'/); 
            if (matchId && matchId[1]) {
                const template = document.getElementById('template-' + matchId[1]);
                if (template) {
                    conteudoExtra = template.innerText.toLowerCase();
                }
            }
        }
        
        const coluna = card.closest('.col-12'); 

        if (titulo.includes(termo) || texto.includes(termo) || conteudoExtra.includes(termo)) {
            coluna.classList.remove('d-none');
            coluna.classList.add('d-flex');
        } else {
            coluna.classList.remove('d-flex');
            coluna.classList.add('d-none');
        }
    });
});

let botaoOrigemFoco = null;
let noticiaAbertaAtual = null; 

function abrirNoticia(idNoticia, botaoClicado) {
    botaoOrigemFoco = botaoClicado;
    noticiaAbertaAtual = idNoticia; 

    const areaLeitura = document.getElementById('area-leitura');
    const leitorTitulo = document.getElementById('leitor-titulo');
    const leitorConteudo = document.getElementById('leitor-conteudo');


    areaLeitura.setAttribute('tabindex', '-1');

    let tituloCard = "Notícia";
    const card = botaoClicado.closest('.card'); 
    
    if (card) {
        tituloCard = card.querySelector('.card-title').innerText;
    } else {
        const tituloCarrossel = botaoClicado.querySelector('h5');
        if (tituloCarrossel) {
            tituloCard = tituloCarrossel.innerText;
        }
    }
    
    let templateElemento = document.getElementById('template-' + idNoticia + '-' + idiomaAtual);

    if (!templateElemento) {
        templateElemento = document.getElementById('template-' + idNoticia + '-pt');
    }

    leitorTitulo.innerText = tituloCard;
    leitorConteudo.innerHTML = templateElemento.innerHTML;

    areaLeitura.style.display = 'block';
    areaLeitura.scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
        areaLeitura.focus();
        anunciarParaLeitor(`Lendo a notícia: ${tituloCard}`);
    }, 300);
}

function fecharNoticia() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }

    const areaLeitura = document.getElementById('area-leitura');
    areaLeitura.style.display = 'none';
    document.getElementById('leitor-conteudo').innerHTML = '';
    
    noticiaAbertaAtual = null; 

    if (botaoOrigemFoco) {
        botaoOrigemFoco.focus();
        botaoOrigemFoco.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function toggleChatbot() {
    const chat = document.getElementById('chatbot-container');
    const btn = document.getElementById('chatbot-btn');
    
    if (chat.style.display === 'none' || chat.style.display === '') {
        chat.style.display = 'block';
        chat.setAttribute('aria-hidden', 'false');
        document.getElementById('chat-input').focus();
        anunciarParaLeitor("Assistente virtual aberto.");
    } else {
        chat.style.display = 'none';
        chat.setAttribute('aria-hidden', 'true');
        btn.focus();
        anunciarParaLeitor("Assistente virtual fechado.");
    }
}

async function enviarMensagemChat() {
    const input = document.getElementById('chat-input');
    const msg = input.value.trim();
    if(!msg) return;

    const chatWindow = document.getElementById('chatbot-messages');
    
    // 1. Mostra a mensagem do usuário
    chatWindow.innerHTML += `<div class="user-msg p-2 rounded mb-3 w-85 ms-auto text-end" style="background-color: var(--fundo-cinza); color: var(--texto-escuro); border: 1px solid #ccc;">${msg}</div>`;
    input.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // 2. Adiciona um indicador de "Digitando..."
    const loadingId = 'loading-' + Date.now();
    chatWindow.innerHTML += `<div id="${loadingId}" class="bot-msg bg-light p-2 rounded mb-3 w-85 text-muted">Pensando...</div>`;
    chatWindow.scrollTop = chatWindow.scrollHeight;

    try {
        // 3. Faz a requisição para o seu PHP usando a API nativa fetch
        const response = await fetch('chat_api.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                mensagem: msg,
                idioma: idiomaAtual 
            })
        });

        const data = await response.json();
        
        document.getElementById(loadingId).remove();
        chatWindow.innerHTML += `<div class="bot-msg bg-light p-2 rounded mb-3 w-85" style="border-left: 4px solid var(--azul-unesc); color: var(--texto-escuro);">${data.resposta}</div>`;
        
        anunciarParaLeitor(data.resposta);

    } catch (error) {
        document.getElementById(loadingId).remove();
        chatWindow.innerHTML += `<div class="bot-msg bg-danger text-white p-2 rounded mb-3 w-85">Erro ao conectar com o assistente.</div>`;
    }
    
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function lerNoticiaEmVozAlta() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.resume();
        window.speechSynthesis.cancel(); 
        
        setTimeout(() => {
            let texto = document.getElementById('leitor-conteudo').textContent;
            console.log("TEXTO CAPTURADO PARA LEITURA: ", texto);
            
            if (!texto || texto.trim() === "") {
                texto = "Desculpe, a notícia está vazia.";
            }

            const fala = new SpeechSynthesisUtterance(texto);
            
            if (idiomaAtual === 'en') {
                fala.lang = 'en-US';
            } else if (idiomaAtual === 'es') {
                fala.lang = 'es-ES';
            } else {
                fala.lang = 'pt-BR';
            }
            
            fala.rate = 1.0; 
            fala.volume = 1.0; 
            
            fala.onstart = function() {
                console.log("▶️ O navegador começou a falar!");
            };
            fala.onerror = function(event) {
                console.error("❌ Erro no motor de voz: ", event.error);
            };
            
            window.speechSynthesis.speak(fala);
            anunciarParaLeitor("Iniciando leitura.");
        }, 250); 
        
    } else {
        alert("Desculpe, seu navegador não suporta a leitura em voz alta.");
    }
}

function pararLeitura() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        anunciarParaLeitor("Leitura interrompida.");
    }
}
