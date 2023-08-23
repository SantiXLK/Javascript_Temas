const edades = new Map();

edades.set("Ana", 25);
edades.set("Carlos", 32);

console.log("Edad de Ana: " + edades.get("Ana"));

console.log("Tamaño del Map de edades: " + edades.size);

console.log("¿Contiene a Carlos? " + edades.has("Carlos"));

edades.delete("Ana");

console.log("Personas en el Map:");
edades.forEach((edad, nombre) => {
    console.log(nombre + ": " + edad + " años");
});
