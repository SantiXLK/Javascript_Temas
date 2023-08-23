function Vehiculo(tipo) {
    this.tipo = tipo;
}

Vehiculo.prototype.hacerSonido = function() {
    console.log("El vehículo hace un sonido");
};

function Coche() {
    Vehiculo.call(this, "coche");
}

Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

Coche.prototype.abrirPuertas = function() {
    console.log("Puertas abiertas");
};

const miCoche = new Coche();

miCoche.hacerSonido(); 
miCoche.abrirPuertas();
console.log(miCoche.tipo);
