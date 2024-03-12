function empleadoscafe() {
    let rutaServicio = "http://localhost/cafeteria/empleadoscafe.php"
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
            fila += "<td>" + item.idempleado + "</td>"
            fila += "<td>" + item.nombres + "</td>"
            fila += "<td>" + item.correo + "</td>"
            fila += "<td>" + item.puesto + "</td>"
            fila += "<td>" + item.fechadeinicio + "</td>"
            fila += "</tr>"
            contenidoTabla += fila
            console.log(contenidoTabla)
        })
        document.getElementById("tbody-cafe").innerHTML = contenidoTabla
    }
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", empleadoscafe);