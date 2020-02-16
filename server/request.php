<?php
    
    if (isset($_POST['subirArchivo'])) {
        $jsonData = json_decode($_POST['subirArchivo']);
        // var_dump($jsonData);
        // return;
        $archivo = $_FILES["archivo"];
        $resultado = move_uploaded_file($archivo["tmp_name"], $archivo["name"]);
        if ($resultado) {
            echo "Subido con éxito";
        } else {
            echo "Error al subir archivo";
        }
    }
    
?>