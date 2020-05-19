<?php include_once ('./services/connect_db.php');
      include_once ('./functions.php');
$theme = array();
$theme = traerMusica($connect);
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="functions.js"></script>


    <title>funciones</title>
</head>
<body>
    <!--REPRODUCTOR PREVIO-->
    <div id='container_playlist'>
        <h3>Lista PREVIO</h3>
        <ul id="playlist">
            <?php
            for ($i=0; $i < mysqli_num_rows($theme); $i++) {                  
                    $data = mysqli_fetch_assoc($theme);

                    //Recuperar dotos de la db
                    $id = trim($data['id']);
                    $name = trim($data['name']);
                    $author = trim($data['author']);
                    $genere = trim($data['genere']);
                    $url = trim($data['url']);
            ?>
                

                    <li class='<?php echo $id ?>' style='display:inline-flex' href="../asset/music/<?php echo $url?>" name="<?php echo $name.' - '.$author.' - '.$genere?>">
                        <a href="../asset/music/<?php echo $url?>">
                            <?php echo $name.' - '.$author.' - '.$genere?>
                        </a>
                        <button id='<?php echo $id ?>' onclick='addVIVO(this)'>VIVO</button>
                    </li>
            
                    
            <?php
            }
            ?>
        </ul>
            <audio id="audio" preload="auto" tabindex="0" controls >
                <source src="../asset/music/canon_in_d-pachelbel.mp3">
            </audio-->
    </div>


    <!--REPRODUCTOR VIVO-->
    <div id='container_playlistvivo'>
        <h3>Lista VIVO</h3>
        <ul id="playlistVIVO"></ul>
    </div>


</body>


<script>init();</script>