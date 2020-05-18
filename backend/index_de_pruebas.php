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


    <title>funciones</title>
</head>
<body>
    <div id='container_playlist'>
        <ul id="playlist">
            <?php
            for ($i=0; $i < mysqli_num_rows($theme); $i++) {                  
                    $data = mysqli_fetch_assoc($theme);

                    //verify
                    $id = trim($data['id']);
                    $name = trim($data['name']);
                    $author = trim($data['author']);
                    $genere = trim($data['genere']);
                    $url = trim($data['url']);
            ?>
                

                    <li id='<?php echo $id ?>' class="">
                        <a href="../asset/music/<?php echo $url?>">
                            <?php echo $name.' - '.$author.' - '.$genere?>
                        </a>
                    </li>
            
                    
            <?php
            }
            ?>
        </ul>
            <audio id="audio" preload="auto" tabindex="0" controls >
                <source src="../asset/music/canon_in_d-pachelbel.mp3">
            </audio-->
    </div>
</body>
  

<script src="functions.js"></script>
<script>init(); </script>