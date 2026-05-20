
// =========================================
// Sistema de Tradução (i18n)
// =========================================

// Nosso dicionário de traduções
const traducoes = {
    'pt': {
        'menuJornal': 'Jornal',
        'menuEsportes': 'Esportes',
        'menuEntretenimento': 'Entretenimento',
        'buscar': 'Pesquisar notícias...',
        'tituloSecao': 'Últimas Notícias',
        'rodape': '© 2026 UNews. Projeto de Acessibilidade Acadêmico.',
        'leiaMais': 'Leia mais',
        'fechar': 'Fechar [X]',
        // Títulos e resumos dos cards
        'tituloNoticia1': 'Edição Especial: O Caso AEED',
        'resumoNoticia1': 'Grupo de universitários é investigado após sobreviver um semestre inteiro sem entender o AEED.',
        'tituloNoticia2': 'Crise na Cantina',
        'resumoNoticia2': 'Dados levantados apontam aumento de 437% na venda de batata próximo aos horários do grupo.',
        'tituloNoticia3': 'Recorde de mensagens inúteis',
        'resumoNoticia3': 'O grupo do WhatsApp dos estudantes registrou mais de 800 mensagens em apenas uma madrugada.'
    },
    'en': {
        'menuJornal': 'News',
        'menuEsportes': 'Sports',
        'menuEntretenimento': 'Entertainment',
        'buscar': 'Search news...',
        'tituloSecao': 'Latest News',
        'rodape': '© 2026 UNews. Academic Accessibility Project.',
        'leiaMais': 'Read more',
        'fechar': 'Close [X]',
        // Títulos e resumos dos cards
        'tituloNoticia1': 'Special Edition: The AEED Case',
        'resumoNoticia1': 'Group of university students is investigated after surviving an entire semester without understanding AEED.',
        'tituloNoticia2': 'Crisis in the Cafeteria',
        'resumoNoticia2': 'Data collected shows a 437% increase in potato sales near the group\'s arrival times.',
        'tituloNoticia3': 'Record of useless messages',
        'resumoNoticia3': 'The students\' WhatsApp group registered over 800 messages in just one night.'
    },
    'es': {
        'menuJornal': 'Periódico',
        'menuEsportes': 'Deportes',
        'menuEntretenimento': 'Entretenimiento',
        'buscar': 'Buscar noticias...',
        'tituloSecao': 'Últimas Noticias',
        'rodape': '© 2026 UNews. Proyecto de Accesibilidad Académico.',
        'leiaMais': 'Leer más',
        'fechar': 'Cerrar [X]',
        // Títulos y resúmenes de las tarjetas
        'tituloNoticia1': 'Edición Especial: El Caso AEED',
        'resumoNoticia1': 'Grupo de universitarios es investigado tras sobrevivir un semestre entero sin entender AEED.',
        'tituloNoticia2': 'Crisis en la Cantina',
        'resumoNoticia2': 'Datos recopilados apuntan a un aumento del 437% en la venta de papas cerca de los horarios del grupo.',
        'tituloNoticia3': 'Récord de mensajes inútiles',
        'resumoNoticia3': 'El grupo de WhatsApp de los estudiantes registró más de 800 mensajes en solo una madrugada.'
    }
};

// Variável para saber o idioma atual
let idiomaAtual = 'pt';

