import { iniciarJogo, atualizarComida } from "./game.js";
import { mudarDirecao } from "./direction.js";
import { estado } from "./state.js";
import { elementos } from "./ui.js";
import { escutarEasterEgg } from "./easteregg.js";

elementos.recorde.innerHTML = `High Score: ${estado.highScore}`;
atualizarComida();
estado.intervalo = setInterval(iniciarJogo, 100);
document.addEventListener("keydown", mudarDirecao);

elementos.btnIniciar.addEventListener("click", () => {
    estado.jogoIniciado = true;
    elementos.menuInicial.style.display = "none";
    elementos.jogo.style.display = "flex";
});

elementos.btnReiniciar.addEventListener("click", () => {
    estado.jogoIniciado = true;
    estado.fimDeJogo = false;
    estado.cobraX = 15;
    estado.cobraY = 15;
    estado.velocidadeX = 0;
    estado.velocidadeY = 0;
    estado.proximaVelocidadeX = 0;
    estado.proximaVelocidadeY = 0;
    estado.corpoCobra = [];
    estado.score = 0;
    elementos.pontuacao.innerText = `Score: ${estado.score}`;

    elementos.menuGameOver.style.display = "none";
    elementos.menuInicial.style.display = "none";
    elementos.jogo.style.display = "flex";

    estado.intervalo = setInterval(iniciarJogo, 100);
});

escutarEasterEgg();

elementos.btnDoc.addEventListener("click", () => {
    elementos.modal.style.display = "block";
});
elementos.btnClose.addEventListener("click", () => {
    elementos.modal.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target === elementos.modal) {
        elementos.modal.style.display = "none";
    }
});
