const colores = new Set();

colores.add("rojo");
colores.add("azul");
colores.add("verde");
colores.add("rojo");

console.log("Tamaño del Set de colores: " + colores.size);

console.log("¿Contiene azul? " + colores.has("azul"));

colores.delete("verde");

console.log("Colores en el Set:");
colores.forEach(color => {
    console.log(color);
});
