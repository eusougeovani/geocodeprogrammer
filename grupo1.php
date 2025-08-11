<?php
session_start();

// Verifica se o usuário está logado
if (!isset($_SESSION['usuario']) || $_SESSION['usuario'] != 'grupo1') {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grupo 1</title>
    <link rel="icon" type="image/png" href="logo.png">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>

<body>
    <div class="social-sidebar-hotzone"></div>
    <aside class="social-sidebar">
        <a href="https://wa.me/+5579988663905" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="https://instagram.com/geovanikeeper" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.youtube.com/@GEOCODEProgrammer" target="_blank" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://discord.gg/96WEpwWWG2" target="_blank" aria-label="Discord"><i class="fa-brands fa-discord"></i></a>
        <a href="mailto:geocodeprogrammer@gmail.com" target="_blank" aria-label="Gmail"><i class="fa-solid fa-envelope"></i></a>
    </aside>
    <header>
        <h1 class="tech-title">Grupo 1</h1>
        <a href="logout.php" class="logout-btn">Sair</a>
    </header>
    <!-- Frequência e Notas -->
    <section>
        <h2>Frequência e Notas</h2>
        <table>
            <thead>
                <tr>
                    <th>Aluno</th>
                    <th>Presenças</th>
                    <th>Faltas</th>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Média</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>João Silva</td>
                    <td>20</td>
                    <td>2</td>
                    <td>8.5</td>
                    <td>9.0</td>
                    <td>8.75</td>
                </tr>
                <tr>
                    <td>Maria Souza</td>
                    <td>19</td>
                    <td>3</td>
                    <td>7.0</td>
                    <td>8.5</td>
                    <td>7.75</td>
                </tr>
            </tbody>
        </table>
    </section>

    <!-- Nota, Ranking, Última Visualização -->
    <section>
        <h2>Informações Gerais</h2>
        <div class="stats-container">
            <div class="stat-box">Nota: 8.75</div>
            <div class="stat-box">Ranking: #2</div>
            <div class="stat-box">Última Visualização: 10/08/2025</div>
        </div>
    </section>

    <!-- Arquivos -->
    <section>
        <h2>Arquivos Disponíveis</h2>
        <table>
            <thead>
                <tr>
                    <th>Nome do Arquivo</th>
                    <th>Data</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Prova 1 - Matemática.pdf</td>
                    <td>01/08/2025</td>
                    <td><button class="btn-acessar">Acessar</button></td>
                </tr>
                <tr>
                    <td>Lista de Exercícios.docx</td>
                    <td>05/08/2025</td>
                    <td><button class="btn-acessar">Acessar</button></td>
                </tr>
            </tbody>
        </table>
    </section>

    <footer>
        <p>&copy; 2025 Geovani Santos. Todos os direitos reservados.</p>
        <p>Desenvolvido por <a href="https://instagram.com/geovanikeeper">Geovani Santos</a></p>
    </footer>
    <script src="index.js"></script>
    <script>
        // Menu lateral independente e responsivo
        document.addEventListener('DOMContentLoaded', function () {
            var menuToggle = document.getElementById('menu-toggle');
            var sideMenu = document.getElementById('side-menu');
            var closeMenu = document.getElementById('close-menu');
            if (menuToggle && sideMenu && closeMenu) {
                menuToggle.onclick = function () {
                    sideMenu.classList.add('open');
                    menuToggle.setAttribute('aria-expanded', 'true');
                };
                closeMenu.onclick = function () {
                    sideMenu.classList.remove('open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                };
                document.addEventListener('click', function (e) {
                    if (
                        sideMenu.classList.contains('open') &&
                        !sideMenu.contains(e.target) &&
                        e.target !== menuToggle
                    ) {
                        sideMenu.classList.remove('open');
                        menuToggle.setAttribute('aria-expanded', 'false');
                    }
                });
            }
        });
    </script>
</body>

</html>