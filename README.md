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
- **Git Hub** - Banco de dados
- **Vercel** - Hospedagem

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
│   ├── global.css             # Estilos da página
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

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

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
- Todos os alunos e colaboradores do projeto

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas:

1. Verifique a seção de [Problemas Conhecidos](#-problemas-conhecidos-e-soluções)
2. Abra uma [Issue](https://github.com/eusougeovani/geocodeprogrammer/issues) no GitHub
3. Entre em contato via email: geocodeprogrammer@gmail.com
4. WhatsApp: +55 (79) 98866-3905

---

<div align="center">

**Desenvolvido por GEOCODE Programmer**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>
