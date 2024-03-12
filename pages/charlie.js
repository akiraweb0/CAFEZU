function charlie() {
    let rutaServicio = "http://localhost/cafeteria/agricultores.php"
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
            fila += "<td>" + item.idagricultor + "</td>"
            fila += "<td>" + item.nombreAgricultor + "</td>"
            fila += "<td>" + item.zona + "</td>"
            fila += "<td>" + item.porcentajeTaza + "</td>"
            fila += "<td>" + item.tipoCafé + "</td>"
            fila += "</tr>"
            contenidoTabla += fila
            console.log(contenidoTabla)
        })
        document.getElementById("tbody-cafe4").innerHTML = contenidoTabla
    }
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", charlie);