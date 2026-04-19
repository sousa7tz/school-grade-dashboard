# School Grade Dashboard

> **MVP de alta fidelidade** desenvolvido em tempo recorde através de orquestração de IA, focado em UX mobile-first e arquitetura modular moderna.

---

## 🚀 O Conceito: Desenvolvimento Acelerado

Este projeto não é apenas uma grade de horários, mas sim um estudo de **Rapid Prototyping**. O objetivo foi validar a eficiência da **orquestração de Inteligência Artificial** para reduzir drasticamente o *Time-to-Market*, sem sacrificar a qualidade técnica ou estética.

- **Desenvolvimento:** Do conceito ao deploy em minutos (aproximadamente 20-25 minutos de trabalho).
- **Workflow:** Pair programming com IA para geração de componentes, refatoração modular e implementação de física de movimento.
- **Foco:** Entrega de um produto funcional, elegante e "PWA Ready" em uma fração do tempo do desenvolvimento tradicional.

---

## 🛠 Tech Stack

| Camada | Destaques |
|--------|-----------|
| **Estrutura** | HTML semântico, CSS modular, JavaScript ES modules |
| **Animações** | **[Anime.js](https://animejs.com/)** — transições de troca de dia com easing e profundidade |
| **Visual** | **Glassmorphism** (blur + bordas sutis) sobre fundo escuro premium |
| **Dados** | `data.js` exportando a grade como constante — **simula resposta de API** |
| **PWA** | `manifest.json` + meta tags para **modo standalone** ao instalar no smartphone |

---

## ✨ Diferenciais

- **UX mobile-first** — layout e interações pensados primeiro para telas pequenas.
- **Swipe gestures** — navegação natural entre dias com gesto horizontal.
- **Dots de navegação (mobile)** — indicadores na base do card para **contexto imediato** do dia atual, além do swipe.
- **Active state nos botões laterais (desktop)** — feedback visual ao navegar com as setas.
- **Performance de animação** — transições curtas e objetivas; canvas de estrelas com loop enxuto.

---

## 📁 Estrutura do projeto

```
├── index.html      # Estrutura e meta tags PWA
├── style.css       # Estilos e responsivo
├── app.js          # Lógica, canvas, gestos, Anime.js
├── data.js         # Constante `grade` (dados)
├── manifest.json   # Web App Manifest
└── icons/          # Ícones SVG para PWA / favicon
```

---

## 🚀 Como rodar

Não há build obrigatório — é um app **estático**.


### Opção 1 — Acesso Direto (Web & Mobile)
Acesse a versão final publicada e pronta para uso. O deploy é feito automaticamente a cada atualização.

👉 **[Visualizar App ao Vivo](https://seu-link-aqui.netlify.app)**

> **Dica PWA:** No celular, use a opção "Adicionar à tela inicial" no menu do navegador para instalar o app e utilizá-lo em modo *standalone* (sem as barras do browser).


### Opção 2 — Execução Local (Desenvolvimento)
Como o projeto utiliza **ES Modules**, é necessário um servidor local para rodar corretamente:

1. Clone o repositório.
2. No VS Code / Cursor, utilize a extensão **Live Server**.
3. Acesse `http://127.0.0.1:5500` no seu navegador.


### Opção 3 — Abrir o arquivo (não recomendado)

Abra o `index.html` diretamente no navegador.

> **Nota:** módulos ES (`import`/`export`) exigem **origem HTTP(S)** em muitos browsers. Se não carregar, use a opção 2.

---

## 📱 Instalação (PWA)

Com o site servido por HTTP(S), no **Chrome** ou **Edge** mobile/desktop use **“Instalar app”** ou **“Adicionar à tela inicial”**. O app abre em **modo standalone**, sem barra do browser, usando as cores e o manifest configurados.

---

## 📄 Licença

Projeto de portfólio — sinta-se livre para usar como referência. Atribuição ao autor é apreciada.
