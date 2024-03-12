function almacenes() {
    let rutaServicio = "http://localhost/cafeteria/almacenes.php"
    fetch(rutaServicio)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            llenarCards(data)
        })
    const llenarCards = (data) => {
        console.log(data)
        let contenidoCards = ""
        data.map(item => {
            console.log(item.ubicacion)
            let card = "<div class='col-md-4 mb-4'>"
            card += "<div class='card'>"
            card += "<img src='http://localhost/cafeteria/almacenes/" + item.foto + "' class='card-img-top' alt='...'>"
            card += "<div class='card-body'>"
            card += "<h5 class='card-title'>" + item.IdAlmacen + " " + item.Proveedor + "</h5>"
            card += "<p class='card-text'>Proveedor: " + item.Proveedor + "</p>"
            card += "<p class='card-text'>Fecha Entrada: " + item.FechaEntrada + "</p>"
            card += "<p class='card-text'>Fecha Caducidad: " + item.FechaCaducidad + "</p>"
            card += "<p class='card-text'>Ubicacion: " + item.ubicacion + "</p>"
            card += "</div></div></div>"
            contenidoCards += card
        })
        document.getElementById("grid-card-almacenes").innerHTML = contenidoCards
    }
}
almacenes()