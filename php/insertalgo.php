<?php

    $nombres = $_POST["nombres"];
    $peliculas = $_POST["peliculas"];
    include "config.php";
    $sql = "INSERT INTO directores(nombres, peliculas)
            VALUES ('$nombres','$peliculas')";

$rs = $cn->prepare($sql); //Prepara la instruccion sql
$rs->execute(); //Ejecuta una accion preparada
echo $cn->lastInsertId();
//El arreglo lo devuelve en un formato JSON

?>