// variáveis ator

let xAtor = 200;
let yAtor = 365;
let tamanhoAtor = 30;
let alturaAtor = 30;
let diametro = 30;
let raio = diametro/2;

function movimentoAtor(){
  if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
  
  if(keyIsDown(DOWN_ARROW)){
     if(podeSeMover()){
      yAtor += 3;
    }}
}

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, tamanhoAtor,alturaAtor);
}

function podeSeMover(){
  return yAtor < 365;
}


