const cardText = document.getElementById('card-text');
const card = document.getElementById('card'); // Alteramos para buscar a div da carta com o ID "card"
const instruction = document.querySelector('.instruction'); // Selecionamos a div da instrução

const cartas = [
    "Enquanto estiver lavando a louça, preste atenção na temperatura da água e na sensação das suas mãos sobre a esponja.",
    "Reserve um tempo para não fazer absolutamente nada. Foque a atenção nisso.",
    "Feche os olhos e visualize alguém de quem você gosta muito. Repita mentalmente votos de bondade e tranquilidade para essa pessoa: 'Que você esteja bem, que você esteja em paz, que você seja feliz'.",
    "Faça algo que você nunca havia feito antes.",
    "Exercite-se intensamente por cinco minutos, com uma corridinha ou polichinelos. Após isso, sente-se, feche os olhos e observe cada sensação no seu corpo.",
    "Sente-se, feche os olhos e preste atenção em cada parte do seu corpo que se conecta ao móvel no qual você está sentado(a).",
    "Ao escovar os dentes, feche os olhos e preste atenção a cada movimento que você faz com a escova.",
    "Conte até 200 mais lentamente que puder. Repita a contagem por mais cinco vezes.",
    "Feche os olhos, respire fundo e observe qualquer pensamento que passar pela sua cabeça. Deixe-os vir.",
    "Se alguém está falando perto de você, preste atenção a cada detalhe. Repare no tom de voz, na intensidade, no ritmo.",
    "Coloque um pedaço de chocolate na boca. Não mastigue.",
    "Pegue um creme ou outra substância pastosa e passe sobre suas mãos. Concentre a atenção em cada sensação que surgir. Observe a sensação. Espere até derreter.",
    "Quando um pensamento surgir, repita para si: 'Está surgindo o pensamento de que estou cansado'.",
    "Pegue um papel e um lápis e escreva por três minutos, sem filtrar, exatamente o que está passando pela sua cabeça.",
    "Procure no YouTube um vídeo que reproduza o som de um sino. Feche os olhos e preste atenção em cada detalhe.",
    "Coloque uma música clássica para tocar. Feche os olhos. Tente prestar atenção somente em um dos instrumentos.",

    "Imagine que dentro de você há uma escada em espiral.Desça lentamente e observe o que se passa ao redor.Se quiser, descanse nas escadas ou acenda uma luz.Vá no seu ritmo.Ao chegar no fundo de si, concentre - se ali, no seu ponto de equilibrio.",
    "Concentre-se nos seus dedos. Perceba as sensações fisicas, os movimentos...",
    "Imagine que sua mente é um rio no qual seus pensamentos e emoções são barcos navegando. Imagine-se à beira desse rio, observando os barcos irem embora. Descreva ou de um nome a cada barco que passa. Deixe-os ir.",
    "Pare a sua rotina ao menos uma vez por dia e observe tudo ao seu redor. Sem julgamentos, apenas descreva para si tudo o que está vendo.",
    "Desenhe um traçado comprido e aleatório em uma folha de papel, encontrando as duas pontas, como um circuito.Por três a cinco minutos, o percorra com a ponta do indicador, acelerando enquanto inspira e desacelerando enquanto solta o ar.",
    "Sente-se por dois minutos e fique consigo mesmo.",
    "Foque em uma parte de seu corpo que esteja tensa ou dolorida.Durante três minutos, faça inspirações de quatro segundos, sentindo o ar chegar até o ponto de tensão, e expirações de seis segundos, sentindo aquela musculatura relaxar.",
    "Pegue uma folha em branco e um lápis.Feche os olhos e tente se lembrar de uma cena marcante de sua vida.Durante a lembrança, deixe sua mão livre escrevendo tudo que quiser, sem julgamentos ou filtros.Ao fim, leia as palavras que foram escritas.",
    "A cada dia, troque o lugar em que se senta à mesa para a refeição. Perceba o que muda na sua visão e ao seu redor.",
    "Faça uma parte da sua rotina de pés descalços. Repare em cada sensação, textura, temperatura nova que perceberá.",
    "Simplesmente respire. Sente-se em um ambiente vazio e silencioso. Fique ali por 10 minutos, foque em seu corpo no repouso, em cada movimento e em como você sente cada mudança.",
    "Deite-se no chão e olhe tudo ao seu redor.Tente achar detalhes nos quais nunca reparou naquele ambiente e os descreva mentalmente.",
    "Feche os olhos. Identifique dois sons que possam ser ouvidos neste momento e foque neles. Perceba cada diferença entre eles, de onde cada um vem, qual lhe agrada mais.",
    "Feche os olhos. Respire fundo e imagine todos os seus pensamentos se transformando em objetos na sua frente. A cada respiração, imagine eles se afastando para mais e mais longe, até sumirem no horizonte.",
    "Imagine que à sua frente há um trem. Imagine que nos vagões estão seus pensamentos, emoções e sensações corporais indo embora com o trem. Se você sentir o impulso de embarcar, convide-se gentilmente a descer.",
    "Deite-se e atente para cada músculo de seu corpo. Um a um, da cabeça aos pés, imagine como se estivesse 'desligando' e relaxando cada um deles.",

    "Eu respiro, eu penso em soluções, eu não permito que minha preocupação tome conta de mim.",
    "Finja ter acordado sem nenhuma memória da vida e saia para uma caminhada. Tente aproveitar cada nova descoberta, sabores, sons, cores, descrevendo e explicando para si mesmo cada uma delas.",
    "Sente-se confortavelmente e feche os olhos. Respire fundo. Imagine um momento feliz na sua vida, no futuro ou no passado. Imagine-o protegido por uma bolha de sabão que se afasta lentamente e depois retorna para você. Atente a cada emoção sentida. ",
    "O presente é onde a vida acontece.",
    "Boceje, mesmo que forçadamente, para iniciar reflexos fisiológicos que o(a) levarão a bocejar de verdade. Sinta o corpo relaxar após cada bocejo. ",
    "Somente o hoje. Sem a ansiedade de ontem, sem o peso do amanhã.",
    "Se você estiver se sentindo ansioso(a), aceite este sentimento.",
    "Coloque uma música calma para tocar. Feche os olhos. Respire fundo e preste atenção no som de sua respiração. Após, se conecte ao som de um único instrumento e o siga até o final da música.Se algum pensamento vier, deixe ele passar e retorne a atenção para a música através da respiração.",
    "Tome um banho sem pressa. Faça movimentos leves e suaves, atento(a) a cada um deles. Sinta a água e a temperatura dela em cada parte de seu corpo, sem qualquer medo ou restrição. Quando notar qualquer tensão em uma musculatura, tente relaxá - la lentamente.",
    "Feche os olhos. Imagine-se sentado(a) em uma colina e um trem passando ao fundo. Perceba dentro de cada vagão um pensamento que o distraía. Não lute contra eles nem os julgue, apenas observe a passagem do trem até lentamente sumir no horizonte.",
    "Perceba o agora. Reconheça cada sentimento e sensação que esteja presente nele, sinta ele como um momento único.",
    "Pegue algum objeto com cheiro agradável (perfume, lavanda, fruta...) e cheire-o por alguns segundos. Quais sensações esse cheiro causa em você?",
    "Imagine cada momento como um cobertor estendido a céu aberto. Veja a chuva sobre ele, depois o sol. Aceite cada mudança, assim como as folhas que caem nele durante essas fases.",
    "Repouse as mãos sobre as pernas e respire profundamente. A cada inspiração, imagine e sinta o ar chegando até as pontas dos dedos; na expiração, sinta os músculos relaxarem",
    "Preocupar - se não remove os problemas de amanhã, mas tira a paz de hoje.",
    "Faça café ou chá. Preste atenção a cada movimento, a amplitude, a força ou a leveza usada. Perceba cada mudança nos aromas e as alterações que eles causam dentro de você.",
    "Após beber água, preste atenção às sensações na sua garganta.",
    "Esteja disposto(a) a se conectar com o que está acontecendo exatamente agora.",
    "Pare diante de um relógio de ponteiro e acompanhe cada segundo passar.",
    "Ligue a torneira e observe por dois minutos enquanto a água cai.",
    "Bata as palmas das mãos com força três vezes, feche os olhos, erga as mãos para cima e preste atenção no que está sentindo.",
    "Observe se você está agindo no 'piloto automático'. Pare por um instante. Retome o que está fazendo, dessa vez com consciência do que está fazendo.",
    "Feche os olhos e tamborile/batuque com as mãos sobre uma superfície de madeira. Preste atenção aos sons e então às sensações da sua mão sobre a superfície",
    "Entregue-se a qualquer coisa que esteja fazendo.",
    "Desacelere o ritmo da sua respiração. Preste atenção enquanto o ar entra e sai do seu nariz.",
    "Não negue qualquer sensação desconfortável que sentir. Mas não se apegue a ela. Deixe ir e vir.",
    "Convide uma pessoa de quem você gosta muito a sentar o mais próximo que for possível. Olhem nos olhos um do outro por pelo menos cinco minutos.Observe o que acontece.",
    "Fale em voz alta cada pensamento que vier à sua cabeça.",
    "Feche os olhos, repouse a mão sobre seu peito e sinta cada batida do seu coração.",
    "Respire fundo. Toque um sino, feche os olhos e preste atenção no som até terminar a vibração. Após isso, foque nos sons do ambiente e em suas variações por dois a três minutos.",
    "Feche os olhos e concentre-se nos sons presentes no ambiente em que se encontra. Um tempo depois, direcione sua atenção para os sons externos. Depois, torne a se concentrar no ambiente atual. ",
    "Ao deitar-se, feche os olhos, inspire lentamente, expire mais lentamente ainda e sinta a sensação da sua cabeça contra o travesseiro.",

    "O passado é uma estrada deixada para trás e o futuro é uma abstração. O que temos é pura e simplesmente o presente.",
    "Feche os olhos. Imagine uma cor e tente descrevê-la para si. Qual sentimento ela desperta em você? Agora abra os olhos e visualmente procure tudo ao seu redor que tenha essa mesma cor, atentando às sensações despertadas.",
    "Mindfulness ou atenção plena é direcionar sua atenção para o momento presente.",
    "Cante baixinho no chuveiro e vá aumentando a intensidade aos poucos.",
    "Feche os olhos, respire fundo, foque apenas nos sons que estão dentro da sala por 20 a 30 segundos. Agora alterne para os sons fora da sala. Siga alternando por alguns minutos e retorne lentamente.",
];


