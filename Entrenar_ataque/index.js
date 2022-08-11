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
    let ataque = Math.floor((Math.random() * 5) + 1)
    let salud = Math.floor((Math.random() * 5) + 1)

    Swal.fire(
        '¡Entrenamiento exitoso :D!',
        `Ganaste ${(ataque > 1) ? ataque + " puntos " : ataque + " punto "} de ataque :D, 
        pero perdiste ${salud} de salud D:`,
        'success'
    )
    protagonista.salud -= salud
    protagonista.ataque += ataque
    localStorage.setItem("Protagonista", JSON.stringify(protagonista))
    llenar()
})