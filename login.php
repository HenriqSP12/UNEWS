<?php
session_start();
include 'conexao.php';

$erro = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = trim($_POST['usuario']);
    $senha_digitada = $_POST['senha'];

    // Busca o usuário no banco
    $sql = "SELECT id, senha_hash FROM usuarios_admin WHERE usuario = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
        $admin = $resultado->fetch_assoc();
        

        if (password_verify($senha_digitada, $admin['senha_hash'])) {

            $_SESSION['admin_logado'] = true;
            $_SESSION['admin_id'] = $admin['id'];
            
            header("Location: admin.php");
            exit();
        } else {
            $erro = "Usuário ou senha incorretos.";
        }
    } else {
        $erro = "Usuário ou senha incorretos.";
    }
    $stmt->close();
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Login - UNews</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light d-flex align-items-center justify-content-center" style="height: 100vh;">

    <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
        <h3 class="text-center mb-4" style="color: #003262;">Login UNews</h3>
        
        <?php if ($erro): ?>
            <div class="alert alert-danger"><?php echo $erro; ?></div>
        <?php endif; ?>

        <form method="POST" action="login.php">
            <div class="mb-3">
                <label>Usuário</label>
                <input type="text" name="usuario" class="form-control" required>
            </div>
            <div class="mb-3">
                <label>Senha</label>
                <input type="password" name="senha" class="form-control" required>
            </div>
            <button type="submit" class="btn w-100" style="background-color: #003262; color: white;">Entrar</button>
        </form>
    </div>

</body>
</html>