function mudarIdioma(idioma) {
    idiomaAtual = idioma;

    // 1. Atualiza os textos normais (tags com data-i18n)
    const elementosTexto = document.querySelectorAll('[data-i18n]');
    elementosTexto.forEach(el => {
        const chave = el.getAttribute('data-i18n');
        if (traducoes[idioma][chave]) {
            el.innerText = traducoes[idioma][chave];
        }
    });

    // 2. Atualiza os placeholders
    const elementosPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
    elementosPlaceholder.forEach(el => {
        const chave = el.getAttribute('data-i18n-placeholder');
        if (traducoes[idioma][chave]) {
            el.placeholder = traducoes[idioma][chave];
        }
    });

    // 3. Atualiza os botões "Leia mais"
    const botoesLeiaMais = document.querySelectorAll('.leia-mais');
    botoesLeiaMais.forEach(btn => {
        btn.innerText = traducoes[idioma]['leiaMais'];
    });

    // 4. Atualiza o botão "Fechar"
    const btnFechar = document.querySelector('.fechar-btn');
    if (btnFechar) {
        btnFechar.innerText = traducoes[idioma]['fechar'];
    }

    // ==========================================
    // 5. ATUALIZA A NOTÍCIA ABERTA AO VIVO
    // ==========================================
    if (noticiaAbertaAtual) {
        // Procura a versão traduzida do texto que está aberto
        let templateElemento = document.getElementById('template-' + noticiaAbertaAtual + '-' + idiomaAtual);
        
        // Anti-falhas: se o idioma não existir, volta pro português
        if (!templateElemento) {
            templateElemento = document.getElementById('template-' + noticiaAbertaAtual + '-pt');
        }
        
        // Injeta o novo idioma diretamente na área de leitura sem piscar a tela
        document.getElementById('leitor-conteudo').innerHTML = templateElemento.innerHTML;
    }

    // 6. Muda as cores dos botões PT/EN para mostrar qual está ativo
    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');
    
    if (btnPt && btnEn) {
        btnPt.className = idioma === 'pt' ? 'btn btn-sm btn-primary mx-1' : 'btn btn-sm btn-outline-secondary mx-1';
        btnEn.className = idioma === 'en' ? 'btn btn-sm btn-primary mx-1' : 'btn btn-sm btn-outline-secondary mx-1';
    }
}

function toggleContrast() {
    document.body.classList.toggle('alto-contraste');
}

// =========================================
// Acessibilidade: Controle de Fonte
// =========================================
let fontSize = 100; 
function changeFontSize(action) {
    fontSize += (action * 10); 
    
    // Define os limites mínimo e máximo do zoom da fonte
    if (fontSize < 80) fontSize = 80; 
    if (fontSize > 200) fontSize = 200; 
    
    document.documentElement.style.fontSize = fontSize + "%";
}

document.getElementById('campo-busca').addEventListener('input', function() {
    const termo = this.value.toLowerCase().trim(); 
    const cards = document.querySelectorAll('.news-card'); 
    const carrossel = document.querySelector('.carousel-section');
    
    // 1. Esconde o carrossel usando a classe do Bootstrap (d-none)
    if (termo !== '') {
        carrossel.classList.add('d-none');
    } else {
        carrossel.classList.remove('d-none');
    }
    
    // 2. Filtra os cards
    cards.forEach(card => {
        const titulo = card.querySelector('.card-title').innerText.toLowerCase();
        const texto = card.querySelector('.card-text').innerText.toLowerCase();
        
        // Procura no conteúdo extra também
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
        
        // Pega a coluna que envolve o card
        const coluna = card.closest('.col-12'); 

        // 3. Aplica a lógica de esconder as notícias que NÃO têm as letras digitadas
        if (titulo.includes(termo) || texto.includes(termo) || conteudoExtra.includes(termo)) {
            // Se encontrou a palavra, tira o 'escondido' e devolve o 'flex'
            coluna.classList.remove('d-none');
            coluna.classList.add('d-flex');
        } else {
            // Se NÃO encontrou, tira o 'flex' e adiciona o 'escondido' do Bootstrap
            coluna.classList.remove('d-flex');
            coluna.classList.add('d-none');
        }
    });
});

// Variável global para guardar de onde o usuário veio
// Variável global para guardar de onde o usuário veio
let botaoOrigemFoco = null;

let noticiaAbertaAtual = null; // Vai guardar o ID da notícia que o usuário está lendo

function abrirNoticia(idNoticia, botaoClicado) {
    botaoOrigemFoco = botaoClicado;
    noticiaAbertaAtual = idNoticia; // <-- ADICIONE ESTA LINHA AQUI

    // ... restante do seu código abrirNoticia continua igual ...
    const areaLeitura = document.getElementById('area-leitura');
    const leitorTitulo = document.getElementById('leitor-titulo');
    const leitorConteudo = document.getElementById('leitor-conteudo');

    const card = botaoClicado.closest('.card'); 
    const tituloCard = card.querySelector('.card-title').innerText;
    
    // ==========================================
    // NOVA LÓGICA DE TRADUÇÃO
    // ==========================================
    // Monta o nome do ID procurando o idioma atual (Ex: template-noticia-1-en)
    let templateElemento = document.getElementById('template-' + idNoticia + '-' + idiomaAtual);

    // Sistema anti-falhas: Se o HTML do idioma não existir, ele puxa o Português por padrão para o site não quebrar
    if (!templateElemento) {
        templateElemento = document.getElementById('template-' + idNoticia + '-pt');
    }

    // Injeta os dados na área de leitura
    leitorTitulo.innerText = tituloCard;
    leitorConteudo.innerHTML = templateElemento.innerHTML;

    areaLeitura.style.display = 'block';

    areaLeitura.scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
        areaLeitura.focus();
    }, 300);
    
    // Se a lupa estiver ligada, tira uma foto nova do conteúdo aberto
    if (typeof lupaAtiva !== 'undefined' && lupaAtiva) {
        // Desliga e liga rápido para atualizar o clone com o texto gigante
        desligarLupa();
    }
}

