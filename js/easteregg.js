import { estado } from "./state.js";

export function escutarEasterEgg() {
    document.addEventListener("keydown", (evento) => {
        estado.inputUsuario += evento.key.toLowerCase();

        if (estado.inputUsuario.endsWith(estado.codigoSecreto)) {
            document.body.style.backgroundImage = "url('./assets/daniel.jpeg')";
            estado.inputUsuario = "";
        } else if (estado.inputUsuario.endsWith(estado.resetarEasterEgg)) {
            document.body.style.backgroundImage = "none";
            estado.inputUsuario = "";
        }
    });
}
