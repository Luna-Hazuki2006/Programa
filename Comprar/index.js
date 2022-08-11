// return json data from any file path (asynchronous)... why did I write this in english?
// async function getJSON(path) {
//     const response = await fetch(path)
//     return await response.json()
// }
const objetos = document.getElementById("objetos")
const monedas = document.getElementById("DogeCoins")
const ataque = document.getElementById("Ataque")
const defensa = document.getElementById("Defensa")
const salud = document.getElementById("Salud")
let lista = []

const Guardar = () => {
    let protagonista = JSON.parse(localStorage.getItem("Protagonista"))
    monedas.textContent = `Cheems Samurai DogeCoins: ${protagonista.monedas}`
    ataque.textContent = `Estadísticas de ataque: ${protagonista.ataque}`
    defensa.textContent = `Estadística de defensa: ${protagonista.defensa}`
    salud.textContent = `Estadística de salud máxima: ${protagonista.saludMax}`
}
Guardar()
const comprar = (id) => {
    // getJSON("../Objetos.json").then(info => {
    //     let el 
    //     info.forEach((element) => {
    //         if (element.id == id) {
    //             el = element
    //         }
    //     })
    //     if (confirm(`¿Está seguro que quiere comprar esta ${el.nombre} por ${el.dinero} DogeCoins?`)) {

    //         localStorage.setItem("Protagonista", )        
    //     }
    // })
    let protagonista = JSON.parse(localStorage.getItem("Protagonista"))
    const lista = JSON.parse(localStorage.getItem("Objetos"))
    let el
    lista?.forEach((element) => {
        if (element.id == id) el = element
    })
    if (confirm(`¿Está seguro que quiere comprar esta ${el.nombre} por ${el.dinero} DogeCoins?`)) {
        if (protagonista.monedas < el.dinero) {
            alert("Perdón, pero no tienes suficiente DogeCoins :'v")
            return
        }
        protagonista.monedas -= el.dinero
        switch (el.mejora.length) {
            case 1:
                switch (el.mejora[0]) {
                    case "ataque":
                        protagonista.ataque += el.cantidad
                        break;
                    case "defensa":
                        protagonista.defensa += el.cantidad
                        break;
                    case "saludMax":
                        protagonista.saludMax += el.cantidad
                        break;
                    default:
                        break;
                }
                break;
            case 3:
                protagonista.ataque += el.cantidad
                protagonista.defensa += el.cantidad
                protagonista.saludMax += el.cantidad
                break;
        }
        localStorage.setItem("Protagonista", JSON.stringify(protagonista))
    }
    Guardar()
}
// load json data; then proceed
const listar = () => {
    // get title property and log it to the console
    lista = JSON.parse(localStorage.getItem("Objetos"))
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
}
listar()