<?php

include "config.php";

    $sql = "SELECT * FROM productos";
    $rs = $cn->prepare($sql); //Prepara la instruccion sql
    $rs->execute(); //Ejecuta una accion preparada
    $rows = $rs->fetchAll(PDO::FETCH_ASSOC);
    //Los datos recuperados los vuelva en un arreglo
    echo json_encode($rows);
    //El arreglo lo devuelve en un formato JSON

?>