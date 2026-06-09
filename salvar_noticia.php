<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Agora só precisamos chamar o nosso arquivo central!
    include 'conexao.php';

    // O uso de Prepared Statements (?) separa o comando SQL dos dados digitados pelo usuário
    $sql = "INSERT INTO noticias (categoria, imagem, titulo_pt, resumo_pt, conteudo_pt, titulo_en, resumo_en, conteudo_en, titulo_es, resumo_es, conteudo_es) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // Prepara a instrução no banco de dados
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // O "sssssssssss" indica que estamos passando 11 parâmetros do tipo String (s)
        // O PHP cuida de limpar e escapar esses dados automaticamente, blindando o banco
        $stmt->bind_param("sssssssssss", 
            $_POST['categoria'], 
            $_POST['imagem'], 
            $_POST['titulo_pt'], 
            $_POST['resumo_pt'], 
            $_POST['conteudo_pt'], 
            $_POST['titulo_en'], 
            $_POST['resumo_en'], 
            $_POST['conteudo_en'], 
            $_POST['titulo_es'], 
            $_POST['resumo_es'], 
            $_POST['conteudo_es']
        );

        // Executa a query com segurança
        if ($stmt->execute()) {
            header("Location: admin.php?sucesso=1");
            exit(); // É sempre uma boa prática colocar um exit() logo após um redirecionamento
        } else {
            echo "Erro ao publicar: " . $stmt->error;
        }

        // Fecha a instrução
        $stmt->close();
    } else {
        echo "Erro na preparação da instrução SQL: " . $conn->error;
    }

    // Fecha a conexão
    $conn->close();
} else {
    header("Location: admin.php");
    exit();
}
?>