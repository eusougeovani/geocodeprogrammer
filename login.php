<?php
session_start(); // Inicia a sessão no topo do arquivo

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

$db = new SQLite3('usuarios.db');

$stmt = $db->prepare('SELECT pagina FROM usuarios WHERE usuario = :usuario AND senha = :senha');
$stmt->bindValue(':usuario', $usuario, SQLITE3_TEXT);
$stmt->bindValue(':senha', $senha, SQLITE3_TEXT);
$result = $stmt->execute();

$row = $result->fetchArray();
if ($row) {
    // Salva o nome do usuário na sessão
    $_SESSION['usuario'] = $usuario;

    // Redireciona para a página do usuário
    header("Location: " . $row['pagina']);
    exit();
} else {
    echo "Login ou senha inválidos.";
}
