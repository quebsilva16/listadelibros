class Libro
{
    constructor(nombre, precio, total)
    {
        this.nombre = nombre;
        this.precio = precio;
        this.total = total;
    }
    sumaPrecios()
    {
        for (var i=0; i<5; i++) {
            console.log('intento ' + i);
        }
        let suma = libro1.precio + libro2.precio + libro3.precio + libro4.precio;
        this.total = suma;
        console.log(this.total);
        return this.total;
    }
}
const libro1 = new Libro('libromagico', 50);
console.log( libro1.nombre);
console.log( libro1.precio);

const libro2 = new Libro('librosuspenso', 70);
console.log( libro2.nombre);
console.log( libro2.precio);

const libro3 = new Libro('librohistoria', 60);
console.log( libro3.nombre);
console.log( libro3.precio);

const libro4 = new Libro('librociencia', 20);
console.log( libro4.nombre);
console.log( libro4.precio);

libro4.sumaPrecios();
console.log(this.total);

class Listado 
{
    constructor()
    {

    }
}