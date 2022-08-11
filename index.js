// class Personaje {
//     constructor(nombre, descripcion, imagen, memorial, salud, saludMax, ataque, defensa, monedas) {
//         this.nombre = nombre
//         this.descripcion = descripcion
//         this.imagen = imagen
//         this.memorial = memorial
//         this.salud = salud
//         this.saludMax = saludMax
//         this.ataque = ataque
//         this.defensa = defensa
//         this.monedas = monedas
//     }
// }
// const LongCat = new Personaje("Long Cat", "es muuuy largo", "../assets/longcat_alive.png", "../longcat_dead.png", 50, 50, 7, 7, 0)
// const Doge = new Personaje("Doge", "Wow perro, mucho feliz, tanto mover colita.", "../assets/doge_alive.png", "../assets/doge_dead.png", 81, 81, 15, 14, 0)
// const PanaMiguel = new Personaje("El Pana Miguel", "De pie, el Pana Miguel", "../assets/pana_miguel_alive.png", "../assets/pana_miguel_dead.png", 105, 105, 21, 32, 0)
// const DarkCheems = new Personaje("Dark Cheems", "El perrito con amsiedad se puso oscuro", "../assets/dark_cheems_alive.png", "../assets/dark_cheems_dead.png", 120, 120, 40, 35, 0)
// const SinkoPeso = new Personaje("Sinko Peso", "Vende plei chipeado sinko peso", "../assets/sinko_peso_alive.png", "../assets/sinko_peso_dead.png", 201, 201, 45, 46, 0)
// const Cheems = new Personaje("Cheems", "El perrito con amsiedad más fuerte de todos", "../assets/cheems_alive.png", "../assets/cheems_dead.png", 420, 420, 69, 69, 0)
// const Prota = new Personaje("Cheems Samurai", "El pequeño Cheems samurai se tendrá que enfrentar contra el mundo y la ansiedad", "../assets/Cheems_samurai_alive", "../assets/Cheems_samurai_dead", 50, 50, 1, 1, 5);
// const enemigos = [
//     LongCat, Doge, PanaMiguel, DarkCheems, SinkoPeso, Cheems
// ]
// return json data from any file path (asynchronous)... why did I write this in english?
async function getJSON(path) {
    const response = await fetch(path)
    return await response.json()
}

if (!localStorage.getItem("Protagonista")) {
    getJSON("Protagonista.json").then(info => {
        localStorage.setItem("Protagonista", JSON.stringify(info[0]))
    })
}

if (!localStorage.getItem("Objetos")) {
    getJSON("Objetos.json").then(info => {
        localStorage.setItem("Objetos", JSON.stringify(info))
    })
}

if (!localStorage.getItem("Enemigos")) {
    getJSON("Enemigos.json").then(info => {
        localStorage.setItem("Enemigos", JSON.stringify(info))
    })
}

const prota = JSON.parse(localStorage.getItem("Protagonista"))
console.log(prota);
const vida = prota.salud
console.log(vida);
if (vida <= 0) {
    console.log("hola mundo");
    const vista = document.getElementById("cheems")
    vista.src = "assets/Cheems_samurai_dead.jpg"
    const visible = document.getElementById("visible")
    visible.style.display = "none"
}

const estat = document.getElementById("stat")
estat.innerHTML = `
    <progress class="nes-progress is-primary" value="${prota.salud}" max="${prota.saludMax}"></progress>
    <p>Descripción: ${prota.descripcion}</p>
    <p>Salud: ${prota.salud}</p>
    <p>Salud máxima: ${prota.saludMax}</p>
    <p>Ataque: ${prota.ataque}</p>
    <p>Defensa: ${prota.defensa}</p>
    <p>DogeCoins: ${prota.monedas}</p>
`