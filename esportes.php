<?php
include 'conexao.php';

$categoriaAtual = 'esportes'; 

$sql = "SELECT n.id, n.categoria, n.imagem, t.idioma, t.titulo, t.resumo, t.conteudo 
        FROM noticias n
        JOIN noticias_traducoes t ON n.id = t.noticia_id
        WHERE n.categoria = '$categoriaAtual'
        ORDER BY n.id DESC";

$resultado = $conn->query($sql);
$noticiasAgrupadas = [];

if ($resultado) {
    while ($linha = $resultado->fetch_assoc()) {
        $id = $linha['id'];
        
        if (!isset($noticiasAgrupadas[$id])) {
            $noticiasAgrupadas[$id] = [
                'id' => $id,
                'imagem' => $linha['imagem'],
                'categoria' => $linha['categoria']
            ];
        }
        
        $lang = $linha['idioma']; 
        $noticiasAgrupadas[$id]["titulo_$lang"] = $linha['titulo'];
        $noticiasAgrupadas[$id]["resumo_$lang"] = $linha['resumo'];
        $noticiasAgrupadas[$id]["conteudo_$lang"] = $linha['conteudo'];
    }
}

$noticias = array_values($noticiasAgrupadas);

include 'header.php';
?>

    <main id="conteudo-principal" class="container mt-4">
        <h1 class="visually-hidden">Seção de Esportes - UNews</h1>

        <div class="container mt-4 mb-4">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <input type="text" id="campo-busca" class="form-control form-control-lg" placeholder="Pesquisar notícias..." data-i18n-placeholder="buscar" aria-label="Digite aqui para filtrar as notícias">
                </div>
            </div>
        </div>

        <?php 
        $noticiasDestaque = array_slice($noticias, 0, 3); 
        ?>

        <?php if (!empty($noticiasDestaque)): ?>
            <section aria-label="Notícias em destaque" class="carousel-section">
                <div id="noticiasDestaqueCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <?php foreach ($noticiasDestaque as $index => $destaque): ?>
                            <button type="button" data-bs-target="#noticiasDestaqueCarousel" data-bs-slide-to="<?php echo $index; ?>" class="<?php echo $index === 0 ? 'active' : ''; ?>" aria-current="<?php echo $index === 0 ? 'true' : 'false'; ?>" aria-label="Slide <?php echo $index + 1; ?>"></button>
                        <?php endforeach; ?>
                    </div>
                    
                    <div class="carousel-inner rounded shadow-sm">
                        <?php foreach ($noticiasDestaque as $index => $destaque): ?>
                            <div class="carousel-item <?php echo $index === 0 ? 'active' : ''; ?>">
                                
                                <div class="carousel-img-wrapper" style="cursor: pointer; height: 400px; position: relative;" 
                                     onclick="abrirNoticia('noticia-<?php echo $destaque['id']; ?>', this)" 
                                     role="button" tabindex="0" 
                                     aria-label="Abrir notícia: <?php echo htmlspecialchars($destaque['titulo_pt']); ?>" 
                                     onkeypress="if(event.key === 'Enter') abrirNoticia('noticia-<?php echo $destaque['id']; ?>', this)">
                                    
                                    <img src="<?php echo htmlspecialchars($destaque['imagem']); ?>" class="d-block w-100 h-100" style="object-fit: cover;" alt="Imagem da notícia: <?php echo htmlspecialchars($destaque['titulo_pt']); ?>">
                                    
                                    <div class="carousel-caption d-none d-md-block" style="background: rgba(0, 50, 98, 0.85); border-radius: 8px; padding: 10px;">
                                        <h5 data-i18n="tituloNoticia<?php echo $destaque['id']; ?>" class="mb-0 fw-bold"><?php echo htmlspecialchars($destaque['titulo_pt']); ?></h5>
                                    </div>
                                </div>

                            </div>
                        <?php endforeach; ?>
                    </div>
                    
                    <?php if (count($noticiasDestaque) > 1): ?>
                        <button class="carousel-control-prev" type="button" data-bs-target="#noticiasDestaqueCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Anterior</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#noticiasDestaqueCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Próximo</span>
                        </button>
                    <?php endif; ?>
                </div>
            </section>
        <?php endif; ?>

        <section class="ultimas-noticias-section mt-5">
            <h2 class="section-title" data-i18n="tituloEsportes">Últimas do Esporte</h2>
            
            <div class="row g-4 justify-content-center">
                <?php if (empty($noticias)): ?>
                    <p class="text-center" data-i18n="semNoticiasEsportes">Nenhuma notícia sobre esportes publicada ainda.</p>
                <?php else: ?>
                    <?php foreach ($noticias as $noticia): ?>
                        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                            <article class="card news-card h-100">
                                <img src="<?php echo htmlspecialchars($noticia['imagem']); ?>" class="card-img-top" alt="Imagem da notícia" style="height: 200px; object-fit: cover;">
                                <div class="card-body d-flex flex-column">
                                    <h3 class="card-title" data-i18n="tituloNoticia<?php echo $noticia['id']; ?>">
                                        <?php echo htmlspecialchars($noticia['titulo_pt']); ?>
                                    </h3>
                                    <p class="card-text" data-i18n="resumoNoticia<?php echo $noticia['id']; ?>">
                                        <?php echo htmlspecialchars($noticia['resumo_pt']); ?>
                                    </p>
                                    <button class="btn btn-action mt-auto leia-mais" onclick="abrirNoticia('noticia-<?php echo $noticia['id']; ?>', this)" data-i18n="leiaMais">Leia mais</button>
                                </div>
                            </article>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </section>

        <section id="area-leitura" class="leitura-container mt-5 p-4 rounded shadow" tabindex="-1" style="display: none;" aria-live="polite">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-start border-bottom pb-3 mb-4 gap-3">
                
                <div>
                    <h2 id="leitor-titulo" class="mb-0" style="color: var(--azul-unesc); font-weight: bold;">Título</h2>
                    <p id="leitor-subtitulo" class="mt-2 mb-0 fs-5 text-muted">lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                </div>
                
                <div class="d-flex flex-wrap gap-2">
                    <button class="btn btn-outline-primary fw-bold" onclick="lerNoticiaEmVozAlta()" aria-label="Ouvir texto da notícia" data-i18n="ouvirNoticia">🔊 Ouvir Notícia</button>
                    <button class="btn btn-outline-secondary fw-bold" onclick="pararLeitura()" aria-label="Parar leitura em voz alta" data-i18n="pararLeitura">⏹️ Parar</button>
                    <button class="btn btn-danger fw-bold fechar-btn" onclick="fecharNoticia()" aria-label="Fechar notícia e voltar aos cards" data-i18n="fechar">Fechar [X]</button>
                </div>
            </div>
                        
            <div id="leitor-conteudo" class="leitor-texto"></div>
        </section>

        <div id="templates-noticias" style="display: none;" aria-hidden="true">
            <?php foreach ($noticias as $noticia): ?>
                <div id="template-noticia-<?php echo $noticia['id']; ?>-pt"><?php echo $noticia['conteudo_pt']; ?></div>
                <div id="template-noticia-<?php echo $noticia['id']; ?>-en"><?php echo $noticia['conteudo_en']; ?></div>
                <div id="template-noticia-<?php echo $noticia['id']; ?>-es"><?php echo $noticia['conteudo_es']; ?></div>
            <?php endforeach; ?>
        </div>
    </main>

    <script>
        if (typeof traducoes !== 'undefined') {
            <?php foreach ($noticias as $noticia): ?>
                traducoes['pt']['tituloNoticia<?php echo $noticia['id']; ?>'] = <?php echo json_encode($noticia['titulo_pt']); ?>;
                traducoes['pt']['resumoNoticia<?php echo $noticia['id']; ?>'] = <?php echo json_encode($noticia['resumo_pt']); ?>;
                traducoes['en']['tituloNoticia<?php echo $noticia['id']; ?>'] = <?php echo json_encode($noticia['titulo_en']); ?>;
                traducoes['en']['resumoNoticia<?php echo $noticia['id']; ?>'] = <?php echo json_encode($noticia['resumo_en']); ?>;
                traducoes['es']['tituloNoticia<?php echo $noticia['id']; ?>'] = <?php echo json_encode($noticia['titulo_es']); ?>;
                traducoes['es']['resumoNoticia<?php echo $noticia['id']; ?>'] = <?php echo json_encode($noticia['resumo_es']); ?>;
            <?php endforeach; ?>
        }
    </script>

<?php include 'footer.php'; ?>