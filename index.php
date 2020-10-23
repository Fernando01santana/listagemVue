<?php
header('Access-Control-Allow-Origin: *');
$hostname = "localhost";
$usuario = "root";
$senha= "";
$bancodedados = "entrevista";
//iniciando variavel
$array_json = "";
//conectando com o banco com o metodo mysqli
 $mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);
 if ($mysqli->connect_error) {
     echo "Falha ao conectar: (" . $mysqli->connect_error . ") " . $mysqli->connect_error;
 }else{
    $num[] = 0;
    //populando array
    for ($i=0; $i < 101; $i++) { 
        $num[$i] = $i;
        //inserindo no banco
        $insert = mysqli_query($mysqli,"INSERT INTO teste(numero)VALUES('$num[$i]')");
    }
    //transformando em json
   $array_json = json_encode($num);
   echo $array_json;
 }
 
?>