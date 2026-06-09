<?php

$conn = new mysqli("localhost", "root", "", "unews_db");

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

$conn->set_charset("utf8mb4"); 
?>