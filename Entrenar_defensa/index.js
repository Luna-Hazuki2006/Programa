let protagonista = JSON.parse(localStorage.getItem("Protagonista"))

const llenar = () => {
    const estat = document.getElementById("stat")
    estat.innerHTML = `
    <h3 class="title">Estadísticas de Cheems samurai</h3>
    <progress class="nes-progress is-primary" value="${protagonista.salud}" max="${protagonista.saludMax}"></progress>
    <p>Salud: ${protagonista.salud}</p>
    <p>Salud máxima: ${protagonista.saludMax}</p>
    <p>Ataque: ${protagonista.ataque}</p>
    <p>Defensa: ${protagonista.defensa}</p>
    <p>DogeCoins: ${protagonista.monedas}</p>
    `
}
llenar()
const suerte = document.getElementById("suerte")
suerte?.addEventListener("click", () => {
    let defensa = Math.floor((Math.random() * 5) + 1)
    let saludMax = Math.floor((Math.random() * 5) + 1)
    let salud = Math.floor((Math.random() * 5) + 1)
    let pro = Math.floor((Math.random() * 10) + 1)

    Swal.fire(
        '¡Entrenamiento exitoso :D!',
        `Ganaste ${(defensa > 1) ? defensa + " puntos " : defensa + " punto "} de defensa :D, 
        pero perdiste ${salud} de salud D: 
        ${(pro == 10) ? " pero, con " + saludMax + " de salud máxima :D" : ""}`,
        'success'
    )
    protagonista.salud -= salud
    protagonista.defensa += defensa
    if (pro == 10) protagonista.saludMax += saludMax; else console.log("Ay no pos que mala suerte D:");
    localStorage.setItem("Protagonista", JSON.stringify(protagonista))
    llenar()
})