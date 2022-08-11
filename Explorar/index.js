const suerte = document.getElementById("suerte")
suerte?.addEventListener("click", () => {
    let protagonista = JSON.parse(localStorage.getItem("Protagonista"))
    let ticket = Math.floor((Math.random() * 3) + 1);
    let objetos = JSON.parse(localStorage.getItem("Objetos"))
    switch (ticket) {
        case 1:
            ticket = Math.floor((Math.random() * 3) + 1)
            let verdad = Math.floor((Math.random() * 2) + 1)
            let numero = Math.floor((Math.random() * 10) + 1)
            let final = ""
            switch (verdad) {
                case 1:
                    switch (ticket) {
                        case 1:
                            final = "ataque"
                            protagonista.ataque += numero
                            break;
                        case 2:
                            final = "defensa"
                            protagonista.defensa += numero
                            break;
                        case 3:
                            final = "salud"
                            protagonista.salud += numero
                            break;
                    }
                    Swal.fire(
                        '¡Se agregarán puntos :D!',
                        `Se te agregaron ${(numero > 1) ? numero + " puntos " : numero + " punto "} en ${final}`,
                        'success'
                    )
                    break;
                case 2:
                    switch (ticket) {
                        case 1:
                            final = "ataque"
                            protagonista.ataque -= numero
                            break;
                        case 2:
                            final = "defensa"
                            protagonista.defensa -= numero
                            break;
                        case 3:
                            final = "salud"
                            protagonista.salud -= numero
                            break;
                    }
                    Swal.fire(
                        '¡Se te quitarán puntos D:!',
                        `Se te quitaron ${(numero > 1) ? numero + " puntos " : numero + " punto "} en ${final}`,
                        'error'
                    )
                    break;
            }
            localStorage.setItem("Protagonista", JSON.stringify(protagonista))
            break;
        case 2:
            ticket = Math.floor((Math.random() * 10) + 1)
            Swal.fire(
                '¡Tu salud máxima mejorará!',
                `¡Has ganado ${(ticket > 1) ? ticket + " puntos" : ticket + " punto"} en salud máxima :D!`,
                'success'
            )
            protagonista.saludMax += ticket
            localStorage.setItem("Protagonista", JSON.stringify(protagonista))
            break;
        case 3:
            ticket = Math.floor((Math.random() * 2) + 1)
            switch (ticket) {
                case 1:
                    ticket = Math.floor((Math.random() * 4) + 1)
                    let objeto = objetos[ticket - 1]
                    Swal.fire({
                        title: `¡Haz encontrado ${objeto.nombre}!`,
                        text: `Te dará ${(objeto.mejora.length == 1) ? 
                            objeto.cantidad + " puntos en tu " + objeto.mejora[0] : 
                            objeto.cantidad + " puntos en tu ataque, defensa y salud máxima"}.`,
                        imageUrl: `${objeto.imagen}`,
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: 'Objeto :D',
                    })
                    switch (objeto.mejora.length) {
                        case 1:
                            switch (el.mejora[0]) {
                                case "ataque":
                                    protagonista.ataque += objeto.cantidad
                                    break;
                                case "defensa":
                                    protagonista.defensa += objeto.cantidad
                                    break;
                                case "saludMax":
                                    protagonista.saludMax += objeto.cantidad
                                    break;
                            }
                            break;
                        case 3:
                            protagonista.ataque += objeto.cantidad
                            protagonista.defensa += objeto.cantidad
                            protagonista.saludMax += objeto.cantidad
                            break;
                    }
                    break;
                case 2:
                    ticket = Math.floor((Math.random() * 10) + 1)
                    Swal.fire({
                        title: '¡DogeCoin :D!',
                        text: `Has encontrado ${(ticket > 1) ? ticket + " DogeCoins" : ticket + " DogeCoin"}.`,
                        imageUrl: '../assets/DogeCoin.png',
                        imageWidth: 400,
                        imageHeight: 400,
                        imageAlt: 'DogeCoin :D',
                    })
                    protagonista.monedas += ticket
                    break;
            }
            localStorage.setItem("Protagonista", JSON.stringify(protagonista))
            break;
        default:
            alert("Trata de oprimir el botón de nuevo")
            break;
    }

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
})
