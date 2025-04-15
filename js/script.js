const snakeGame = document.querySelector(".snakeGame");
const pontuacao = document.querySelector(".pontuacao");
const recorde =  document.querySelector(".recorde");

const menuInicial = document.querySelector(".menu-inicial");
const jogo = document.querySelector(".agrupamento");
const btnIniciar = document.querySelector("#iniciar-jogo");

let fimDeJogo = false;
let comidaX, comidaY;
let cobraX = 15, cobraY = 15;
let velocidadeX = 0, velocidadeY = 0;
let corpoCobra = [];
let intervalo;
let score = 0;
let proximaVelocidadeX = 0;
let proximaVelocidadeY = 0;
let highScore = localStorage.getItem("high-score") || 0;
recorde.innerHTML = `High Score: ${highScore}`;

function atualizarComida() {
    comidaX = Math.floor(Math.random() * 30 + 1);
    comidaY = Math.floor(Math.random() * 30 + 1);
};

function acabouJogo() {
    clearInterval(intervalo);
    document.getElementById('menu-gameover').style.display = 'flex'; 
    document.getElementById('final-score').innerText = score; 
    menuInicial.style.display = "none";
    jogo.style.display = "none";
}
