// imagens e sons do jogo

let somTrilha;
let somColidiu;
let somPontos;


  

function preload(){
  imagemAtor = loadImage("Imagens/ator1.png");
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemCarro1 = loadImage("Imagens/carro1.png");
  imagemCarro2 = loadImage("Imagens/carro2.png");
  imagemCarro3 = loadImage("Imagens/carro3.png");
  imagemCarros = [imagemCarro3, imagemCarro2, imagemCarro2, imagemCarro1, imagemCarro1, imagemCarro3];
  somTrilha = loadSound("Sons/trilha.mp3");
  somPontos = loadSound("Sons/pontos.wav");
  somColidiu = loadSound("Sons/colidiu.mp3");

}

let imagemAtor;
let imagemEstrada;
