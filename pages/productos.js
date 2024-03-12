
function productoscafe() {
    let rutaServicio = "http://localhost/cafeteria/productoscafe.php"
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
            fila += "<td>" + item.idproducto + "</td>"
            fila += "<td>" + item.nombre + "</td>"
            fila += "<td>" + item.descripcion + "</td>"
            fila += "<td>" + item.precio + "</td>"
            fila += "</tr>"
            contenidoTabla += fila
            console.log(contenidoTabla)
        })
        document.getElementById("tbody-cafe2").innerHTML = contenidoTabla
    }
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", productoscafe);