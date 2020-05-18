<?php
function traerMusica($conection_db){
    
    $sql = "SELECT * FROM music";
    $musics = mysqli_query($conection_db, $sql);

    $result = array();

    if($musics && mysqli_num_rows($musics) >= 1){
        $result = $musics;
    };
    return $result;
}
?>