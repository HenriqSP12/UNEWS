<?php
// conexao.php
$conn = new mysqli("localhost", "root", "", "unews_db");

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}
// Garante que caracteres especiais (como acentos) venham corretos do banco
$conn->set_charset("utf8mb4"); 
?>