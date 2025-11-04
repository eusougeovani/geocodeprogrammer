// =========================================
// CONFIGURAÇÃO DO FIREBASE
// =========================================
// IMPORTANTE: Use as MESMAS credenciais do demo-login.js
const firebaseConfig = {
  apiKey: "AIzaSyAk2xUEP6bIzxsYkgYaPk6HA3rUB5LeRkM",
  authDomain: "geocode-programmer.firebaseapp.com",
  projectId: "geocode-programmer",
  storageBucket: "geocode-programmer.firebasestorage.app",
  messagingSenderId: "111213061080",
  appId: "1:111213061080:web:7241326ec4922ef0a688ad"
};

// Inicializar Firebase (apenas se ainda não foi inicializado)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

// =========================================
// FUNÇÃO PARA MOSTRAR MENSAGENS
// =========================================
function showMessage(text, type) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = text;
  messageDiv.className = `message ${type} show`;
  
  // Auto-esconder após 5 segundos
  setTimeout(() => {
    messageDiv.classList.remove('show');
  }, 5000);
}

// =========================================
// FORMULÁRIO DE RECUPERAÇÃO
// =========================================
document.getElementById('recuperarSenhaForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const email = document.getElementById('emailRecuperacao').value.trim();
  const btnEnviar = document.getElementById('btnEnviar');
  
  // Validação básica
  if (!email) {
    showMessage('Por favor, digite seu email.', 'error');
    return;
  }
  
  // Mostrar loading
  const originalText = btnEnviar.textContent;
  btnEnviar.textContent = 'Enviando...';
  btnEnviar.disabled = true;
  
  try {
    // Configurar idioma do email para português
    auth.languageCode = 'pt-BR';
    
    // Enviar email de recuperação
    await auth.sendPasswordResetEmail(email);
    
    // Sucesso!
    showMessage(
      `✅ Email enviado com sucesso! Verifique sua caixa de entrada (${email})`,
      'success'
    );
    
    // Limpar formulário
    document.getElementById('emailRecuperacao').value = '';
    
    // Opcional: Redirecionar para login após 3 segundos
    setTimeout(() => {
      window.location.href = 'demo-login.html';
    }, 3000);
    
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    let errorMessage = 'Erro ao enviar email. Tente novamente.';
    
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = '❌ Email não encontrado. Verifique se digitou corretamente.';
        break;
      case 'auth/invalid-email':
        errorMessage = '❌ Email inválido. Digite um email válido.';
        break;
      case 'auth/too-many-requests':
        errorMessage = '⚠️ Muitas tentativas. Aguarde alguns minutos e tente novamente.';
        break;
      case 'auth/network-request-failed':
        errorMessage = '📡 Erro de conexão. Verifique sua internet.';
        break;
      default:
        errorMessage = `❌ Erro: ${error.message}`;
    }
    
    showMessage(errorMessage, 'error');
    
  } finally {
    // Restaurar botão
    btnEnviar.textContent = originalText;
    btnEnviar.disabled = false;
  }
});

// =========================================
// DETECTAR ENTER NO CAMPO DE EMAIL
// =========================================
document.getElementById('emailRecuperacao').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('recuperarSenhaForm').dispatchEvent(new Event('submit'));
  }
});