// =========================================
// CONFIGURAÇÃO DO FIREBASE
// =========================================
// IMPORTANTE: Use as MESMAS credenciais dos outros arquivos
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
const db = firebase.firestore();

// =========================================
// FUNÇÃO PARA MOSTRAR MENSAGENS
// =========================================
function showMessage(text, type) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = text;
  messageDiv.className = `message ${type} show`;
  
  setTimeout(() => {
    messageDiv.classList.remove('show');
  }, 5000);
}

// =========================================
// VALIDAÇÃO DE SENHA EM TEMPO REAL
// =========================================
const senhaInput = document.getElementById('senhaCadastro');
const confirmarSenhaInput = document.getElementById('confirmarSenha');

function validatePassword() {
  const senha = senhaInput.value;
  const confirmarSenha = confirmarSenhaInput.value;
  
  // Validar comprimento
  const reqLength = document.getElementById('req-length');
  if (senha.length >= 6) {
    reqLength.className = 'requirement-met';
    reqLength.innerHTML = '✓ Mínimo de 6 caracteres';
  } else {
    reqLength.className = 'requirement-unmet';
    reqLength.innerHTML = '✗ Mínimo de 6 caracteres';
  }
  
  // Validar se as senhas coincidem
  const reqMatch = document.getElementById('req-match');
  if (senha && confirmarSenha && senha === confirmarSenha) {
    reqMatch.className = 'requirement-met';
    reqMatch.innerHTML = '✓ Senhas são iguais';
  } else if (confirmarSenha) {
    reqMatch.className = 'requirement-unmet';
    reqMatch.innerHTML = '✗ Senhas não coincidem';
  } else {
    reqMatch.className = 'requirement-unmet';
    reqMatch.innerHTML = '✗ Senhas devem ser iguais';
  }
}

senhaInput.addEventListener('input', validatePassword);
confirmarSenhaInput.addEventListener('input', validatePassword);

// =========================================
// MOSTRAR/OCULTAR SENHA
// =========================================
function togglePasswordVisibility() {
  const mostrarSenha = document.getElementById('mostrarSenhaCadastro').checked;
  const senhaInput = document.getElementById('senhaCadastro');
  const confirmarSenhaInput = document.getElementById('confirmarSenha');
  
  senhaInput.type = mostrarSenha ? 'text' : 'password';
  confirmarSenhaInput.type = mostrarSenha ? 'text' : 'password';
}

// =========================================
// FORMULÁRIO DE CADASTRO
// =========================================
document.getElementById('criarContaForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const nomeCompleto = document.getElementById('nomeCompleto').value.trim();
  const email = document.getElementById('emailCadastro').value.trim();
  const senha = document.getElementById('senhaCadastro').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;
  const btnCriarConta = document.getElementById('btnCriarConta');
  
  // Validações básicas
  if (!nomeCompleto) {
    showMessage('❌ Por favor, digite seu nome completo.', 'error');
    return;
  }
  
  if (!email) {
    showMessage('❌ Por favor, digite seu email.', 'error');
    return;
  }
  
  if (senha.length < 6) {
    showMessage('❌ A senha deve ter no mínimo 6 caracteres.', 'error');
    return;
  }
  
  if (senha !== confirmarSenha) {
    showMessage('❌ As senhas não coincidem.', 'error');
    return;
  }
  
  // Mostrar loading
  const originalText = btnCriarConta.textContent;
  btnCriarConta.textContent = 'Criando conta...';
  btnCriarConta.disabled = true;
  
  try {
    // Criar usuário no Firebase Authentication
    const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
    const user = userCredential.user;
    
    console.log('Usuário criado:', user.email);
    
    // Atualizar perfil com o nome
    await user.updateProfile({
      displayName: nomeCompleto
    });
    
    // Salvar dados adicionais no Firestore (opcional)
    try {
      await db.collection('usuarios').doc(user.uid).set({
        nome: nomeCompleto,
        email: email,
        dataCadastro: firebase.firestore.FieldValue.serverTimestamp(),
        status: 'ativo'
      });
      console.log('Dados salvos no Firestore');
    } catch (firestoreError) {
      console.warn('Firestore não configurado ou erro ao salvar:', firestoreError);
      // Não é um erro crítico, continuamos
    }
    
    // Enviar email de verificação (opcional)
    try {
      await user.sendEmailVerification();
      console.log('Email de verificação enviado');
    } catch (emailError) {
      console.warn('Erro ao enviar email de verificação:', emailError);
    }
    
    // Sucesso!
    showMessage('✅ Conta criada com sucesso! Redirecionando...', 'success');
    
    // Redirecionar para a página do aluno após 2 segundos
    setTimeout(() => {
      window.location.href = 'lg-aluno.html';
    }, 2000);
    
  } catch (error) {
    console.error('Erro ao criar conta:', error);
    
    let errorMessage = 'Erro ao criar conta. Tente novamente.';
    
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = '❌ Este email já está cadastrado. Faça login ou use outro email.';
        break;
      case 'auth/invalid-email':
        errorMessage = '❌ Email inválido. Digite um email válido.';
        break;
      case 'auth/weak-password':
        errorMessage = '❌ Senha muito fraca. Use no mínimo 6 caracteres.';
        break;
      case 'auth/operation-not-allowed':
        errorMessage = '❌ Cadastro de usuários não está habilitado. Entre em contato com o suporte.';
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
    btnCriarConta.textContent = originalText;
    btnCriarConta.disabled = false;
  }
});

// =========================================
// VALIDAÇÃO EM TEMPO REAL DO EMAIL
// =========================================
document.getElementById('emailCadastro').addEventListener('blur', function() {
  const email = this.value.trim();
  
  // Validação básica de formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (email && !emailRegex.test(email)) {
    showMessage('⚠️ Email em formato inválido.', 'error');
  }
});