// Função para calcular o tamanho da fonte com base no texto e na largura da caixa
function calcularTamanhoFonte() {
    const texto = cardText.textContent;
    const larguraTexto = cardText.offsetWidth;
    const larguraCaixa = card.offsetWidth;

    // Defina uma proporção desejada entre a largura do texto e a largura da caixa
    const proporcaoDesejada = 0.7;

    // Calcule o tamanho da fonte com base na proporção desejada
    const tamanhoFonte = (larguraCaixa / larguraTexto) * 40 * proporcaoDesejada;

    // Defina o tamanho da fonte no elemento de texto da carta
    cardText.style.fontSize = tamanhoFonte + 'px';
}



card.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * cartas.length);
    cardText.textContent = cartas[randomIndex];

    // Aplicar estilos ao texto dentro da carta
    cardText.style.color = 'white'; // Definir a cor do texto como branca
    // cardText.style.fontSize = '40px'; // Tamanho da fonte
    calcularTamanhoFonte();
    cardText.style.fontFamily = 'cursive, sans-serif'; // Tipo de fonte
    cardText.textContent = cartaSelecionada;
});

// Registra a PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(function (registration) {
            console.log('Service Worker registrado com sucesso!', registration);
        })
        .catch(function (error) {
            console.error('Erro ao registrar o Service Worker:', error);
        });
}

