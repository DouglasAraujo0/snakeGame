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

function iniciarJogo() {
    if(fimDeJogo) return acabouJogo();

    velocidadeX = proximaVelocidadeX;
    velocidadeY = proximaVelocidadeY;


    let html = `<div class="comida" style="grid-area: ${comidaY} / ${comidaX}"></div>`;

    if (cobraX == comidaX && cobraY == comidaY) {
        atualizarComida();
        corpoCobra.push([comidaX, comidaY]);
        score++;
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        pontuacao.innerText = `Score: ${score}`;
        recorde.innerText = `High Score: ${highScore}`;
    }
    
    cobraX += velocidadeX;
    cobraY += velocidadeY;
    
    for(let index = corpoCobra.length - 1; index > 0; index--) {
        corpoCobra[index] = corpoCobra[index - 1];
    };
    
    corpoCobra[0] = [cobraX, cobraY];

    if (cobraX <= 0 || cobraX > 30 || cobraY <= 0 || cobraY > 30) {
        return fimDeJogo = true;
    }

    for (let index = 0; index < corpoCobra.length; index++) {
        html += `<div class="cobra" style="grid-area: ${corpoCobra[index][1]} / ${corpoCobra[index][0]}"></div>`;
        if(index !== 0 && corpoCobra[0][1] == corpoCobra[index][1] && corpoCobra[0][0] == corpoCobra[index][0]){
            fimDeJogo = true;
        }
    };
    snakeGame.innerHTML = html;

    direcaoMudou = false;
};


atualizarComida();
intervalo = setInterval(iniciarJogo, 150);
document.addEventListener("keydown", mudarDirecao);

btnIniciar.addEventListener("click", () => {
    menuInicial.style.display = "none";
    jogo.style.display = "flex";
});