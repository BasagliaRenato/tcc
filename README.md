# Verse · Inglês no seu ritmo

Protótipo de TCC de uma plataforma de inglês por meio de músicas, feito exclusivamente com HTML5, CSS3 e JavaScript ES6+. Mobile-first, sem backend e sem dependências de instalação.

## Executar

Na pasta do projeto, inicie um servidor estático:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Abra o endereço local na porta 8000 no seu navegador. Também é possível abrir `index.html` diretamente: os scripts clássicos não dependem de módulos ou fetch. O comportamento do LocalStorage em arquivos locais depende do navegador; prefira o servidor.

## Estrutura

- `index.html`: documento, região de navegação, modal e notificações.
- `css/style.css`: identidade visual, capas originais feitas em CSS, temas e responsividade.
- `js/data.js`: catálogo fictício, capítulos, lições e medalhas.
- `js/store.js`: estado demonstrativo, preferências e persistência local com fallback em memória.
- `js/ui.js`: ícones SVG locais, cards, capas e componentes reutilizáveis.
- `js/app.js`: páginas, rotas por hash, eventos, filtros e fluxo de conta.
- `assets/favicon.svg`: ícone da marca.

## Navegar

A aplicação começa no dashboard de uma conta demo. No celular, use a barra inferior; no desktop, a barra lateral. Pelo perfil, abra as configurações para editar o nome e o avatar, trocar idioma, tema, animações e lembretes visuais, redefinir progresso ou sair. Ao sair, ficam disponíveis login, cadastro e recuperação de senha demonstrativos.

A biblioteca combina pesquisa por música, artista ou habilidade com filtros por gênero e dificuldade. Cada música leva a detalhes e lições relacionadas. A trilha mostra seis capítulos e 27 lições. Lições concluídas e a próxima disponível abrem um modal com acesso à prévia; lições futuras estão bloqueadas. A prévia não altera o progresso.

## O que é simulado

Músicas, artistas, XP, sequência, progresso, estatísticas, conquistas e atividades são dados demonstrativos. O projeto não reproduz áudio, não executa exercícios, não autentica usuários e não envia e-mails ou notificações do sistema. Nunca informe uma senha real. E-mail e senha não são persistidos nem enviados. Apenas nome, avatar, preferências, estado da sessão demo e progresso fictício ficam no LocalStorage (`verse-demo-v1`). O reset exige confirmação e zera XP, sequência e lições, mantendo preferências.

A tradução cobre navegação, ações e textos principais da interface em português e inglês; nomes dos capítulos, conteúdo educativo, gêneros, dificuldades e nomes de medalhas são preservados. A opção de notificações habilita/desabilita lembretes fictícios, sem pedir permissões ao navegador.

As capas, ícones e todos os recursos são locais, sem CDN ou requisições externas. A tipografia utiliza fontes modernas do sistema.

## Próximos passos

Separar catálogo e traduções em fontes de dados, integrar uma API e autenticação segura, modelar progresso por usuário, criar exercícios com validação e usar apenas gravações e letras devidamente licenciadas. Em uma versão real, estatísticas e conquistas devem ser calculadas a partir de eventos de aprendizado e notificações precisam de consentimento e infraestrutura próprios.
