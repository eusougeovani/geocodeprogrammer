const users = [
    { usuario: "aluno", senha: "aluno", redirect: "lg-aluno.html" },
    { usuario: "agdafranciellesilvasantos", senha: "Schoolagda2026", redirect: "lg-agdafranciellesilvasantos.html" },
    { usuario: "george171", senha: "5167rnzx", redirect: "lg-george171.html" },
    { usuario: "marialeticia", senha: "Maracujabom", redirect: "lg-marialeticia.html" },
    { usuario: "gabrielxy75", senha: "obgs007", redirect: "lg-gabrielxy75.html" },
    { usuario: "gust07", senha: "Rlkbr126", redirect: "lg-gust07.html" }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.querySelector("input[name='usuario']").value;
    const senha = document.querySelector("input[name='senha']").value;

    const user = users.find(u => u.usuario === usuario && u.senha === senha);

    if (user) {
        // se quiser lembrar login no localStorage
        if (document.getElementById("rememberMe").checked) {
            localStorage.setItem("usuarioLogado", usuario);
        }
        window.location.href = user.redirect;
    } else {
        alert("Usuário ou senha incorretos!");
    }
});

// Função global para mostrar/ocultar senha
window.mostrarSenhaFunc = function () {
    var senhaInput = document.getElementById("senha");
    if (senhaInput) {
        senhaInput.type = senhaInput.type === "password" ? "text" : "password";
    }
};

const usernameInput = document.getElementById("username");
const rememberMeCheckbox = document.getElementById("rememberMe");

// Ao carregar a página, verifica se há usuário salvo
window.addEventListener("DOMContentLoaded", () => {
    const savedUsername = localStorage.getItem("savedUsername");
    const rememberMe = localStorage.getItem("rememberMe") === "true";

    if (rememberMe && savedUsername) {
        usernameInput.value = savedUsername;
        rememberMeCheckbox.checked = true;
    }
});

// Quando o checkbox ou o campo de usuário mudarem
rememberMeCheckbox.addEventListener("change", () => {
    if (rememberMeCheckbox.checked) {
        localStorage.setItem("savedUsername", usernameInput.value);
        localStorage.setItem("rememberMe", true);
    } else {
        localStorage.removeItem("savedUsername");
        localStorage.setItem("rememberMe", false);
    }
});

// Atualiza o nome salvo ao digitar, se "lembrar-me" estiver ativo
usernameInput.addEventListener("input", () => {
    if (rememberMeCheckbox.checked) {
        localStorage.setItem("savedUsername", usernameInput.value);
    }
});

// Mostrar senha
function mostrarSenhaFunc() {
    var senhaInput = document.getElementById("senha");
    senhaInput.type = senhaInput.type === "password" ? "text" : "password";
}