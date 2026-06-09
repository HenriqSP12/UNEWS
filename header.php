<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UNews - Portal de Notícias Acessível</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="manifest" href="./manifest.json">
    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
    <meta name="theme-color" content="#3367D6">
    
    
</head>
<body>

    <!-- Barra de Acessibilidade -->
    <div class="accessibility-bar d-flex justify-content-between align-items-center px-3 py-2">
        
        <!-- Grupo 1: Controles Visuais -->
        <div class="font-controls d-flex flex-wrap gap-2">
            <button class="btn-acessibilidade" onclick="changeFontSize(-1)" aria-label="Diminuir fonte de todo o site">A-</button>
            <button class="btn-acessibilidade" onclick="changeFontSize(1)" aria-label="Aumentar fonte de todo o site">A+</button>
            <button class="btn-acessibilidade" onclick="toggleContrast()" id="btn-contraste">
                🌓 <span data-i18n="altoContraste">Alto Contraste</span>
            </button>
        </div>

        <!-- Grupo 2: Idiomas -->
        <div class="language-controls d-flex gap-2">
            <button id="btn-pt" class="btn-idioma active" onclick="mudarIdioma('pt')" aria-label="Mudar idioma para Português">PT</button>
            <button id="btn-en" class="btn-idioma" onclick="mudarIdioma('en')" aria-label="Mudar idioma para Inglês">EN</button>
            <button id="btn-es" class="btn-idioma" onclick="mudarIdioma('es')" aria-label="Mudar idioma para Espanhol">ES</button>
        </div>

    </div>

    <a href="#conteudo-principal" class="skip-link">Pular para o conteúdo principal</a>

    <header class="site-header">
        <div class="logo-container">
            <img src="media/unesc.png" alt="Logotipo UNews" class="logo-img">
        </div>
        
        <nav class="navbar navbar-expand navbar-dark main-nav" aria-label="Navegação principal">
            <div class="container-fluid justify-content-end">
                
                <div class="justify-content-end" id="navbarNav">
                   <ul class="navbar-nav ms-auto flex-row gap-1 gap-md-3">
                        <?php
                        $pagina_atual = basename($_SERVER['PHP_SELF']); 
                        ?>
                        <li class="nav-item">
                            <a class="nav-link <?php echo ($pagina_atual == 'index.php') ? 'active' : ''; ?>" href="index.php">
                                <i class="bi bi-newspaper me-1" aria-hidden="true"></i><span data-i18n="menuJornal">Jornal</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php echo ($pagina_atual == 'esportes.php') ? 'active' : ''; ?>" href="esportes.php">
                                <i class="bi bi-trophy me-1" aria-hidden="true"></i><span data-i18n="menuEsportes">Esportes</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php echo ($pagina_atual == 'entretenimento.php') ? 'active' : ''; ?>" href="entretenimento.php">
                                <i class="bi bi-film me-1" aria-hidden="true"></i><span data-i18n="menuEntretenimento">Entretenimento</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    