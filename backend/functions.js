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



//esta funciòn es para detectar el id del elemento donde se hizo click, la dejo para más adelante
/*
          function zoom(ele) {
              var id = ele.id;
              //id.classList.add("active");
              //var d = document.getElementById("div1");
              id.className += "active";

              console.log('area element id = ' + id);
          }

*/