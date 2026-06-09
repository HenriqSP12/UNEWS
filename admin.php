<?php
session_start();

if (!isset($_SESSION['admin_logado']) || $_SESSION['admin_logado'] !== true) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UNews - Painel de Administração</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body class="admin-page">

<nav class="navbar navbar-dark admin-navbar mb-5 py-3">
    <div class="container">
        <span class="navbar-brand mb-0 h1 fs-3">
            <i class="bi bi-gear-fill me-2"></i> UNews | Painel Admin
        </span>
        <a href="index.php" class="btn btn-outline-light btn-sm">
            <i class="bi bi-box-arrow-up-right me-1"></i> Ver Portal
        </a>
    </div>
</nav>

<main class="container">
    <div class="row justify-content-center">
        <div class="col-lg-10">

            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1 class="h2" style="color: var(--azul-unesc); font-weight: bold;">Nova Publicação</h1>
            </div>

            <?php
            if (isset($_GET['sucesso'])) {
                echo '<div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
                        <i class="bi bi-check-circle-fill me-2"></i> Notícia publicada com sucesso no portal!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>';
            }
            ?>

            <form action="salvar_noticia.php" method="POST">
                
                <div class="admin-card">
                    <div class="admin-card-header">
                        <i class="bi bi-image"></i> Definições Visuais e Destino
                    </div>
                    <div class="admin-card-body">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="imagem" class="form-label">Caminho da Imagem</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-link-45deg"></i></span>
                                    <input type="text" class="form-control" id="imagem" name="imagem" placeholder="ex: media/noticia1.jpg" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="categoria" class="form-label">Categoria (Página)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-tags"></i></span>
                                    <select class="form-select" id="categoria" name="categoria" required>
                                        <option value="jornal">Jornal (Página Principal)</option>
                                        <option value="esportes">Esportes</option>
                                        <option value="entretenimento">Entretenimento</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="admin-card">
                    <div class="admin-card-header">
                        <span>🇧🇷 Conteúdo em Português (PT)</span>
                    </div>
                    <div class="admin-card-body">
                        <div class="mb-3">
                            <label for="titulo_pt" class="form-label">Título</label>
                            <input type="text" class="form-control form-control-lg" id="titulo_pt" name="titulo_pt" required>
                        </div>
                        <div class="mb-3">
                            <label for="resumo_pt" class="form-label">Resumo (Texto do Card)</label>
                            <textarea class="form-control" id="resumo_pt" name="resumo_pt" rows="2" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="conteudo_pt" class="form-label">Texto Completo <span class="text-muted fw-normal"></span></label>
                            <textarea class="form-control" id="conteudo_pt" name="conteudo_pt" rows="5" required></textarea>
                        </div>
                    </div>
                </div>

                <div class="admin-card">
                    <div class="admin-card-header">
                        <span>🇺🇸 Conteúdo em Inglês (EN)</span>
                    </div>
                    <div class="admin-card-body">
                        <div class="mb-3">
                            <label for="titulo_en" class="form-label">Título</label>
                            <input type="text" class="form-control" id="titulo_en" name="titulo_en" required>
                        </div>
                        <div class="mb-3">
                            <label for="resumo_en" class="form-label">Resumo (Texto do Card)</label>
                            <textarea class="form-control" id="resumo_en" name="resumo_en" rows="2" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="conteudo_en" class="form-label">Texto Completo</label>
                            <textarea class="form-control" id="conteudo_en" name="conteudo_en" rows="5" required></textarea>
                        </div>
                    </div>
                </div>

                <div class="admin-card">
                    <div class="admin-card-header">
                        <span>🇪🇸 Conteúdo em Espanhol (ES)</span>
                    </div>
                    <div class="admin-card-body">
                        <div class="mb-3">
                            <label for="titulo_es" class="form-label">Título</label>
                            <input type="text" class="form-control" id="titulo_es" name="titulo_es" required>
                        </div>
                        <div class="mb-3">
                            <label for="resumo_es" class="form-label">Resumo (Texto do Card)</label>
                            <textarea class="form-control" id="resumo_es" name="resumo_es" rows="2" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="conteudo_es" class="form-label">Texto Completo</label>
                            <textarea class="form-control" id="conteudo_es" name="conteudo_es" rows="5" required></textarea>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-end gap-3 mt-4 mb-5">
                    <a href="index.php" class="btn btn-light border btn-lg px-4">Cancelar</a>
                    <button type="submit" class="btn btn-publicar px-5">
                        <i class="bi bi-send-fill me-2"></i> Publicar Notícia
                    </button>
                </div>

            </form>
        </div>
    </div>
</main>
</body>
</html>
