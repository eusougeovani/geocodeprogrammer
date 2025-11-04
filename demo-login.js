/**const users = [
    { usuario: "aluno", senha: "aluno", redirect: "lg-aluno.html" },
    { usuario: "agdafranciellesilvasantos", senha: "Schoolagda2026", redirect: "lg-agdafranciellesilvasantos.html" },
    { usuario: "george171", senha: "5167rnzx", redirect: "lg-george171.html" },
    { usuario: "marialeticia", senha: "Maracujabom", redirect: "lg-marialeticia.html" },
    { usuario: "gabrielxy75", senha: "obgs007", redirect: "lg-gabrielxy75.html" },
    { usuario: "gust07", senha: "Rlkbr126", redirect: "lg-gust07.html" },
    { usuario: "giovannanovaes", senha: "vascodagama", redirect: "lg-giovannanovaes.html" },
    { usuario: "roberts", senha: "26082011", redirect: "lg-roberts.html" },
    { usuario: "caua", senha: "Caua123", redirect: "lg-caua.html" },
    { usuario: "annebeatrizsilvadacosta", senha: "bia18", redirect: "lg-annebeatrizsilvadacosta.html" }
];**/

// =========================================
// CONFIGURAÇÃO DO FIREBASE
// =========================================
// IMPORTANTE: Substitua com suas credenciais do Firebase!
const firebaseConfig = {
  apiKey: "AIzaSyAk2xUEP6bIzxsYkgYaPk6HA3rUB5LeRkM",
  authDomain: "geocode-programmer.firebaseapp.com",
  projectId: "geocode-programmer",
  storageBucket: "geocode-programmer.firebasestorage.app",
  messagingSenderId: "111213061080",
  appId: "1:111213061080:web:7241326ec4922ef0a688ad"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// =========================================
// MAPEAMENTO DE USUÁRIOS PARA PÁGINAS
// =========================================
// Aqui você define qual página cada usuário acessa após login
const userPages = {
  "geocodeprogrammer@gmail.com": "lg-aluno.html",
  "agdafranciellesilvasantos@geocode.com": "lg-agdafranciellesilvasantos.html",
  "george171@geocode.com": "lg-george171.html",
  "marialeticia@geocode.com": "lg-marialeticia.html",
  "gabrielxy75@geocode.com": "lg-gabrielxy75.html",
  "gust07@geocode.com": "lg-gust07.html",
  "giovannanovaes@geocode.com": "lg-giovannanovaes.html",
  "roberts@geocode.com": "lg-roberts.html",
  "caua@geocode.com": "lg-caua.html",
  "annebeatrizsilvadacosta@geocode.com": "lg-annebeatrizsilvadacosta.html"
};

// =========================================
// FUNÇÃO DE LOGIN
// =========================================
document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.querySelector("input[name='usuario']").value.trim();
  const senha = document.querySelector("input[name='senha']").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  // Mostrar loading (opcional)
  const btnSubmit = document.querySelector(".btn");
  const originalText = btnSubmit.textContent;
  btnSubmit.textContent = "Entrando...";
  btnSubmit.disabled = true;

  try {
    // Fazer login com Firebase
    const userCredential = await auth.signInWithEmailAndPassword(email, senha);
    const user = userCredential.user;

    console.log("Login bem-sucedido:", user.email);

    // Salvar preferência de "Lembrar-me"
    if (rememberMe) {
      localStorage.setItem("rememberEmail", email);
    } else {
      localStorage.removeItem("rememberEmail");
    }

    // Redirecionar para a página específica do usuário
    const redirectPage = userPages[email] || "lg-aluno.html";
    window.location.href = redirectPage;

  } catch (error) {
    // Tratar erros
    console.error("Erro no login:", error.code, error.message);
    
    let errorMessage = "Erro ao fazer login. Tente novamente.";
    
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = "Usuário não encontrado!";
        break;
      case 'auth/wrong-password':
        errorMessage = "Senha incorreta!";
        break;
      case 'auth/invalid-email':
        errorMessage = "Email inválido!";
        break;
      case 'auth/too-many-requests':
        errorMessage = "Muitas tentativas. Aguarde um momento.";
        break;
      case 'auth/network-request-failed':
        errorMessage = "Erro de conexão. Verifique sua internet.";
        break;
    }

    alert(errorMessage);

    // Restaurar botão
    btnSubmit.textContent = originalText;
    btnSubmit.disabled = false;
  }
});

// =========================================
// FUNÇÃO PARA MOSTRAR/OCULTAR SENHA
// =========================================
window.mostrarSenhaFunc = function () {
  const senhaInput = document.getElementById("senha");
  if (senhaInput) {
    senhaInput.type = senhaInput.type === "password" ? "text" : "password";
  }
};

// =========================================
// CARREGAR EMAIL SALVO (LEMBRAR-ME)
// =========================================
window.addEventListener("DOMContentLoaded", () => {
  const savedEmail = localStorage.getItem("rememberEmail");
  const usernameInput = document.querySelector("input[name='usuario']");
  const rememberMeCheckbox = document.getElementById("rememberMe");

  if (savedEmail && usernameInput) {
    usernameInput.value = savedEmail;
    rememberMeCheckbox.checked = true;
  }
});

// =========================================
// VERIFICAR SE USUÁRIO JÁ ESTÁ LOGADO
// =========================================
auth.onAuthStateChanged((user) => {
  if (user && window.location.pathname.includes('demo-login.html')) {
    // Se já está logado e está na página de login, redireciona
    const redirectPage = userPages[user.email] || "lg-aluno.html";
    console.log("Usuário já logado, redirecionando...");
    // Descomentar a linha abaixo se quiser redirecionar automaticamente
    // window.location.href = redirectPage;
  }
});