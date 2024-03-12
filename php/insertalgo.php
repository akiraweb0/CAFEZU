<?php
include "config.php";

// Verificar si las variables POST están definidas
if (isset($_POST["nombres"]) && isset($_POST["tipocafe"])) {
    // Asignar los valores de las variables POST a nuevas variables
    $nombres = $_POST["nombres"];
    $tipocafe = $_POST["tipocafe"];

    // Incluir el archivo config.php si existe
    if (file_exists("config.php")) {
        include "config.php";
        
        // Verificar si la conexión a la base de datos está establecida
        if ($cn) {
            $sql = "INSERT INTO agricultores(nombreAgricultor, tipoCafé)
                    VALUES ('$nombres', '$tipocafe')";
            
            // Preparar y ejecutar la consulta
            $rs = $cn->prepare($sql);
            $rs->execute();
            
            // Imprimir el ID del último registro insertado
            echo $cn->lastInsertId();
        } else {
            echo "Error: No se pudo conectar a la base de datos.";
        }
    } else {
        echo "Error: No se pudo encontrar el archivo config.php.";
    }
} else {
    echo "Error: No se proporcionaron nombres o tipo de café.";
}
?>