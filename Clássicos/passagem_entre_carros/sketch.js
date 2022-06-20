let colidiu = false;
let meusPontos = ('0');

function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  movimentoAtor();
  movimentoCarro();
  mostraAtor();
  mostraCarros();
  carroParaSempre();
  colisaoCarroAtor();
  incluiPlacar();
  ponto();
  podeSeMover();
}

function colisaoCarroAtor(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  colidiu = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, tamanhoCarro, xAtor, yAtor, raio);
    if(colidiu){
      yAtor = 365;
      meusPontos = 0;
      somColidiu.play();
    }
}}

function incluiPlacar(){
    stroke(255);
    textAlign(CENTER);
    fill(150);
    textSize(20);
    fill(360);
    text(meusPontos,200,25);
  }

function ponto(){
  if(yAtor < 1){
    yAtor = 365;
    meusPontos += 1;
    somPontos.play();
  }
}





