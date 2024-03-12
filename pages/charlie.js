function charlie() {
    let rutaServicio = "http://localhost/cafeteria/charlie.php"
    fetch(rutaServicio)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            llenarTabla(data)
        })
    
    const llenarTabla = (data) => {
        console.log(data)
        let contenidoTabla = ""
        data.map(item => {
            console.log(item.nombre)
            let fila = "<tr>"
            fila += "<td>" + item.IdAgricultor + "</td>"
            fila += "<td>" + item.nombreAgricultor + "</td>"
            fila += "<td>" + item.zona + "</td>"
            fila += "<td>" + item.porcentajeTaza + "</td>"
            fila += "<td>" + item.tipoCafé + "</td>"
            fila += "<td></td>"
            fila += "<td></td>"
            fila += "</tr>"
            contenidoTabla += fila
            console.log(contenidoTabla)
        })
        document.getElementById("tbody-cafe4").innerHTML = contenidoTabla
    }
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", charlie);


