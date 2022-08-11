class Personaje {
    constructor(nombre, descripcion, imagen, memorial, salud, saludMax, ataque, defensa, monedas) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
        this.memorial = memorial
        this.salud = salud
        this.saludMax = saludMax
        this.ataque = ataque
        this.defensa = defensa
        this.monedas = monedas
    }
}
const LongCat = new Personaje("Long Cat", "es muuuy largo", "../assets/longcat_alive.png", "../longcat_dead.png", 50, 50, 7, 7, 0)
const Doge = new Personaje("Doge", "Wow perro, mucho feliz, tanto mover colita.", "../assets/doge_alive.png", "../assets/doge_dead.png", 81, 81, 15, 14, 0)
const PanaMiguel = new Personaje("El Pana Miguel", "De pie, el Pana Miguel", "../assets/pana_miguel_alive.png", "../assets/pana_miguel_dead.png", 105, 105, 21, 32, 0)
const DarkCheems = new Personaje("Dark Cheems", "El perrito con amsiedad se puso oscuro", "../assets/dark_cheems_alive.png", "../assets/dark_cheems_dead.png", 120, 120, 40, 35, 0)
const SinkoPeso = new Personaje("Sinko Peso", "Vende plei chipeado sinko peso", "../assets/sinko_peso_alive.png", "../assets/sinko_peso_dead.png", 201, 201, 45, 46, 0)
const Cheems = new Personaje("Cheems", "El perrito con amsiedad más fuerte de todos", "../assets/cheems_alive.png", "../assets/cheems_dead.png", 420, 420, 69, 69, 0)
const Prota = new Personaje("Cheems Samurai", "El pequeño Cheems samurai se tendrá que enfrentar contra el mundo y la ansiedad", "../assets/Cheems_samurai_alive", "../assets/Cheems_samurai_dead", 50, 50, 1, 1, 5);
const enemigos = [
    LongCat, Doge, PanaMiguel, DarkCheems, SinkoPeso, Cheems
]

// const name = new File(arguments);

// para la lista de enemigos

