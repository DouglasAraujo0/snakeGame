import { estado } from "./state.js";

export function mudarDirecao(evento) {
    if (!estado.jogoIniciado || estado.direcaoMudou) return;

    const tecla = evento.key.toLowerCase();

    if ((tecla === "arrowup" || tecla === "w") && estado.velocidadeY !== 1) {
        estado.proximaVelocidadeX = 0;
        estado.proximaVelocidadeY = -1;
    } else if ((tecla === "arrowdown" || tecla === "s") && estado.velocidadeY !== -1) {
        estado.proximaVelocidadeX = 0;
        estado.proximaVelocidadeY = 1;
    } else if ((tecla === "arrowleft" || tecla === "a") && estado.velocidadeX !== 1) {
        estado.proximaVelocidadeX = -1;
        estado.proximaVelocidadeY = 0;
    } else if ((tecla === "arrowright" || tecla === "d") && estado.velocidadeX !== -1) {
        estado.proximaVelocidadeX = 1;
        estado.proximaVelocidadeY = 0;
    }

    estado.direcaoMudou = true;
}
