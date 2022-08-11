// return json data from any file path (asynchronous)... why did I write this in english?
async function getJSON(path) {
    const response = await fetch(path)
    return await response.json()
}
const enemigos = document.getElementById("enemigos")
let lista = []

const listar = () => getJSON("../Enemigos.json").then(info => {
    lista = []
    lista = info
    lista.forEach((element) => {
        enemigos.innerHTML += `
        <div>
            <h1>${element.nombre}</h1>
            <progress class="nes-progress is-primary" value="${element.salud}" max="${element.saludMax}"></progress>
            <img class="imagenes" src="${(element.salud > 0) ? element.imagen : element.memorial}" alt="Enemigo">
            <p>Vida Máxima: ${element.saludMax}</p>
            <p>Ataque: ${element.ataque}</p>
            <p>Defensa: ${element.defensa}</p>
            <p>DogeCoins: ${element.monedas}</p>
            <br>
        </div>
    `
    })
})
