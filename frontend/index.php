<?php 
    include_once ('./services/connect_db.php');
    include_once ('./functions.php');
    $theme = array();
    $theme = traerMusica($connect);

    $cortina = array();
    $cortina = traerMusica($connect);

    $artistica = array();
    $artistica = traerMusica($connect);

    
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src='./functionsPREV.js'></script>

    <title>WaveLive</title>
</head>

<body>

    <div class="header">
        
            <h1>WaveLive</h1>
        
        <div class="buscador">
            <button type="button" class="btn btn-outline-success">Agregar</button> 
            <input type="text" placeholder="Buscar una cancion">
        </div>
    </div>
        
    <div class="PREVIO">

         <div>           
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
                            <button id='<?php echo $id ?>' class='button-vivo' onclick='addVIVO(this)'>VIVO</button>
                            <a href="../asset/music/<?php echo $url?>">
                                <?php echo $name.' - '.$author.' - '.$genere?>
                            </a>
                            
                        </li>
                        <br>
                
                        
                <?php
                }
                ?>
                <!--Botones de Reproduccion-->
                <div>
                    <button type="button" id="playPausebtn"></button>
                    <button type="button" id="stopbtn"></button>
                    <button type="button" id="prevbtn"></button>
                    <button type="button" id="nextbtn"></button>
                </div> 
            </ul>

            <audio id="audio" preload="metadata" tabindex="0">
                <source src="">
            </audio>  
            
            <div id="div-content-previos2">
                <div class="CORTINA">
                        
                    <ul id="playlist">
                        <?php
                        for ($i=0; $i < mysqli_num_rows($cortina); $i++) {                  
                                $data = mysqli_fetch_assoc($cortina);
            
                                //Recuperar dotos de la db
                                $id = trim($data['id']);
                                $name = trim($data['name']);
                                $author = trim($data['author']);
                                $genere = trim($data['genere']);
                                $url = trim($data['url']);
                        ?>
                            
            
                                <li class='<?php echo $id ?>' style='display:inline-flex' href="../asset/music/<?php echo $url?>" name="<?php echo $name.' - '.$author.' - '.$genere?>">
                                    <button id='<?php echo $id ?>' class='button-vivo' onclick='addVIVO(this)'>VIVO</button>
                                    <a href="../asset/music/<?php echo $url?>">
                                        <?php echo $name.' - '.$author.' - '.$genere?>
                                    </a>
                                    
                                </li>
                        
                                
                        <?php
                        }
                        ?>
                        <!--Botones de Reproduccion-->
                        <div>
                            <button type="button" id="playPausebtn"></button>
                            <button type="button" id="stopbtn"></button>
                            <button type="button" id="prevbtn"></button>
                            <button type="button" id="nextbtn"></button>
                        </div> 
                    </ul>
                        <audio id="audio" preload="metadata" tabindex="0">
                            <source src="">
                        </audio-->  
            </div>
            <div class="ARTISTICA">
                
                <ul id="playlist">
                    <?php
                    for ($i=0; $i < mysqli_num_rows($artistica); $i++) {                  
                            $data = mysqli_fetch_assoc($artistica);

                            //Recuperar dotos de la db
                            $id = trim($data['id']);
                            $name = trim($data['name']);
                            $author = trim($data['author']);
                            $genere = trim($data['genere']);
                            $url = trim($data['url']);
                    ?>
                        

                            <li class='<?php echo $id ?>' style='display:inline-flex' href="../asset/music/<?php echo $url?>" name="<?php echo $name.' - '.$author.' - '.$genere?>">
                                <button id='<?php echo $id ?>' class='button-vivo' onclick='addVIVO(this)'>VIVO</button>
                                <a href="../asset/music/<?php echo $url?>">
                                    <?php echo $name.' - '.$author.' - '.$genere?>
                                </a>
                            </li>
                    
                    
                    <?php
                    }
                    ?>
                    <!--Botones de Reproduccion-->
                    <div>
                        <button type="button" id="playPausebtn"></button>
                        <button type="button" id="stopbtn"></button>
                        <button type="button" id="prevbtn"></button>
                        <button type="button" id="nextbtn"></button>
                    </div> 
                </ul>
                    <audio id="audio" preload="metadata" tabindex="0">
                        <source src="">
                    </audio-->  
            </div>
            
        </div>
        
        <input  id="volumePREVIO" class="range horizontal-highest-first" type="range" min="5" max="10" step="0.01">

        <div class="DIV-MICROPHONE">
            <h3>Hablar</h3>
            <button type="button" id="microphone"></button>
            <input  id="volume" class="range vertical-heighest-first" type="range" min="5" max="10" step="0.01">
        </div>

    </div>
</div>

    <div class="VIVO">
        <!--REPRODUCTOR VIVO-->
        <div id='container_playlistLIVE'>
            <h3 id="vivo-text">VIVO</h3>
            <ul id="playlistLIVE"></ul>
        </div>
    </div>

</div>
</body>
</html>

<script>
    PREV();
</script>