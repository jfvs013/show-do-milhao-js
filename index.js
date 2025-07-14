// Importa o módulo 'readline' para ler a entrada do usuário no terminal
const readline = require('readline');

// Configura a interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// --- BANCO DE PERGUNTAS ---
// Array de objetos, onde cada objeto representa uma pergunta com suas alternativas e a resposta correta.
const perguntas = [
    { pergunta: "Qual a capital da Austrália?", alternativas: ["a) Sydney", "b) Melbourne", "c) Canberra"], respostaCorreta: "c" },
    { pergunta: "Qual elemento químico tem o símbolo 'O'?", alternativas: ["a) Ouro", "b) Oxigênio", "c) Ósmio"], respostaCorreta: "b" },
    { pergunta: "Quem escreveu 'Dom Quixote'?", alternativas: ["a) Miguel de Cervantes", "b) William Shakespeare", "c) Dante Alighieri"], respostaCorreta: "a" },
    { pergunta: "Quantos planetas existem no nosso sistema solar?", alternativas: ["a) 7", "b) 8", "c) 9"], respostaCorreta: "b" },
    { pergunta: "Qual o maior oceano do mundo?", alternativas: ["a) Atlântico", "b) Índico", "c) Pacífico"], respostaCorreta: "c" },
    { pergunta: "Em que ano o homem pisou na Lua pela primeira vez?", alternativas: ["a) 1969", "b) 1972", "c) 1965"], respostaCorreta: "a" },
    { pergunta: "Qual a montanha mais alta do mundo?", alternativas: ["a) K2", "b) Monte Everest", "c) Monte Kilimanjaro"], respostaCorreta: "b" },
    { pergunta: "Quem pintou a 'Mona Lisa'?", alternativas: ["a) Vincent van Gogh", "b) Pablo Picasso", "c) Leonardo da Vinci"], respostaCorreta: "c" },
    { pergunta: "Qual o país mais populoso do mundo?", alternativas: ["a) China", "b) Índia", "c) Estados Unidos"], respostaCorreta: "b" },
    { pergunta: "Qual o nome do processo pelo qual as plantas usam a luz solar para criar alimentos?", alternativas: ["a) Respiração", "b) Fotossíntese", "c) Transpiração"], respostaCorreta: "b" },
    { pergunta: "Qual o rio mais longo do mundo?", alternativas: ["a) Rio Nilo", "b) Rio Amazonas", "c) Rio Yangtzé"], respostaCorreta: "a" },
    { pergunta: "Qual a fórmula química da água?", alternativas: ["a) H2O2", "b) CO2", "c) H2O"], respostaCorreta: "c" },
    { pergunta: "Qual animal é conhecido como 'rei da selva'?", alternativas: ["a) Tigre", "b) Leão", "c) Elefante"], respostaCorreta: "b" },
    { pergunta: "Quantos continentes existem?", alternativas: ["a) 5", "b) 6", "c) 7"], respostaCorreta: "b" }, // Nota: A resposta pode variar (6 ou 7), usamos 6 como comum no Brasil.
    { pergunta: "Qual a velocidade da luz?", alternativas: ["a) 300.000 km/s", "b) 150.000 km/s", "c) 500.000 km/s"], respostaCorreta: "a" }
];

// --- VARIÁVEIS DO JOGO ---
let nomeJogador = "";
let rodadaAtual = 0;
let premiacaoTotal = 0;
const totalRodadas = 5;

// Prêmios por rodada (Acertar, Parar, Errar)
const premiacaoPorRodada = [
    { acertar: 1000, parar: 0, errar: 0 },
    { acertar: 2000, parar: 1000, errar: 500 },
    { acertar: 5000, parar: 2000, errar: 1000 },
    { acertar: 10000, parar: 5000, errar: 2500 },
    { acertar: 50000, parar: 10000, errar: 5000 }
];

// --- FUNÇÕES DO JOGO ---

/**
 * Função para embaralhar o array de perguntas e garantir que sejam diferentes a cada jogo.
 * @param {Array} array - O array a ser embaralhado.
 * @returns {Array} - O array embaralhado.
 */
function embaralharPerguntas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Inicia o jogo, pedindo o nome do jogador.
 */
