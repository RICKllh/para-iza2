const efeitoSom = document.getElementById('efeitoSom');
const carta = document.getElementById('carta');
const mensagem = document.getElementById('mensagem');
const btnMusica = document.getElementById('btnMusica');
const audioFundo = document.getElementById('audioFundo');

const frases = [
  "Você tem uma presença que acalma e uma alma que brilha sem esforço.",
  "Às vezes, sem dizer uma palavra, você me entende. E isso vale muito.",
  "Você é detalhe escondido que dá sentido à obra.",
  "Na galeria da vida, você seria aquela peça que ninguém esquece.",
  "Você não precisa de moldura — já é arte por si.",
  "Seu jeito leve me lembra o silêncio bonito de uma tarde calma.",
  "Você tem a calma que meu caos respeita.",
  "Tem algo de bonito até no que você esquece. Até o esquecimento fica fofo em você."
];

let aberta = false;
let fraseAtual = 0;

carta.addEventListener('click', () => {
  aberta = !aberta;
  carta.classList.toggle('aberta');

  if (aberta) {
    efeitoSom.currentTime = 0;
    efeitoSom.play();

    mensagem.textContent = frases[fraseAtual];
    fraseAtual = (fraseAtual + 1) % frases.length;
  } else {
    mensagem.textContent = "   ";
  }
});

// Botão de música (fora do evento da carta)
btnMusica.addEventListener('click', () => {
  if (audioFundo.paused) {
    audioFundo.play();
    btnMusica.textContent = '⏸️ Pausar música';
  } else {
    audioFundo.pause();
    btnMusica.textContent = '🎶 Tocar música';
  }
});

// FUNÇÃO DOS CORAÇÕES (fora do botão!)
function criarCoracao() {
  const coracoesContainer = document.querySelector('.coracoes-container');
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.animationDuration = (4 + Math.random() * 2) + 's';
  coracoesContainer.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 6000);
}

// Iniciar os corações automaticamente
setInterval(criarCoracao, 500);

const botaoTema = document.getElementById('toggleTema');
let modoEscuro = false;

botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('modo-escuro');
  modoEscuro = !modoEscuro;
  botaoTema.textContent = modoEscuro ? '☀️' : '🌙';
});

