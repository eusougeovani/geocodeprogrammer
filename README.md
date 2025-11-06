# 🎓 GEOCODE Programmer

> Plataforma educacional web para gestão de cursos e portfólio de projetos

[![Firebase](https://img.shields.io/badge/Firebase-9.22.0-orange.svg)](https://firebase.google.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Sobre o Projeto

GEOCODE Programmer é uma plataforma web educacional desenvolvida para apresentar portfólio de projetos e servir como portal de acesso para alunos de cursos de tecnologia. O sistema oferece gestão completa de usuários, cursos e materiais didáticos.

### ✨ Funcionalidades Principais

- 🔐 **Sistema de Autenticação Completo**
  - Login seguro com Firebase Authentication
  - Cadastro de novos usuários
  - Recuperação de senha via email
  - Sessões persistentes

- 📚 **Gestão de Cursos**
  - Design Gráfico
  - Desenvolvimento de Jogos
  - Desenvolvimento Web
  - Informática
  - Pacote Office

- 👨‍🎓 **Portal do Aluno**
  - Visualização de notas
  - Controle de frequência
  - Acesso a materiais de aula
  - Agenda de horários
  - Links para grupos e comunidades

- 🎨 **Portfólio de Projetos**
  - Carrossel interativo
  - Categorias: Design, Jogos, Web, Informática, Office
  - Integração com Google Drive

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna e responsiva
- **JavaScript (ES6+)** - Interatividade e lógica

### Backend & Database
- **Firebase Authentication** - Gerenciamento de usuários
- **Firebase Firestore** - Banco de dados NoSQL (opcional)
- **Firebase Hosting** - Hospedagem (recomendado)

### Bibliotecas & APIs
- **Font Awesome 6.5.0** - Ícones
- **Firebase SDK 9.22.0** - Integração com serviços Firebase

## 📁 Estrutura do Projeto

```
geocodeprogrammer/
│
├── index.html                 # Página inicial
├── sobre.html                 # Sobre o professor
├── cursos.html                # Lista de cursos
├── projetos.html              # Portfólio de projetos
│
├── demo-login.html            # Página de login
├── criar-conta.html           # Cadastro de usuários
├── recuperar-senha.html       # Recuperação de senha
│
├── curso-designgr.html        # Plano de aula Design Gráfico
├── curso-devweb.html          # Plano de aula Dev Web
├── curso-devgames.html        # Plano de aula Dev Jogos
├── curso-informatica.html     # Plano de aula Informática
├── curso-pctoffice.html       # Plano de aula Pacote Office
│
├── lg-aluno.html              # Portal do aluno (template)
├── lg-[username].html         # Portais personalizados
│
├── css/
│   ├── indexstyle.css         # Estilos da página inicial
│   ├── cursos.css             # Estilos dos cursos
│   ├── curso-style.css        # Estilos dos planos de aula
│   ├── projetos.css           # Estilos do portfólio
│   ├── sobrestyle.css         # Estilos sobre mim
│   ├── demo-loginstyle.css    # Estilos de autenticação
│   ├── lg-aluno.css           # Estilos do portal do aluno
│   └── footer.css             # Estilos do rodapé
│
├── js/
│   ├── menu.js                # Menu lateral responsivo
│   ├── index-carrossel.js     # Carrossel da página inicial
│   ├── projetos.js            # Carrossel de projetos
│   ├── demo-login.js          # Lógica de login
│   ├── criar-conta.js         # Lógica de cadastro
│   └── recuperar-senha.js     # Lógica de recuperação
│
├── cursos/                    # Imagens dos cursos
├── projetos/                  # Imagens dos projetos
├── perfil/                    # Fotos de perfil
├── certificados/              # Certificados digitalizados
├── inicial/                   # Banners do carrossel
│
└── icon_geocode.png           # Favicon
```

## ⚙️ Configuração e Instalação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conta no [Firebase Console](https://console.firebase.google.com/)
- Editor de código (VS Code recomendado)

### Passo 1: Clone o Repositório

```bash
git clone https://github.com/eusougeovani/geocodeprogrammer.git
cd geocodeprogrammer
```

### Passo 2: Configurar Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Ative **Authentication** > E-mail/senha
4. (Opcional) Ative **Firestore Database**
5. Copie as credenciais do projeto

### Passo 3: Configurar Credenciais

Abra os seguintes arquivos e substitua as credenciais do Firebase:

**demo-login.js:**
```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

Repita para:
- `criar-conta.js`
- `recuperar-senha.js`

### Passo 4: Cadastrar Usuários Iniciais

No Firebase Console:
1. Vá em **Authentication** > **Users**
2. Clique em **"Adicionar usuário"**
3. Cadastre seus alunos com email e senha

### Passo 5: Executar Localmente

Opção 1 - Live Server (VS Code):
```bash
# Instale a extensão Live Server
# Clique direito no index.html > Open with Live Server
```

Opção 2 - Python:
```bash
python -m http.server 8000
# Acesse http://localhost:8000
```

Opção 3 - Node.js:
```bash
npx serve
# Acesse http://localhost:3000
```

## 🔐 Sistema de Autenticação

### Login
- Rota: `demo-login.html`
- Autenticação via Firebase
- Sessões persistentes com "Lembrar-me"
- Redirecionamento personalizado por usuário

### Cadastro
- Rota: `criar-conta.html`
- Validação em tempo real
- Confirmação de senha
- Email de verificação automático
- Salvamento de dados no Firestore

### Recuperação de Senha
- Rota: `recuperar-senha.html`
- Email automático com link de redefinição
- Link expira em 1 hora
- Template personalizável

### Mapeamento de Usuários

No `demo-login.js`, configure as rotas de redirecionamento:

```javascript
const userPages = {
  "aluno@geocode.com": "lg-aluno.html",
  "maria@geocode.com": "lg-maria.html",
  // Adicione seus alunos aqui
};
```

## 🎨 Personalização

### Cores do Tema

Edite as variáveis CSS nos arquivos de estilo:

```css
/* Cores principais */
--primary: #4fe0c6;
--secondary: #00d4ff;
--dark: #0a1b33;
--darker: #0b223f;
--accent: #1affc9;
```

### Adicionar Novo Curso

1. Crie `curso-[nome].html`
2. Copie a estrutura de um curso existente
3. Adicione o card em `cursos.html`:

```html
<a href="curso-[nome].html" class="curso-card">
    <img src="cursos/[nome].png" alt="Nome do Curso">
    <span>Nome do Curso</span>
</a>
```

### Adicionar Projeto ao Portfólio

Em `projetos.html`, adicione um card no carrossel da categoria desejada:

```html
<div class="carrossel-card">
    <img src="projetos/[imagem].png" alt="Projeto">
    <div class="card-info">
        <h3>Nome do Projeto</h3>
        <span class="solicitante">Solicitado por: Cliente</span>
        <p>Descrição do projeto...</p>
        <a href="[link]" target="_blank">Ver Projeto</a>
        <div class="carrossel-controls">
            <button class="carrossel-btn prev">&#10094;</button>
            <button class="carrossel-btn next">&#10095;</button>
        </div>
    </div>
</div>
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:

- **Mobile:** < 600px
- **Tablet:** 600px - 900px
- **Desktop:** > 900px

Todos os componentes se adaptam automaticamente ao tamanho da tela.

## 🐛 Problemas Conhecidos e Soluções

### Encoding UTF-8
**Problema:** Caracteres especiais aparecem incorretos (Ã¡ ao invés de á)

**Solução:**
```bash
# No VS Code: File > Save with Encoding > UTF-8
# Ou adicione no <head>:
<meta charset="UTF-8">
```

### Firebase não inicializa
**Problema:** Erro "Firebase not defined"

**Solução:**
- Verifique se os scripts do Firebase estão carregando antes do seu código
- Ordem correta:
```html
<script src="firebase-app-compat.js"></script>
<script src="firebase-auth-compat.js"></script>
<script src="seu-codigo.js"></script>
```

### Carrossel não funciona
**Problema:** Imagens não mudam

**Solução:**
- Verifique se `menu.js` e o script específico do carrossel estão carregando
- Abra o Console (F12) para ver erros

## 🔒 Segurança

### ✅ Boas Práticas Implementadas

- ✅ Senhas criptografadas pelo Firebase
- ✅ Autenticação server-side
- ✅ Proteção contra força bruta
- ✅ Links de recuperação com expiração
- ✅ Validação de email

### ⚠️ Considerações

- **NÃO** exponha suas credenciais do Firebase em repositórios públicos
- Configure regras de segurança no Firestore
- Use variáveis de ambiente em produção
- Implemente HTTPS obrigatório

## 📊 Banco de Dados (Firestore)

### Estrutura Recomendada

```
usuarios/
  └── {userId}
      ├── nome: string
      ├── email: string
      ├── dataCadastro: timestamp
      ├── turma: string
      ├── curso: string
      └── status: string

cursos/
  └── {cursoId}
      ├── nome: string
      ├── descricao: string
      ├── duracao: number
      └── materiais: array

notas/
  └── {userId}
      └── {modulo}: number
```

### Regras de Segurança

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuários podem ler e escrever seus próprios dados
    match /usuarios/{userId} {
      allow read, write: if request.auth != null 
                         && request.auth.uid == userId;
    }
    
    // Apenas leitura de cursos para usuários autenticados
    match /cursos/{cursoId} {
      allow read: if request.auth != null;
      allow write: if false; // Apenas admin via console
    }
  }
}
```

## 🚀 Deploy

### Firebase Hosting (Recomendado)

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Deploy
firebase deploy
```

