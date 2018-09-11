<?php
$fecha=date("d-m-Y");
$hora=date("H:i:s");
$destino="medinalautaro354@gmail.com";
$asunto="Oferta laboral";
$desde= 'From: ' .$_POST[correo];
$comentario="
\n
Nombre: $_POST[nombre]\n
Email: $_POST[correo]\n
Consulta: $_POST[mensaje]\n
Enviado: $fecha a las $hora\n

";

mail($destino, $asunto, $comentario, $desde)
?>