<?php
//Traer música
function traerMusica($conection_db){
    
    $sql = "SELECT * FROM music";
    $musics = mysqli_query($conection_db, $sql);

    $result = array();

    if($musics && mysqli_num_rows($musics) >= 1){
        $result = $musics;
    };
    return $result;
}

//Traer cortinas
function traerCortinas($conection_db){
    
    $sql = "SELECT * FROM curtain";
    $musics = mysqli_query($conection_db, $sql);

    $result = array();

    if($musics && mysqli_num_rows($musics) >= 1){
        $result = $musics;
    };
    return $result;
}

//Traer Artísticas
function traerArtisticas($conection_db){
    
    $sql = "SELECT * FROM artistic";
    $musics = mysqli_query($conection_db, $sql);

    $result = array();

    if($musics && mysqli_num_rows($musics) >= 1){
        $result = $musics;
    };
    return $result;
}
?>