function iniciarJogo() {
    console.clear(); // Limpa o console para uma nova partida
    console.log("======================================");
    console.log(" BEM-VINDO AO SHOW DO MILHÃO!");
    console.log("======================================");

    rl.question("Por favor, digite seu nome para começar: ", (nome) => {
        nomeJogador = nome;
        rodadaAtual = 0;
        premiacaoTotal = 0;
        // Embaralha as perguntas antes de iniciar as rodadas
        const perguntasEmbaralhadas = embaralharPerguntas([...perguntas]);
        proximaRodada(perguntasEmbaralhadas);
    });
}

/**
 * Processa cada rodada do jogo.
 * @param {Array} perguntasDisponiveis - O array de perguntas já embaralhado.
 */
function proximaRodada(perguntasDisponiveis) {
    if (rodadaAtual >= totalRodadas) {
        finalizarJogo(true); // Jogador venceu o jogo
        return;
    }

    const perguntaInfo = perguntasDisponiveis[rodadaAtual];
    const { acertar, parar, errar } = premiacaoPorRodada[rodadaAtual];

    console.log("\n--------------------------------------");
    console.log(`Jogador: ${nomeJogador}`);
    console.log(`Rodada ${rodadaAtual + 1} de ${totalRodadas}`);
    console.log(`Premiação: Acertar: R$${acertar} | Parar: R$${parar} | Errar: R$${errar}`);
    console.log("--------------------------------------");
    console.log(`Pergunta: ${perguntaInfo.pergunta}`);
    perguntaInfo.alternativas.forEach(alt => console.log(alt));
    console.log("--------------------------------------");

    rl.question("Digite a alternativa (a, b, c) ou 'parar' para sair: ", (resposta) => {
        const respostaFormatada = resposta.toLowerCase().trim();

        if (respostaFormatada === 'parar') {
            premiacaoTotal = parar;
            finalizarJogo(false, perguntaInfo);
        } else if (respostaFormatada === perguntaInfo.respostaCorreta) {
            premiacaoTotal = acertar;
            console.log(`\n✅ Resposta Correta! Você ganhou R$${premiacaoTotal}!`);
            rodadaAtual++;
            proximaRodada(perguntasDisponiveis);
        } else {
            premiacaoTotal = errar;
            console.log(`\n❌ Resposta Errada!`);
            finalizarJogo(false, perguntaInfo);
        }
    });
}

/**
 * Finaliza o jogo e mostra o resultado final.
 * @param {boolean} venceu - Indica se o jogador venceu todas as rodadas.
 * @param {object} ultimaPergunta - A última pergunta respondida (se aplicável).
 */
function finalizarJogo(venceu = false, ultimaPergunta = null) {
    console.log("\n======================================");
    console.log(" FIM DE JOGO!");
    console.log("======================================");
    console.log(`Jogador: ${nomeJogador}`);

    if (venceu) {
        console.log(`🎉 PARABÉNS! Você venceu o jogo e respondeu todas as ${totalRodadas} rodadas!`);
    } else {
        console.log(`Você parou na rodada ${rodadaAtual + 1}. Faltavam ${totalRodadas - (rodadaAtual + 1)} rodadas.`);
        if (ultimaPergunta) {
            // Encontra o texto da alternativa correta para exibir ao usuário
            const textoRespostaCorreta = ultimaPergunta.alternativas.find(alt => alt.startsWith(ultimaPergunta.respostaCorreta));
            console.log(`A resposta correta da última pergunta era: ${textoRespostaCorreta}`);
        }
    }

    console.log(`💰 Premiação Final: R$${premiacaoTotal}`);
    console.log("======================================");

    jogarNovamente();
}

/**
 * Pergunta ao jogador se ele deseja jogar novamente.
 */
function jogarNovamente() {
    rl.question("\nDeseja jogar novamente? (s/n): ", (resposta) => {
        if (resposta.toLowerCase().trim() === 's') {
            iniciarJogo();
        } else {
            console.log("\nObrigado por jogar o Show do Milhão! Até a próxima!");
            rl.close(); // Fecha a interface de leitura, encerrando o programa
        }
    });
}

// --- PONTO DE ENTRADA DO PROGRAMA ---
iniciarJogo();