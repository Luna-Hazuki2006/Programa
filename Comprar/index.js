// return json data from any file path (asynchronous)
async function getJSON(path) {
    const response = await fetch(path)
    return await response.json()
}
const objetos = document.getElementById("objetos")
let lista = []

let protagonista = JSON.stringify(getJSON("../Protagonista.json"))
console.log(protagonista);
const textoCambiable = document.getElementById("DogeCoins")
const cambiarTexto = () => {
    textoCambiable.textContent = "aaaaaaaaaaaaaaa"
}
cambiarTexto()
// load json data; then proceed
getJSON('../Objetos.json').then(info => {
    // get title property and log it to the console
    lista = info  
    console.log(lista);
    lista?.forEach((element) => {
        console.log(element);
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
            <button class="nes-btn" id="">Comprar</button><br><br>
        </div>
        `
    });
})