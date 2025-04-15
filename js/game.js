import { estado } from "./state.js";
import { elementos, atualizarPontuacao, mostrarGameOver } from "./ui.js";

export function atualizarComida() {
    estado.comidaX = Math.floor(Math.random() * 30 + 1);
    estado.comidaY = Math.floor(Math.random() * 30 + 1);
}

export function acabouJogo() {
    clearInterval(estado.intervalo);
    mostrarGameOver(estado.score);
}

export function iniciarJogo() {
    if (estado.fimDeJogo) return acabouJogo();

    estado.velocidadeX = estado.proximaVelocidadeX;
    estado.velocidadeY = estado.proximaVelocidadeY;

    let html = `<div class="comida" style="grid-area: ${estado.comidaY} / ${estado.comidaX}"></div>`;

    if (estado.cobraX === estado.comidaX && estado.cobraY === estado.comidaY) {
        atualizarComida();
        estado.corpoCobra.push([estado.comidaX, estado.comidaY]);
        estado.score++;
        if (estado.score >= estado.highScore) {
            estado.highScore = estado.score;
            localStorage.setItem("high-score", estado.highScore);
        }
        atualizarPontuacao(estado.score, estado.highScore);
    }

    estado.cobraX += estado.velocidadeX;
    estado.cobraY += estado.velocidadeY;

    for (let i = estado.corpoCobra.length - 1; i > 0; i--) {
        estado.corpoCobra[i] = estado.corpoCobra[i - 1];
    }

    estado.corpoCobra[0] = [estado.cobraX, estado.cobraY];

    if (
        estado.cobraX <= 0 || estado.cobraX > 30 ||
        estado.cobraY <= 0 || estado.cobraY > 30
    ) return estado.fimDeJogo = true;

    for (let i = 0; i < estado.corpoCobra.length; i++) {
        if (i !== 0 &&
            estado.corpoCobra[0][0] === estado.corpoCobra[i][0] &&
            estado.corpoCobra[0][1] === estado.corpoCobra[i][1]
        ) estado.fimDeJogo = true;

        html += `<div class="${i === 0 ? "cobra-head" : "cobra"}" style="grid-area: ${estado.corpoCobra[i][1]} / ${estado.corpoCobra[i][0]}"></div>`;
    }

    if (estado.fimDeJogo) return acabouJogo();
    elementos.snakeGame.innerHTML = html;
    estado.direcaoMudou = false;
}
