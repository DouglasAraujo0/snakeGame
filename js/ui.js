export const elementos = {
    snakeGame: document.querySelector(".snakeGame"),
    pontuacao: document.querySelector(".pontuacao"),
    recorde: document.querySelector(".recorde"),
    menuInicial: document.querySelector(".menu-inicial"),
    jogo: document.querySelector(".agrupamento"),
    btnIniciar: document.querySelector("#iniciar-jogo"),
    modal: document.getElementById("modal"),
    btnDoc: document.querySelector(".rules"),
    btnClose: document.getElementById("close-modal"),
    btnReiniciar: document.getElementById("reiniciar-jogo"),
    menuGameOver: document.getElementById('menu-gameover'),
    finalScore: document.getElementById('final-score')
};

export function atualizarPontuacao(score, highScore) {
    elementos.pontuacao.innerText = `Score: ${score}`;
    elementos.recorde.innerText = `High Score: ${highScore}`;
}

export function mostrarGameOver(score) {
    elementos.menuGameOver.style.display = 'flex';
    elementos.finalScore.innerText = score;
    elementos.menuInicial.style.display = "none";
    elementos.jogo.style.display = "none";
}
