const buttons = document.querySelectorAll('.action-buttom')
const player = document.getElementById("player")
const disk = document.getElementById("disk-img")
const list = document.getElementById("list")


const musicas = [
  {
    musica: "./music/1.mp3",
    imagem: "./img/1.jpg",
    nome: "Sucrilhos",
    autor: "criolo"
  },
  {
    musica: "./music/2.mp3",
    imagem: "./img/2.jpg",
    nome: "Sicko mode",
    autor: "Travis Scott"
  },
  {
    musica: "./music/3.mp3",
    imagem: "./img/3.jpg",
    nome: "Still D.R.E ft. Snoop Dogg",
    autor: "Snop Dogg"
  },
  {
    musica: "./music/4.mp3",
    imagem: "./img/4.jpg",
    nome: "Yuta okkotsu",
    autor: "AniRap"
  }
]

for(const index in musicas) {
  const musica = musicas[index]
  const item =`<li class="music-click" data-position="${index}"><a><b>(${musica.autor})</b>${musica.nome}</a></li>`;
  list.innerHTML += item
}

const musicClick = document.querySelectorAll(".music-click")

for (const element of musicClick) {
  element.addEventListener("click", function(){
    const position = this.getAttribute("data-position")
    carrega(position);
    player.play(); 
  })
}

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
  
  if(novaPosicao > musicas.length - 1) {
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