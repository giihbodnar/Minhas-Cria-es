// variáveis carros
let yCarros = [270, 220, 100, 150, 320, 50];
let velocidadeCarros = [4, 3, 3.5, 5.5, 2, 6]
let xCarros = [600, 600, 600, 600, 600, 600]


let tamanhoCarro =30;
let larguraCarro =40;

function movimentoCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }}

function mostraCarros(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro,tamanhoCarro);
}}

function carroParaSempre(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  if(xCarros[i] < -50){
    xCarros[i] = 600;}
  }  
  
  
}
