<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    include 'conexao.php';


    $conn->begin_transaction();

    try {

        $sqlNoticia = "INSERT INTO noticias (categoria, imagem) VALUES (?, ?)";
        $stmt1 = $conn->prepare($sqlNoticia);
        $stmt1->bind_param("ss", $_POST['categoria'], $_POST['imagem']);
        $stmt1->execute();

        $id_noticia = $conn->insert_id;
        $stmt1->close();

        $sqlTraducao = "INSERT INTO noticias_traducoes (noticia_id, idioma, titulo, resumo, conteudo) VALUES (?, ?, ?, ?, ?)";
        $stmt2 = $conn->prepare($sqlTraducao);


        $idiomas = ['pt', 'en', 'es'];

        foreach ($idiomas as $lang) {

            $titulo = $_POST["titulo_$lang"];
            $resumo = $_POST["resumo_$lang"];
            $conteudo = $_POST["conteudo_$lang"];

            $stmt2->bind_param("issss", $id_noticia, $lang, $titulo, $resumo, $conteudo);
            $stmt2->execute();
        }
        $stmt2->close();


        $conn->commit();
        

        header("Location: admin.php?sucesso=1");
        exit();

    } catch (Exception $e) {

        $conn->rollback();
        echo "Erro ao publicar a notícia: " . $e->getMessage();
    }


    $conn->close();
} else {

    header("Location: admin.php");
    exit();
}
?>