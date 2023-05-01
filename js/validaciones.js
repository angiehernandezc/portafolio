
export function validarform(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
        input.parentElement.classList.remove("item-container--invalid", "area-container--invalid");
        input.parentElement.querySelector(".item-msj-error", ".area-msj-error").innerHTML = "";
    } 
    else {
        input.parentElement.classList.add("item-container--invalid", "area-container--invalid");
        input.parentElement.querySelector(".item-msj-error", ".area-msj-error").innerHTML = mostrarError(tipoDeInput, input);
    }
}

const tipoDeError = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
];

const msjError = {
    nombre: {
        valueMissing: 'Este campo no puede estar vacio',
    },
    correo: {
        valueMissing: 'Este campo no puede estar vacio',
        typeMismatch: 'Correo no válido, formato requerido direccion@correo.com',
    },
    asunto: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: "Máximo se aceptan 50 caracteres",
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Máximo 300 caracteres",
    },
};

function mostrarError (tipoDeInput, input) {
    let mensaje = "";
    tipoDeError.forEach( error => {
        if (input.validity[error]) {
            mensaje = msjError[tipoDeInput][error];
        }
    });
    return mensaje;
}