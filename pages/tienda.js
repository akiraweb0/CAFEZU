function tienda() {
    let categorias = [];// let categorias = new Array()
    let productos = [];
    let rutaServicio = "http://localhost/servicioisil/categorias.php"
    fetch(rutaServicio)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            categorias = data
            llenarLista(data)
        })

    const llenarLista = (data) => {
        let contenidoLista = ""
        data.map(item => {
            let itemLista = "<li class='list-group-item' title='" + item.descripcion + "'>"
                + item.nombre + "</li>"
            contenidoLista += itemLista
        })
        document.getElementById("lista-categorias").innerHTML = contenidoLista

        let itemsCategoria = document.querySelectorAll("#lista-categorias li")
        itemsCategoria.forEach((iLista, index) => {
            iLista.addEventListener("click", (event) => seleccionarCategoria(event, index))
        })
        seleccionarCategoria(null, 0)
        document.querySelector("#lista-categorias li").classList.add("active") //Selecciona al primero que lo llames
    }
    const seleccionarCategoria = (event, index) => {
        console.log(categorias[index])
        document.getElementById("categoria-nombre").innerText = categorias[index].nombre
        document.getElementById("categoria-descripcion").innerText = categorias[index].descripcion

        let itemsCategoria = document.querySelectorAll("#lista-categorias li")
        itemsCategoria.forEach(iLista => {
            iLista.classList.remove("active")
        })
        if(event !== null){
        event.currentTarget.classList.add("active")
        }
        let idcategoria = categorias[index].idcategoria
        leerProductos(idcategoria)
    }

    const leerProductos = (idcategoria) => {
        let rutaServicio = "http://localhost/servicioisil/productos.php?idcategoria=" + idcategoria
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                productos = data
                llenarCuadricula()
            })
    }

    const llenarCuadricula = () => {
        let contenidoCuadricula = ""
        productos.map(item => {
            let rutaImagen = "images/no-image.svg"
            if(item.imagenchica !== null){
                rutaImagen = "http://localhost/servicioisil/" + item.imagenchica 
            }
            /*
            let precioVenta = 0;
            if(item.preciorebajado === 0){
                precioVenta = item.precio
            }else{
                precioVenta = item.preciorebajado
            }
            */
            let precioVenta = item.preciorebajado === 0 ? item.precio : item.preciorebajado //Operador ternario
            let precioAnterior = item.preciorebajado === 0 ? "" : "<span class='precio-anterior'>S/ " 
                                    + item.precio.toFixed(2) + "</span>";

            let card = "<div class='col'>"
            card += "<div class='card h-100'>"
            card += "<img src='"+ rutaImagen + "' class='card-img-top' alt='...'>"
            card += "<div class='card-body'><i class='bi bi-eye icono-vista-rapida' " +
                    "data-bs-toggle='modal' data-bs-target='#vistaRapidaModal' title='Vista rápida'></i>"
            card += "<p class='card-title text-center'>" + item.nombre + "</p>"
            card += "<p class='card-text text-center'> S/ " + precioVenta.toFixed(2) + precioAnterior 
                    +"<i class='bi bi-cart4 icono-carrito' title ='Añadir el carrito'></i>"
            card += "</div></div></div>"
            contenidoCuadricula += card
        })
        document.getElementById("grid-card-productos").innerHTML = contenidoCuadricula
        let iconosVistaRapida = document.querySelectorAll(".icono-vista-rapida")
        iconosVistaRapida.forEach((iVistaRapida, index) => {
            iVistaRapida.addEventListener("click", () => seleccionarProducto(index))
        })
        let iconosCarrito = document.querySelectorAll(".icono-carrito")
        iconosCarrito.forEach((iCarrito, index) => {
            iCarrito.addEventListener("click", () => agregarItemCarrito(index))
        })
    }

    const agregarItemCarrito = (index) =>{
        console.log(productos[index].idproducto)
        let itemCarrito = productos[index]
        itemCarrito.cantidad = 1
        itemCarrito.precio = itemCarrito.preciorebajado === 0 ? itemCarrito.precio : itemCarrito.preciorebajado
        console.log(itemCarrito)
        let carrito = []
        if(sessionStorage.getItemItem("carritocompras")){
            carrito = JSON.parse(sessionStorage.getItem("carritocompras"))
            let posicion = -1
            for(let i=0; i<carrito.length; i++){
               if(itemCarrito.idproducto === carrito[i].idproducto){
                    posicion = i
                    break
               }
            }
            if(posicion !== -1){ //si encuentra el producto
                carrito[posicion].cantidad++
                sessionStorage.setItem("carritocompras", JSON.stringify(carrito))

            }
            else{ // si es que no lo encuentra
                carrito.push(itemCarrito)
            }
        }
        else{ //si el carrito esta vacio
            carrito.push(itemCarrito)
        }
        sessionStorage.setItem("carritocompras", JSON.stringify(carrito))
    }

    const seleccionarProducto = (index) => {
        console.log(productos[index].idproducto)
        let rutaServicio = "http://localhost/servicioisil/productodetalle.php?idproducto=" 
                                    + productos[index].idproducto
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                document.getElementById("producto-nombre").innerText = data[0].nombre
                let rutaImagen = "images/no-image.svg"
                if(data[0].imagengrande !== null){
                    rutaImagen = "http://localhost/servicioisil/" + data[0].imagengrande
                }
                document.getElementById("producto-imagen").setAttribute("src", rutaImagen)
                let precioVenta = data[0].preciorebajado === 0 ? data[0].precio : data[0].preciorebajado //Operador ternario
                let precioAnterior = data[0].preciorebajado === 0 ? "" : "<span class='precio-anterior'>S/ " 
                                        + data[0].precio.toFixed(2) + "</span>";
                document.getElementById("producto-precio").innerHTML = "S/ " 
                                        + precioVenta.toFixed(2) + precioAnterior                        
                document.getElementById("producto-stock").innerText = data[0].unidadesenexistencia
                document.getElementById("producto-detalle").innerText = data[0].detalle
                document.getElementById("producto-categoria").innerText = data[0].categoria
            })
    }
}
tienda()