console.log("Inicio");

function operacionAsincrona() {
    setTimeout(() => {
        console.log("Tarea asíncrona completada");
        console.log("Fin");
    }, 2000);
}

operacionAsincrona();

console.log("Después de la llamada a la función");
