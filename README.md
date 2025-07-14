# 🚀 Show do Milhão - Jogo em Node.js

Este é um projeto simples de um jogo de perguntas e respostas no estilo "Show do Milhão", desenvolvido totalmente em JavaScript para ser executado no ambiente Node.js via terminal. O objetivo é testar seus conhecimentos e se divertir!

## 👨‍💻 Autor

**Nome Completo:** Jacson Francisco Viana Santos

## 📜 Regras do Jogo

1.  O jogo é composto por 5 rodadas de perguntas e respostas.
2.  A cada rodada, uma pergunta com três alternativas será exibida.
3.  O jogador deve escolher a alternativa correta (a, b ou c).
4.  O jogador também tem a opção de `parar` a qualquer momento, levando o prêmio acumulado para aquela rodada.
5.  Se o jogador acertar, ele avança para a próxima rodada e o prêmio aumenta.
6.  Se o jogador errar, o jogo termina e ele recebe um valor de consolação.
7.  O objetivo final é acertar todas as 5 perguntas para ganhar o prêmio máximo.

## 🕹️ Como Jogar

Após iniciar o jogo, o seu nome será solicitado. Em seguida, a cada rodada, você verá:

-   O seu nome.
-   O número da rodada atual.
-   Os valores dos prêmios para Acertar, Parar ou Errar.
-   A pergunta e as alternativas.

Digite a letra da alternativa que você considera correta (`a`, `b` ou `c`) e pressione `Enter`. Se preferir não arriscar, digite `parar` e pressione `Enter`.

## ⚙️ Como Executar o Projeto

Para executar este projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

-   Você precisa ter o [Node.js](https://nodejs.org/) instalado (que inclui o `npm`).

### Passos para Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd seu-repositorio
    ```
3.  **Instale as dependências (neste caso, apenas para inicializar o `package.json`):**
    ```bash
    npm install
    ```
4.  **Inicie o jogo:**
    ```bash
    npm start
    ```

O jogo será iniciado diretamente no seu terminal.

## 📚 Créditos e Fontes de Referência

-   **Node.js Documentation:** Utilizada como referência para o módulo `readline` para interação com o usuário no terminal. [https://nodejs.org/api/readline.html](https://nodejs.org/api/readline.html)
-   **JavaScript.info:** Consultas sobre manipulação de arrays e funções em JavaScript. [https://javascript.info/](https://javascript.info/)
-   **GitHub Docs:** Referência para a criação do arquivo `.gitignore` padrão para projetos Node.js. [https://github.com/github/gitignore/blob/main/Node.gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore)

## 📄 Licença

Este projeto está sob a licença MIT. 
---