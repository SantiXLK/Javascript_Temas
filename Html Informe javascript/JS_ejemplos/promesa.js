const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve("Tarea exitosa");
        } else {
            reject("Tarea fallida");
        }
    }, 2000);
});

promesa.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.error(error);
});
