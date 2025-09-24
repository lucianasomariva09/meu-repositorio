const caixaPrincipal   = document.querySelector(".caixa-principal");
const caixaPerguntas   = document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado   = document.querySelector(".caixa-resultado");
const textoResultado   = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "É início da temporada 2025 de Fórmula 1. As novas regras de motores híbridos prometem corridas mais equilibradas. Qual é sua expectativa?",
    alternativas: [
        {
        texto:"Adoro a ideia, vai deixar as equipes mais próximas em desempenho.",
        afirmacao:"Ficou empolgado com a possibilidade de ver disputas mais apertadas em cada Grande Prêmio."
        },
        {
        texto:"Prefiro a era dos motores barulhentos e potentes de antes.",
        afirmacao:"Sentiu saudade dos tempos de V10 e acredita que o som faz parte da emoção da F1."
        }
    ]
},
{
    enunciado: "Durante o GP de Mônaco, uma equipe usa um software de inteligência artificial para prever quando o safety car pode entrar. Como você reage?",
    alternativas: [
        {
        texto:"Isso é genial, estratégia é tudo na F1 moderna.",
        afirmacao:"Passou a estudar como IA e análise de dados definem pit stops e estratégias de corrida."
        },
        {
        texto:"Prefiro que o feeling dos engenheiros e do piloto decida.",
        afirmacao:"Valoriza a intuição e a experiência humanas para decisões cruciais no pit wall."
        }
    ]
},
{
    enunciado: "Seu piloto favorito é convidado para testar um novo simulador com realidade aumentada que treina reflexos em tempo real. Qual é sua opinião?",
    alternativas: [
        {
        texto:"Ferramentas assim podem melhorar ainda mais o desempenho na pista.",
        afirmacao:"Tornou-se fã das inovações de treinamento que unem tecnologia e habilidade."
        },
        {
        texto:"Nenhum simulador substitui a adrenalina da corrida real.",
        afirmacao:"Defende que a prática em pista continua sendo o maior diferencial de um campeão."
        }
    ]
},
{
    enunciado: "Você precisa criar uma arte que represente a Fórmula 1 de 2025 para um trabalho da escola. O que faz?",
    alternativas: [
        {
        texto:"Desenho o carro com as novas asas e detalhes de aerodinâmica em um programa de design.",
        afirmacao:"Desenvolveu um olhar artístico para o design arrojado dos carros da era híbrida."
        },
        {
        texto:"Uso um gerador de imagem por IA para criar uma cena de pit stop futurista.",
        afirmacao:"Aprendeu a combinar criatividade com tecnologia para mostrar o dinamismo da F1 moderna."
        }
    ]
},
{
    enunciado: "No projeto final de história do esporte, um colega copia trechos inteiros de entrevistas de pilotos atuais. Qual é sua atitude?",
    alternativas: [
        {
        texto:"Deixo como está, afinal todo mundo usa internet para isso.",
        afirmacao:"Depois percebeu que copiar reduz a chance de mostrar opiniões próprias sobre a temporada."
        },
        {
        texto:"Reescrevo e acrescento minhas análises sobre as corridas e pilotos de 2025.",
        afirmacao:"Mostrou que um bom trabalho exige pesquisa, mas também visão crítica sobre o campeonato."
        }
    ]
}
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
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
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcao){
    historiaFinal += opcao.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "No final da temporada 2025...";
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.textContent = "";
}

mostraPergunta();
