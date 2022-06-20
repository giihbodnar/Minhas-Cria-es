// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro /2;
// velocidade da bolinha
let velocidadexBolinha = 8;
let velocidadeyBolinha = 8;
// variáveis minha raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 80;
let colidiu = false;
// variáveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente = 8;
//Placar
let meusPontos = 0;
let pontosOponente = 0;
//Sons
let raquetada;
let ponto;

  function preload(){
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
  }

  function setup() {
    createCanvas(600, 400);
  }

  function draw() {
    background(0);
    mostrarBolinha();
    movimentaBolinha();
    verficacolisaoBorda();
    mostrarRaquete(xRaquete, yRaquete);
    movimentaRaquete();
    mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    colisaoRaqueteBiblioteca(xRaquete, yRaquete);
    colisaoRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
    bolinhaNaoFicaPresa();
    verficaColisaoOponenteBorda();
    colisaoRaquete();
  }

  function mostrarBolinha(){
    circle(xBolinha,yBolinha,diametro);
  }
  
  function movimentaBolinha(){
    xBolinha += velocidadexBolinha
    yBolinha += velocidadeyBolinha
  
  }
  
  function verficacolisaoBorda(){
    if (xBolinha + raio > width ||
      xBolinha - raio < 0){
      velocidadexBolinha *= -1;
  }
    if (yBolinha + raio> height ||
      yBolinha - raio < 0){
      velocidadeyBolinha *= -1;
  }  
  }
  
  function mostrarRaquete(x,y){
    rect(x, y, larguraRaquete, alturaRaquete);
  }
  
  function movimentaRaquete(){
    if(keyIsDown(87)){
      yRaquete -= 8;}  
    if(keyIsDown(83)){
      yRaquete += 8;
  }
  }
  
  function colisaoRaquete(){
    if(yRaquete < 0) {
      yRaquete = 0
    }
    if(yRaquete > 320){
      yRaquete = 320
    }
  }

  function colisaoRaqueteBiblioteca(x,y){
    colidiu = collideRectCircle(x, y,larguraRaquete,alturaRaquete,xBolinha,yBolinha,raio);
      if (colidiu){
        velocidadexBolinha *= -1;
        raquetada.play();
    }
  }
  
  function movimentaRaqueteOponente(){
    yRaqueteOponente += velocidadeyOponente
  }
  
  function verficaColisaoOponenteBorda(){   
    if (yRaqueteOponente > 320 ||
      yRaqueteOponente < 0){
      velocidadeyOponente *= -1;
  }  
  }
  
  function incluiPlacar(){
    stroke(255);
    textAlign(CENTER);
    fill(150);
    textSize(20);
    text('PONTUAÇÃO',295,40);
    fill(218,165,32);
    rect(220,60,60,50);
    fill(360);
    text(meusPontos,250,90);
    fill(218,165,32);
    rect(310,60,60,50);
    fill(360);
    text(pontosOponente, 340,90);
  }
  
  function marcaPonto(){
    if(xBolinha > 590){
      meusPontos +=1;
        ponto.play();
  }
    if(xBolinha < 10){
      pontosOponente +=1;
      ponto.play();}
  }
  
  function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
      xBolinha = 23
  }
    if (xBolinha - raio > 590){
      xBolinha = 580
    }
  }
