
$(document).ready(function() {
    // Evento click para el botón
    $("#cargarContenido").on("click", function() {
        // Ruta de la página que quieres cargar
        var url = "http://localhost/cafeteria/productoscafe.php";

        // Utiliza jQuery para cargar el contenido en el área específica
        $("#contenedor").load(url, function(response, status, xhr) {
            if (status == "error") {
                // Manejar errores si es necesario
                console.log("Error al cargar la página:", xhr.statusText);
            }
        });
    });
});
