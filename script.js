const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"quem pintou a monalisa?",
        alternativas: [
            {
                texto:"Leonardo da Vinci",
                afirmacao: "verdadeiro"
            },
            {
                texto: "Romero Brito",
                afirmacao: "falso"
            }           
            
        ]
    },
    {
        enunciado: "Quantos ossos tem o corpo humano?",
        alternativas: [
            {
                texto:"206",
                afirmacao:"verdadeiro"
            },
            {
                texto: "187.",
                afirmacao:"falso"
            }
        ]
    },
    {
        enunciado:"Qual o menor país em território?",
        alternativas: [
            {
                texto:"Malta.",
                afirmacao:"falso"
            },
            {
                // texto:"Vaticano.",
                afirmacao:"verdadeiro"
            }
            
        ]
    },
    {
        enunciado:"Qual frase está escrita na bandeira do Brasil?",
        alternativas: [
            {
                texto:"união e fraternidade.",
                afirmacao:"falso"
            },
            {
                texto:"Ordem e Progresso",
                afirmacao:"verdadeiro"
            }
            
        ]
    },
    {
        enunciado:"De qual país é a invensão do chuveiro eletríco'?",
        alternativas: [
            {
                texto: "Estados Unidos.",
                afirmacao:"falso"
            },
            {
                // texto:"Brasil.",
                afirmacao:"verdadeiro"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();