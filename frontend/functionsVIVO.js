/*var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    scrollParent: true,
    waveColor: 'green',
    progressColor: 'purple',
    backgroundColor: 'black',
    normalize: true
    });

    var urlPlay = first;

    wavesurfer.load(urlPlay);
    console.log(urlPlay);

    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });*/


/****REPRODUCTOR VIVO***/
function LIVE(){
    var i = 0;
    var audioLIVE = document.getElementById('audioLIVE');
    var playlistLIVE = document.getElementById('playlistLIVE');
    var tracksLIVE = playlistLIVE.getElementsByTagName('a');
  
   
  
    /*reproduce automaticamente la primera canción de la lista
    firstSongLIVE = document.getElementsByTagName('a')[0];
    firstLIVE = firstSongLIVE.getAttribute('href');
    firstActiveLIVE = firstSongLIVE.parentElement;
    firstActiveLIVE.classList.add("active");
    audioLIVE.src = firstLIVE;
    */
  
    
    
  
    audioLIVE.volume = 0.10;
    audioLIVE.play();
   
  
    //Agregamos los eventos a los links que nos permitirán cambiar de canción
    for(var trackLIVE in tracksLIVE) {
      var linkLIVE = tracksLIVE[trackLIVE];
      if(typeof linkLIVE === "function" || typeof linkLIVE === "number") continue;
      linkLIVE.addEventListener('click', function(e) {
        e.preventDefault();
        var songLIVE = this.getAttribute('href');
       runLIVE(songLIVE, audioLIVE, this);
      });
    }
  
    // pasa a la siguiente canción el terminar
    audioLIVE.addEventListener("ended", function siguienteLIVE() {
      if(audioLIVE.ended === true){
        i++;
        var nextSongLIVE = tracksLIVE[i];
        console.log(nextSongLIVE);
        var songLIVE = nextSongLIVE.getAttribute('href');
        runLIVE(songLIVE, audioLIVE, nextSongLIVE);
      }
    });
  
  
  
    //Funcionalidad de los botones
    //play-pause
    var playbtnLIVE = document.getElementById("playPausebtnLIVE");
  
    playbtnLIVE.addEventListener("click", function playPauseLIVE() {
      if (audioLIVE.paused) {
        audioLIVE.play();
        playbtnLIVE.style.background = "url(../asset/icons/pause.png)";
        
      } else {
        audioLIVE.pause();
        playbtnLIVE.style.background = "url(../asset/icons/play.png)";
        
      }
    });
  
    //stop
    var stopbtnLIVE = document.getElementById("stopbtnLIVE");
  
    stopbtnLIVE.addEventListener("click", function stopLIVE() {
      audioLIVE.load();
      playbtnLIVE.style.background = "url(../asset/icons/play.png)";
      
    });
  
  
  
    //prev
    document.getElementById("prevbtnLIVE").onclick = function () {
      i--;
      var prevLIVE = tracksLIVE[i];
      console.log(prevLIVE);
      var songLIVE = prevLIVE.getAttribute('href');
       runLIVE(songLIVE, audioLIVE, prevLIVE);
    };
  
    //next
    document.getElementById("nextbtnLIVE").onclick = function () {
        i++;
        var nextLIVE = tracksLIVE[i];
        console.log(nextLIVE);
        var songLIVE = nextLIVE.getAttribute('href');
        runLIVE(songLIVE, audioLIVE, nextLIVE);
    };
  
  
    
  
  
  }
  
  // FUNCION PARA REPRODUCIR EL AUDIO
  function runLIVE(songLIVE, audioLIVE, linkLIVE){
        var parentLIVE = linkLIVE.parentElement;
        //quitar el active de todos los elementos de la lista
        var itemsLIVE = parentLIVE.parentElement.getElementsByTagName('li');
        for(var itemLIVE in itemsLIVE) {
          if(itemsLIVE[itemLIVE].classList)
            itemsLIVE[itemLIVE].classList.remove("active");
        }
        
        //agregar active a este elemento
        parentLIVE.classList.add("active");
        
        //tocar la cancion
        audioLIVE.src = songLIVE;
        audioLIVE.load();
        audioLIVE.play();
  }
  
  //esta funciòn es para detectar el id del elemento donde se hizo click, la dejo para más adelante
  /*
            function zoom(ele) {
                var id = ele.id;
                //id.classList.add("active");
                //var d = document.getElementById("div1");
                id.className += "active";
  
  
  /***REPRODUCTOR LIVE***/
  // HAY QUE CREAR ESTA FUNCIÓN
  
  
  
  ///****ENVIAR A LA LISTA VIVO****/
  
  function addVIVO(ele) {
    //detecta el id del elemento clickeado
    var id = ele.id;
    var elm = document.getElementsByClassName(id);
    var cancion = elm[0];
    var url = cancion.getAttribute('href');
    var name = cancion.getAttribute('name');
    console.log(url);
    console.log(name);
    addElement(url, name);
  }
  
  function removeVIVO(elID){
    //detecta el id del elemento clickeado
    var idSong = elID.id;
    var seVaAEliminar = document.getElementsByClassName(idSong);
    var cancion = seVaAEliminar[0];
    console.log(cancion);
    cancion.remove(cancion);
  }
  
  function addElement (url, name) { 
        // añade a la lista VIVO
  
        // y añade contenido 
        var listVIVO = document.getElementById('playlistLIVE');
        var lista = document.createElement('li');
            lista.setAttribute('class',name);
            
  
        listVIVO.appendChild(lista);
        
        var newSong = document.createElement("a");
            newSong.setAttribute('href', url); 
  
        var newContent = document.createTextNode(name); 
            newSong.appendChild(newContent); //añade texto al div creado. 
  
        var newButton = document.createElement('button');
        
            newButton.setAttribute('onclick','removeVIVO(this)');
            newButton.setAttribute('value','X');
            newButton.setAttribute('id',name);
  
            var newContentButton = document.createTextNode('Eliminar');
            newButton.appendChild(newContentButton); //añade texto al botón creado.
  
        
        lista.appendChild(newSong);
        lista.appendChild(newButton);
  
              
  
    }
  
  
  
  