<?php
$destino= "vperezbernachea@gmail.com";
$Nombre = $_POST["Nombre"];
$Correo = $_POST["Correo"];
$Celular = $_POST["Celular"];
$Comentario = $_POST["omentario"];
$contenido = "Nombre: " . $Nombre . "\nCorreo: " . $Correo . "\nCelular: " . $Celular . "\nComentario: ". $Comentario
mail($destino, "opcion",$contenido); 


?>