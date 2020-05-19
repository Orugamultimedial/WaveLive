
/****REPRODUCTOR PREVIO***/
function init(){
  var audio = document.getElementById('audio');
  var playlist = document.getElementById('playlist');
  var tracks = playlist.getElementsByTagName('a');
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
  // aca me falta agregar que pase a la siguiente canción el terminar
}


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
      var listVIVO = document.getElementById('playlistVIVO');
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

      lista.appendChild(newButton);

      lista.appendChild(newSong);      

  }
