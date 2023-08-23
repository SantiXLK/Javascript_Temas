function Vehiculo(tipo) {
    this.tipo = tipo;
}

Vehiculo.prototype.hacerSonido = function() {
    console.log("El vehículo hace un sonido");
};

const coche = new Vehiculo("Coche");
const bicicleta = new Vehiculo("Bicicleta");

coche.hacerSonido();     
bicicleta.hacerSonido(); 
