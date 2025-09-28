const users = [
    { usuario: "agdafranciellesilvasantos", senha: "Schoolagda2026", redirect: "lg-agdafranciellesilvasantos.html" },
    { usuario: "george171", senha: "5167rnzx", redirect: "lg-george171.html" },
    { usuario: "marialeticia", senha: "Maracujabom", redirect: "lg-marialeticia.html" }
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