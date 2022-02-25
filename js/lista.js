class Libro
{
    constructor(nombre, precio)
    {
        this.costos = [1,2,3,4];
        this.nombre = nombre;
        this.precio = precio;
    }
    sumaCostos()
    {
        var sum = 0;
        for (let i = 0; i < this.costos.length; i++) {
            sum += this.costos[i];
            console.log(sum);
        }

    }
    
}
let libro1 = new Libro();
libro1.sumaCostos();

class Listahtml
{
    constructor()
    {

    }
}
