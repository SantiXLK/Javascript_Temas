function realizarTarea(resultado, callback) {
    console.log("Realizando tarea: " + resultado);
    callback();
}

function finalizarTarea() {
    console.log("Tarea finalizada");
}

realizarTarea("Paso 1", finalizarTarea);
