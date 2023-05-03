import {validarform} from "./validaciones.js";

const inputs = document.querySelectorAll ("input,textarea");

inputs.forEach (input => {
    input.addEventListener('blur', (input) => {
        validarform(input.target);
    });
});
