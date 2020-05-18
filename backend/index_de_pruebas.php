<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="main.js"></script>
    <script src="https://unpkg.com/wavesurfer.js"></script>
    <title>Gestor Musical</title>
</head>
<body>

    <div id='container'>
        
        <div id='div_live'>
            <div id='container_playlist'>
                <ul id="playlist">

                    <li class="active">
                    <a href="https://s3-us-west-2.amazonaws.com/allmetalmixtapes/Saxon%20-%201984%20-%20Crusader/01%20-%20Crusader%20Prelude.mp3">
                        Saxon - Crusader Prelude
                    </a>
                    </li>
                    <li>
                        <a href="https://s3-us-west-2.amazonaws.com/allmetalmixtapes/Saxon%20-%201984%20-%20Crusader/03%20-%20Little%20Bit%20Of%20What%20You%20Fancy.mp3">
                            Saxon - Little Bit Of What You Fancy
                        </a>
                    </li>
                    <li>
                        <a href="https://s3-us-west-2.amazonaws.com/allmetalmixtapes/Saxon%20-%201984%20-%20Crusader/04%20-%20Sailing%20To%20America.mp3">
                            Saxon - Sailing To America
                        </a>
                    </li>
                    <li>
                        <a href="https://s3-us-west-2.amazonaws.com/allmetalmixtapes/Saxon%20-%201984%20-%20Crusader/05%20-%20Set%20Me%20Free.mp3">
                            Saxon - Set Me Free
                        </a>
                    </li>
                    <li>
                        <a href="https://s3-us-west-2.amazonaws.com/allmetalmixtapes/Saxon%20-%201984%20-%20Crusader/06%20-%20Just%20Let%20Me%20Rock.mp3">
                            Saxon - Just Let Me Rock
                        </a>
                    </li>

                    <div id="waveform"></div>
                    <div id='play_buttons'>
                        <button onclick=""><img src="./asset/icons/preview_button_active.png" alt="preview"></button>
                        <button onclick="wavesurfer.playPause(), wavesurfer.getDuration();"><img src="./asset/icons/play_button_active.png" alt="play"></button>
                        <button onclick="wavesurfer.pause();"><img src="./asset/icons/pause_button_active.png" alt="play"></button>
                        <button onclick="wavesurfer.stop();"><img src="./asset/icons/stop_button_active.png" alt="stop"></button>
                        <button onclick=""><img src="./asset/icons/next_button_active.png" alt="next"></button>
                        <br>
                        <input id="volume" type="range" min="0" max="1" value="1" step="0.1">
                    </div>
                </ul>
                <div id='live_microphone'>
                    <button id="microphone">
                        <img src="./asset/icons/microphone.png" id="microphone_icon">
                    </button>
                </div>
            </div>
            <!--audio id="audio" preload="auto" tabindex="0" controls="" >
                <source src="https://s3-us-west-2.amazonaws.com/allmetalmixtapes/Saxon%20-%201984%20-%20Crusader/01%20-%20Crusader%20Prelude.mp3">
            </audio-->

        </div>

        <script>
init();
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'rgb(12, 214, 39)',
    progressColor: 'purple',
    //permitir el scroll
    //scrollParent: true,
    //centra el scroll
    autoCenter: true,
    //normalizar audio
    normalize: true,
    //altura de la onda
    height: 70,
    partialRender: true,
});

wavesurfer.on('ready', function () {
    wavesurfer.play();
});

wavesurfer.load('./asset/music/09 Te Amo Más Que A Mi Misma Vida.mp3');

</script>