function fecharNoticia() {
    const areaLeitura = document.getElementById('area-leitura');
    areaLeitura.style.display = 'none';
    document.getElementById('leitor-conteudo').innerHTML = '';
    
    noticiaAbertaAtual = null; // <-- ADICIONE ESTA LINHA AQUI

    if (botaoOrigemFoco) {
        botaoOrigemFoco.focus();
        botaoOrigemFoco.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// =========================================
// Widget de Lupa Virtual
// =========================================
let lupaAtiva = false;

const lente = document.createElement('div');
lente.id = 'lupa-lente';
lente.setAttribute('aria-hidden', 'true'); 
const cloneConteudo = document.createElement('div');
cloneConteudo.id = 'lupa-conteudo';

lente.appendChild(cloneConteudo);
document.body.appendChild(lente);

function toggleLupa(event) {
    // Impede que o clique no botão ative a função de fechar imediatamente
    if (event) event.stopPropagation();

    const btnLupa = document.getElementById('btn-lupa');
    lupaAtiva = !lupaAtiva;

    if (lupaAtiva) {
        // Ativa a Lupa
        lente.classList.add('ativa');
        btnLupa.classList.replace('btn-outline-dark', 'btn-dark');
        btnLupa.innerText = '🔍 Desativar Lupa';
        
        // Tira uma "foto" atualizada do conteúdo principal (incluindo a area-leitura se estiver aberta)
        const mainOriginal = document.querySelector('main');
        const areaPrincipal = mainOriginal.cloneNode(true);
        
        areaPrincipal.removeAttribute('id');
        const elementosComId = areaPrincipal.querySelectorAll('[id]');
        elementosComId.forEach(el => el.removeAttribute('id'));

        cloneConteudo.innerHTML = ''; 
        cloneConteudo.appendChild(areaPrincipal);

        // Trava a largura do clone para não deformar o layout
        cloneConteudo.style.width = mainOriginal.offsetWidth + 'px';

        // Começa a rastrear o mouse
        document.addEventListener('mousemove', moverLupa);
        
        // Adiciona um rastreador de cliques na tela inteira para desligar a lupa
        setTimeout(() => {
            document.addEventListener('click', fecharLupaClickListener);
        }, 50);

    } else {
        desligarLupa();
    }
}

// Função auxiliar para desligar a lupa
function desligarLupa() {
    lupaAtiva = false;
    const btnLupa = document.getElementById('btn-lupa');
    
    lente.classList.remove('ativa');
    btnLupa.classList.replace('btn-dark', 'btn-outline-dark');
    btnLupa.innerText = '🔍 Lupa';
    cloneConteudo.innerHTML = '';
    
    // Remove os rastreadores para poupar processamento
    document.removeEventListener('mousemove', moverLupa);
    document.removeEventListener('click', fecharLupaClickListener);
}

// Escuta o clique do mouse em qualquer lugar da tela
function fecharLupaClickListener(event) {
    if (lupaAtiva) {
        desligarLupa();
    }
}

// Movimentação e aplicação de zoom
function moverLupa(e) {
    const zoom = 2; 
    
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    
    const raioX = lente.offsetWidth / 2;
    const raioY = lente.offsetHeight / 2;

    // Move a lente
    lente.style.left = (mouseX - raioX) + 'px';
    lente.style.top = (mouseY - raioY) + 'px';

    // Calcula limites do main original
    const main = document.querySelector('main');
    const mainRect = main.getBoundingClientRect();
    const mainLeft = mainRect.left + window.scrollX;
    const mainTop = mainRect.top + window.scrollY;

    const relX = mouseX - mainLeft;
    const relY = mouseY - mainTop;

    // Move o conteúdo interno da lente na direção oposta ao mouse
    cloneConteudo.style.transform = `scale(${zoom})`;
    cloneConteudo.style.left = `-${(relX * zoom) - raioX}px`;
    cloneConteudo.style.top = `-${(relY * zoom) - raioY}px`;
}