### Outras Opções

- **GitHub Pages:** Gratuito, mas sem backend
- **Netlify:** Deploy automático via Git
- **Vercel:** Integração com GitHub
- **Hostinger/GoDaddy:** Hospedagem tradicional

## 📈 Melhorias Futuras

- [ ] Sistema de chat entre aluno e professor
- [ ] Upload de atividades pelos alunos
- [ ] Notificações push
- [ ] Modo escuro/claro
- [ ] PWA (Progressive Web App)
- [ ] Relatórios em PDF
- [ ] Integração com Google Classroom
- [ ] Sistema de gamificação (badges, pontos)
- [ ] Área administrativa completa
- [ ] Multi-idioma (PT/EN/ES)

## 📝 Checklist de Melhorias Aplicadas

- [x] Corrigir encoding UTF-8
- [x] Remover senhas do código-fonte
- [x] Implementar Firebase Authentication
- [x] Adicionar recuperação de senha
- [x] Criar sistema de cadastro
- [x] Remover código duplicado do carrossel
- [ ] Adicionar meta tags para SEO
- [ ] Melhorar acessibilidade (ARIA labels)
- [ ] Otimizar imagens
- [ ] Adicionar loading states
- [ ] Consolidar estilos repetidos
- [ ] Implementar modo escuro/claro

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrões de Código

