<footer class="site-footer mt-5">
        <div class="container text-center">
            <p data-i18n="rodape">&copy; 2026 UNews. Projeto de Acessibilidade Acadêmico.</p>
        </div>
        <div id="chatbot-container" class="chatbot-container shadow-lg rounded" aria-hidden="true" style="display: none;">
        <div class="chatbot-header d-flex justify-content-between align-items-center p-2 rounded-top" style="background-color: var(--azul-unesc); color: white;">
            <span class="fw-bold"><i class="bi bi-robot me-2"></i><span data-i18n="chatTitulo">Assistente UNews</span></span>
            <button class="btn btn-sm btn-outline-light border-0" onclick="toggleChatbot()" aria-label="Fechar assistente">X</button>
        </div>
        
        <div id="chatbot-messages" class="chatbot-messages p-3 bg-white border border-top-0" style="height: 250px; overflow-y: auto;" aria-live="polite">
            <div class="bot-msg bg-light p-2 rounded mb-3 w-85" style="border-left: 4px solid var(--azul-unesc); color: #000000;" data-i18n="chatBoasVindas">
                Olá! Sou o assistente do portal. Como posso ajudar você a ler as notícias hoje?
            </div>
        </div>
        
        <div class="chatbot-input d-flex border border-top-0 rounded-bottom bg-white p-1">
            <input type="text" id="chat-input" class="form-control border-0" placeholder="Digite sua dúvida..." data-i18n-placeholder="chatPlaceholder" aria-label="Campo de mensagem para o assistente" onkeypress="if(event.key === 'Enter') enviarMensagemChat()">
            <button class="btn btn-primary btn-sm ms-1" style="background-color: var(--azul-unesc);" onclick="enviarMensagemChat()" aria-label="Enviar mensagem"><i class="bi bi-send"></i></button>
        </div>
    </div>

    <button id="chatbot-btn" class="btn rounded-circle shadow-lg chatbot-btn" style="background-color: var(--azul-unesc); color: white;" onclick="toggleChatbot()" aria-label="Abrir assistente virtual">
        <i class="bi bi-chat-dots-fill fs-3"></i>
    </button>
</footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js?v=<?php echo time(); ?>"></script>

    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./sw.js')
            .then(registration => {
              console.log('Service Worker registrado com sucesso no escopo: ', registration.scope);
            })
            .catch(err => {
              console.log('Falha ao registrar o Service Worker: ', err);
            });
        });
      }
    </script>
</body>
</html>