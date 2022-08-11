// return json data from any file path (asynchronous)... why did I write this in english?
async function getJSON(path) {
    const response = await fetch(path)
    return await response.json()
}
const objetos = document.getElementById("objetos")
const monedas = document.getElementById("DogeCoins")
const ataque = document.getElementById("Ataque")
const defensa = document.getElementById("Defensa")
const salud = document.getElementById("Salud")
let lista = []

const protagonista = () => getJSON("../Protagonista.json").then(info => {
    lista = info
    console.log(lista);
    lista?.forEach((element) => {
        // let a = JSON.stringify(element)
        // console.log("esto es a: " + a);
        // let b = JSON.parse(a)
        // console.log(b.dinero);
        monedas.textContent = `Cheems Samurai DogeCoins: ${element.monedas}`
        ataque.textContent = `Estadísticas de ataque: ${element.ataque}`
        defensa.textContent = `Estadística de defensa: ${element.defensa}`
        salud.textContent = `Estadística de salud máxima: ${element.saludMax}`
    })
})

const comprar = (id) => {
    getJSON("../Objetos.json").then(info => {
        let el 
        info.forEach((element) => {
            if (element.id == id) {
                el = element
            }
        })
        if (confirm(`¿Está seguro que quiere comprar esta ${el.nombre} por ${el.dinero} DogeCoins?`)) {
            localStorage.setItem("Protagonista", )        
        }
    })
}

protagonista()
// load json data; then proceed
const listar = () => getJSON('../Objetos.json').then(info => {
    // get title property and log it to the console
    lista = []
    lista = info  
    // console.log(lista);
    lista?.forEach((element) => {
        // console.log(element);
        objetos.innerHTML += `
        <div>
            <h1>${element.nombre}</h1>
            <img class="imagenes" src="${element.imagen}" alt="${element.nombre}">
            <p>Puntos de mejora: ${element.cantidad}</p>
            <p>${(element.mejora.length == 1) ? 
                "Estadística mejorada: " + element.mejora[0] : 
                "Estadísticas mejoradas: " + 
                element.mejora[0] + ", " + element.mejora[1] + ", " + element.mejora[2]}</p>
            <p>DogeCoins necesarias: ${element.dinero}</p>
            <button onclick="comprar(${element.id})" class="nes-btn" id="btn-${element.id}">Comprar</button><br><br>
        </div>
        `
    });
})
listar()