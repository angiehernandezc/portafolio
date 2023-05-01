import {validarform} from "./validaciones.js";

const inputs = document.querySelectorAll ("input,textarea");

inputs.forEach (input => {
    input.addEventListener('blur', (input) => {
        validarform(input.target);
    });
});

const formulario = document.querySelector(".formulario");
const boton = document.querySelector(".enviar");
boton.disabled = true;

formulario.addEventListener("input",() => {
    boton.disabled = !formulario.checkValidity();
});