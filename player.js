const buttons = document.querySelectorAll('.action-buttom')
const player = document.getElementById("player")
const disk = document.getElementById("disk-img")

const musicas = [
  {
    musica: "./music/1.mp3",
    imagem: "./img/1.jpg"
  },
  {
    musica: "./music/2.mp3",
    imagem: "./img/2.jpg"
  },
  {
    musica: "./music/3.mp3",
    imagem: "./img/3.jpg"
  }
]
let musicaAtual = 0

function carrega(posicao) {
  musicaAtual = posicao
  const musica = musicas[posicao]
  disk.style.backgroundImage = `url('${musica.imagem}')`

  player.src = musica.musica
  player.load();
}

carrega(0);

function play() {
  if(player.paused === true) {
    player.play();
  }else {
    player.pause()
  }

  const disk = document.getElementsByClassName("player")[0]
  disk.classList.toggle("playing")
}

function prev() {
  const novaPosicao = musicaAtual - 1
  
  if(novaPosicao < 0) {
    return
  }

  carrega(novaPosicao);
  player.play();
}

function next() {
  const novaPosicao = musicaAtual + 1
  
  if(novaPosicao > 2) {
    return
  }

  carrega(novaPosicao);
  player.play();
}

for (const buttom of buttons) {
  buttom.addEventListener('click', function(event){
    const action = this.getAttribute('data-action')
    
    if (action === "play") {
      play();
    }

    if (action === "prev") {
      prev();
    }

    if (action === "next") {
      next();
    }

  })
}