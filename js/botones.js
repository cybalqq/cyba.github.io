let botones = document.getElementsByClassName('servicio')

for(let pos = 0; pos < botones.length; pos++) {
    let boton = botones[pos]
    boton.addEventListener("click", () => redireccionar(boton.id))
}

function redireccionar(idBoton) {
    window.location.href = "html/" + idBoton + ".html"
}