- Use indentação de 2 espaços
- Comente código complexo
- Mantenha funções pequenas e focadas
- Siga as convenções de nomenclatura existentes
- Teste em múltiplos navegadores

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Geovani Santos**
- Email: geocodeprogrammer@gmail.com
- LinkedIn: [@eusougeovani](https://www.linkedin.com/in/eusougeovani/)
- Instagram: [@geovanikeeper](https://instagram.com/geovanikeeper)
- YouTube: [@GEOCODEProgrammer](https://www.youtube.com/@GEOCODEProgrammer)
- Discord: [GEOCODE Community](https://discord.gg/96WEpwWWG2)

## 🙏 Agradecimentos

- [Firebase](https://firebase.google.com/) - Backend as a Service
- [Font Awesome](https://fontawesome.com/) - Biblioteca de ícones
- [School Vision](https://schoolvision.com.br/) - Instituição parceira
- Todos os alunos e colaboradores do projeto

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas:

1. Verifique a seção de [Problemas Conhecidos](#-problemas-conhecidos-e-soluções)
2. Abra uma [Issue](https://github.com/eusougeovani/geocodeprogrammer/issues) no GitHub
3. Entre em contato via email: geocodeprogrammer@gmail.com
4. WhatsApp: +55 (79) 98866-3905

---

<div align="center">

**Desenvolvido com ❤️ por GEOCODE Programmer**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>
