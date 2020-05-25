
/****REPRODUCTOR PREVIO***/
function PREV(){
  var i = 0;
  var audio = document.getElementById('audio');
  var playlist = document.getElementById('playlist');
  var tracks = playlist.getElementsByTagName('a');

 

  //reproduce automaticamente la primera canción de la lista
  firstSong = document.getElementsByTagName('a')[0];
  first = firstSong.getAttribute('href');
  firstActive = firstSong.parentElement;
  firstActive.classList.add("active");
  audio.src = first;

  
  

  audio.volume = 0.10;
  audio.play();
 

  //Agregamos los eventos a los links que nos permitirán cambiar de canción
  for(var track in tracks) {
    var link = tracks[track];
    if(typeof link === "function" || typeof link === "number") continue;
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var song = this.getAttribute('href');
     run(song, audio, this);
    });
  }

  // pasa a la siguiente canción el terminar
  audio.addEventListener("ended", function siguiente() {
    if(audio.ended === true){
      i++;
      var nextSong = tracks[i];
      console.log(nextSong);
      var song = nextSong.getAttribute('href');
      run(song, audio, nextSong);
    }
  });



  //Funcionalidad de los botones
  //play-pause
  var playbtn = document.getElementById("playPausebtn");

  playbtn.addEventListener("click", function playPause() {
    if (audio.paused) {
      audio.play();
      playbtn.style.background = "url(../asset/icons/pause.png)";
      
    } else {
      audio.pause();
      playbtn.style.background = "url(../asset/icons/play.png)";
      
    }
  });

  //stop
  var stopbtn = document.getElementById("stopbtn");

  stopbtn.addEventListener("click", function stop() {
    audio.load();
    playbtn.style.background = "url(../asset/icons/play.png)";
    
  });



  //prev
  document.getElementById("prevbtn").onclick = function () {
    i--;
    var prev = tracks[i];
    console.log(prev);
    var song = prev.getAttribute('href');
     run(song, audio, prev);
  };

  //next
  document.getElementById("nextbtn").onclick = function () {
      i++;
      var next = tracks[i];
      console.log(next);
      var song = next.getAttribute('href');
      run(song, audio, next);
  };





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




}

// FUNCION PARA REPRODUCIR EL AUDIO
function run(song, audio, link){
      var parent = link.parentElement;
      //quitar el active de todos los elementos de la lista
      var items = parent.parentElement.getElementsByTagName('li');
      for(var item in items) {
        if(items[item].classList)
          items[item].classList.remove("active");
      }
      
      //agregar active a este elemento
      parent.classList.add("active");
      
      //tocar la cancion
      audio.src = song;
      audio.load();
      audio.play();
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




/****REPRODUCTOR CURTAIN***/
function CURTAIN(){
  var i = 0;
  var audioCURTAIN = document.getElementById('audioCURTAIN');
  var playlistCURTAIN = document.getElementById('playlistCURTAIN');
  var tracksCURTAIN = playlistCURTAIN.getElementsByTagName('a');
  

  audioCURTAIN.volume = 0.10;
  audioCURTAIN.play();
 

  //Agregamos los eventos a los links que nos permitirán cambiar de canción
  for(var trackCURTAIN in tracksCURTAIN) {
    var linkCURTAIN = tracksCURTAIN[trackCURTAIN];
    if(typeof linkCURTAIN === "function" || typeof linkCURTAIN === "number") continue;
    linkCURTAIN.addEventListener('click', function(e) {
      e.preventDefault();
      var songCURTAIN = this.getAttribute('href');
     runLIVE(songCURTAIN, audioCURTAIN, this);
    });
  }

  // pasa a la siguiente canción el terminar
  audioCURTAIN.addEventListener("ended", function siguienteCURTAIN() {
    if(audioCURTAIN.ended === true){
      i++;
      var nextSongCURTAIN = tracksCURTAIN[i];
      console.log(nextSongCURTAIN);
      var songCURTAIN = nextSongCURTAIN.getAttribute('href');
      runCURTAIN(songCURTAIN, audioCURTAIN, nextSongCURTAIN);
    }
  });



  //Funcionalidad de los botones curtain
  //play-pause
  var playbtnCURTAIN = document.getElementById("playPausebtnCURTAIN");

  playbtnCURTAIN.addEventListener("click", function playPauseCURTAIN() {
    if (audioCURTAIN.paused) {
      audioCURTAIN.play();
      playbtnCURTAIN.style.background = "url(../asset/icons/pause.png)";
      
    } else {
      audioCURTAIN.pause();
      playbtnCURTAIN.style.background = "url(../asset/icons/play.png)";
      
    }
  });

  //stop
  var stopbtnCURTAIN = document.getElementById("stopbtnCURTAIN");

  stopbtnCURTAIN.addEventListener("click", function stopCURTAIN() {
    audioCURTAIN.load();
    playbtnCURTAIN.style.background = "url(../asset/icons/play.png)";
    
  });



  //prev
  document.getElementById("prevbtnCURTAIN").onclick = function () {
    i--;
    var prevCURTAIN = tracksCURTAIN[i];
    console.log(prevCURTAIN);
    var songCURTAIN = prevCURTAIN.getAttribute('href');
     runCURTAIN(songCURTAIN, audioCURTAIN, prevCURTAIN);
  };

  //next
  document.getElementById("nextbtnCURTAIN").onclick = function () {
      i++;
      var nextCURTAIN = tracksCURTAIN[i];
      console.log(nextCURTAIN);
      var songCURTAIN = nextCURTAIN.getAttribute('href');
      runCURTAIN(songCURTAIN, audioCURTAIN, nextCURTAIN);
  };
}

// FUNCION PARA REPRODUCIR EL AUDIO
function runCURTAIN(songCURTAIN, audioCURTAIN, linkCURTAIN){
      var parentCURTAIN = linkCURTAIN.parentElement;
      //quitar el active de todos los elementos de la lista
      var itemsCURTAIN = parentCURTAIN.parentElement.getElementsByTagName('li');
      for(var itemCURTAIN in itemsCURTAIN) {
        if(itemsCURTAIN[itemCURTAIN].classList)
          itemsCURTAIN[itemCURTAIN].classList.remove("active");
      }
      
      //agregar active a este elemento
      parentCURTAIN.classList.add("active");
      
      //tocar la cancion
      audioCURTAIN.src = songCURTAIN;
      audioCURTAIN.load();
      audioCURTAIN.play();
}

