# 🧮 Calculadora Sunset Glass 3D

> Calculadora interativa moderna em estilo Glassmorphism com paleta Sunset (cores quentes), profundidade 3D sutil responsiva aos movimentos do mouse, lanterna dinâmica (Spotlight), vibração visual tátil (Haptic Feedback) e operações matemáticas completas.

---

## 🎥 Demonstração

<div align="center">
  <video src="./assets/calculadora-demo.mp4" width="70%" controls autoplay loop muted></video>
</div>

> 🔗 **Deploy online:** [Clique aqui para testar o projeto no ar](https://calculadora-gamma-snowy.vercel.app)]

---

## ✨ Funcionalidades e Efeitos

- **🎮 Efeito 3D Tilt Sutil:** A calculadora se inclina suavemente em três dimensões com base na posição do cursor do mouse (`rotateX` e `rotateY` calibrados para um movimento fino e elegante), retornando suavemente ao centro quando o mouse sai (`mouseleave`).

- **💡 Spotlight Dinâmico:** Uma lanterna esfumaçada com `radial-gradient` em tons quentes acompanha a trajetória do mouse em tempo real através de variáveis CSS manipuladas via JavaScript (`--mouse-x` e `--mouse-y`), iluminando o vidro e os botões.

- **📳 Vibração Visual Tátil (Haptic Micro-Shake):** Micro-animação CSS disparada a cada clique que simula o tremor tátil físico de pressionar um botão real.

- **🎨 Glassmorphism & Sunset Palette:** Interface translúcida com `backdrop-filter: blur()`, sombras com brilho âmbar, bordas quentes e um halo luminoso pulsante no fundo.

- **🧮 Lógica Aritmética Completa & Robusta:** 
  - Operações básicas: Adição, Subtração, Multiplicação e Divisão.
  - Cálculo contínuo em cadeia (ex: `2 + 3 + 4`).
  - Funções de porcentagem (`%`), inversão de sinal positivo/negativo (`±`), apagar dígito (`⌫`) e limpar tela (`AC`).
  - **Tratamento de Exceções:** Proteção contra divisão por zero (exibe `Erro`) e correção de precisão para pontos flutuantes do JavaScript (ex: `0.1 + 0.2` resulta exatamente em `0.3`).

- **⚡ 100% Vanilla:** Construído do zero sem nenhuma dependência, framework ou biblioteca externa — utilizando apenas HTML5, CSS3 e JavaScript puro.

---

## 🛠️ Tecnologias e Conceitos Praticados

| Tecnologia | O que foi aplicado |
|---|---|
| **HTML5** | Estruturação semântica com `<main>`, visor duplo para conta anterior e atual, atributos `data-*` (`data-number`, `data-operator`, `data-action`) para desacoplamento de classes e acessibilidade. |
| **CSS3** | **CSS Grid** (`repeat(4, 1fr)`) para a grade de botões, Flexbox para alinhamentos, pseudo-elementos (`::before` e `::after`), `@keyframes` para o halo e vibração, variáveis CSS (Custom Properties), `perspective`, `backdrop-filter` e transições suaves. |
| **JavaScript (ES6+)** | Manipulação do DOM, cálculo de coordenadas e proporções angulares (`getBoundingClientRect`, `clientX`, `clientY`), injeção dinâmica de propriedades CSS (`setProperty`), controle de animações via reflow forçado (`void offsetWidth`) e máquina de estados para operações aritméticas. |

---

## 🚀 Como Executar Localmente

Como o projeto é construído em tecnologia web pura, não requer instalação de pacotes (`npm` ou `yarn`):

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/NilsonLimas94/calculadora.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd calculadora
   ```

3. **Abra o arquivo `index.html`:**
   - Dê um duplo clique no arquivo `index.html` para abrir diretamente no seu navegador;
   - Ou utilize a extensão **Live Server** no VS Code para recarregamento em tempo real.

---

## 👨‍💻 Autor

Desenvolvido por **Nilson Limas Junior**  
*Estudante de ADS | Desenvolvedor Web em formação*

- 📧 **Email:** [nilsonlimasjunior@gmail.com](mailto:nilsonlimasjunior@gmail.com)
- 📍 **Localização:** Cariacica, Espírito Santo, Brasil
- 💼 **LinkedIn:** [https://www.linkedin.com/in/nilsonlimasjunior/](https://www.linkedin.com/in/nilsonlimasjunior/)
- 🐙 **GitHub:** [https://github.com/NilsonLimas94](https://github.com/NilsonLimas94)

---

⭐ *Se você gostou deste projeto, sinta-se à vontade para deixar uma estrela no repositório!*

