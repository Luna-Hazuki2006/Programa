const protagonista = JSON.parse(localStorage.getItem("Protagonista"))
protagonista.salud = protagonista.saludMax
localStorage.setItem("Protagonista", JSON.stringify(protagonista))
console.log("Cheems acaba de tener sus 8 horas de sueño :3");