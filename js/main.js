$(document).ready(function(){
    // Asigna un controlador de clic al elemento con id "explore"
    $(".bottom-wrap").click(function(){
        // Muestra una alerta cuando se hace clic en el elemento
        alert("Pedido ordenado");
    });
});


$(document).ready(function(){
            // Asigna un controlador de clic al elemento con id "SubscribirBoton"
            $("#SubscribirBoton").click(function(){
                // Cambia la animación del botón (desvanece durante 1 segundo)
                    // Callback después de completar la animación
                    // Muestra una alerta
                    alert("¡Gracias por subscribirte!")
                });
            });

document.getElementById("menu-item-almacenes").addEventListener("click", () => {
    fetch("pages/almacenes.html")
    .then(response => response.text())
    .then(data =>{
        document.getElementById("main-content").innerHTML = data
        let script = document.createElement("script")
        script.src = "pages/almacenes.js"
        document.getElementById("main-content").appendChild(script)
    })
})

document.getElementById("menu-item-charlie").addEventListener("click", () => {
    fetch("pages/charlie.html")
    .then(response => response.text())
    .then(data =>{
        document.getElementById("main-content").innerHTML = data
        let script = document.createElement("script")
        script.src = "pages/charlie.js"
        document.getElementById("main-content").appendChild(script)
    })
})

  