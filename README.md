Como testar

Passo 1: Preparar o ambiente XAMPP
Como o nosso projeto tem backend em PHP, precisam de ter o XAMPP instalado.

Abram o XAMPP Control Panel.

Deem Start nos módulos Apache  e MySQL

Passo 2: Descarregar o código (Pelo VS Code)

Abra o VS Code.

Vá em Arquivo > Abrir Pasta e selecione a pasta htdocs do seu XAMPP (geralmente fica em C:\xampp\htdocs).

Com a pasta aberta, abra o terminal do VS Code indo no menu superior em Terminal > Novo Terminal

No terminal que abrir na parte de baixo, cole este comando e dê Enter:
git clone https://github.com/HenriqSP12/UNEWS.git

Assim que terminar, a pasta UNEWS vai aparecer ali do lado esquerdo.

Passo 3: Configurar a Base de Dados
O site não vai abrir as notícias sem a base de dados

Abram o navegador e acedam a: http://localhost/phpmyadmin

Cliquem em Novo na barra lateral esquerda e criem uma base de dados chamada exatamente: unews_db

Cliquem na aba SQL na barra superior e colem o código abaixo para criar a tabela correta:

CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(50) NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    titulo_pt VARCHAR(255) NOT NULL,
    resumo_pt TEXT NOT NULL,
    conteudo_pt TEXT NOT NULL,
    titulo_en VARCHAR(255) NOT NULL,
    resumo_en TEXT NOT NULL,
    conteudo_en TEXT NOT NULL,
    titulo_es VARCHAR(255) NOT NULL,
    resumo_es TEXT NOT NULL,
    conteudo_es TEXT NOT NULL
);

Passo 4: Teste

Com tudo a correr, abram o navegador normal e acedam a: http://localhost/UNEWS (ou o nome exato da pasta que ficou no vosso htdocs).

Para testarem o painel de administração e adicionar uma notícia nova, usem: http://localhost/UNEWS/admin.php
