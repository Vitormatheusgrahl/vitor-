const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Assim que saiu da escola voce se depara com uma tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter, ele tambem gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas:[
            "Isso é assustador!",
            "Isso é maravilhoso!",
        ]
    },

    {
        enunciado:"Com a descoberta desta tecnologia, chamada de Inteligencia artificial (IA), uma professora de tecnologia decidiu fazer uma seguencia de aulas sobre esta tecnologia. No fim de uma aula ele pede para vocẽ escreva um trabalho sobre IA em sala de aula. Qual atitude vocẽ toma?",
        alternativas:[
            "Utiliza uma ferramenta de busca na internet que utiliza IA para que ele ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema."
        ]
    },

{
    enunciado:"Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa escrita. Nessa conversa tambem foi levantado um ponto muito importante: como IA impacta o trabaho do futuro. Nesse debate, como voce se posiciona?",
    alternativas:[
        "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
        "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importancia de proteger os trabalhadores."
    ]
},
]