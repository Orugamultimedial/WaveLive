<<<<<<< HEAD
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
=======
// Inicia la klibrería Wavesurfer.js
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
    //agregamos evento para reproducir la siguiente canción en la lista
    //si la canción es la ultima reproducir la primera otra vez
    audio.addEventListener('ended',function(e) {
        for(var track in tracks) {
          var link = tracks[track];
          var nextTrack = parseInt(track) + 1;
          if(typeof link === "function" || typeof link === "number") continue;
          if(!this.src) this.src = tracks[0];
          if(track == (tracks.length - 1)) nextTrack = 0;
                                	console.log(nextTrack);
        	if(link.getAttribute('href') === this.src) {
          	var nextLink = tracks[nextTrack];
          	run(nextLink.getAttribute('href'), audio, nextLink);
            break;
          }
        }
    });
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

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#D2EDD4',
    progressColor: '#46B54D'
  })
  
  wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
  
  
  // Equalizer
  wavesurfer.on('ready', function () {
    var EQ = [
      {
        f: 32,
        type: 'lowshelf'
      }, {
        f: 64,
        type: 'peaking'
      }, {
        f: 125,
        type: 'peaking'
      }, {
        f: 250,
        type: 'peaking'
      }, {
        f: 500,
        type: 'peaking'
      }, {
        f: 1000,
        type: 'peaking'
      }, {
        f: 2000,
        type: 'peaking'
      }, {
        f: 4000,
        type: 'peaking'
      }, {
        f: 8000,
        type: 'peaking'
      }, {
        f: 16000,
        type: 'highshelf'
      }
    ];
  
    // Create filters
    var filters = EQ.map(function (band) {
      var filter = wavesurfer.backend.ac.createBiquadFilter();
      filter.type = band.type;
      filter.gain.value = 0;
      filter.Q.value = 1;
      filter.frequency.value = band.f;
      return filter;
    });
  
    // Connect filters to wavesurfer
    wavesurfer.backend.setFilters(filters);
  
    wavesurfer.setVolume(0.4);
    document.querySelector('#volume').value = wavesurfer.backend.getVolume();
    
    // Bind filters to vertical range sliders
    var container = document.querySelector('#equalizer');
    filters.forEach(function (filter) {
      var input = document.createElement('input');
      wavesurfer.util.extend(input, {
        type: 'range',
        min: -40,
        max: 40,
        value: 0,
        title: filter.frequency.value
      });
      input.style.display = 'inline-block';
      input.setAttribute('orient', 'vertical');
      wavesurfer.drawer.style(input, {
        'webkitAppearance': 'slider-vertical',
        width: '50px',
        height: '150px'
      });
      container.appendChild(input);
  
      var onChange = function (e) {
        filter.gain.value = ~~e.target.value;
      };
  
      input.addEventListener('input', onChange);
      input.addEventListener('change', onChange);
    });
  
    
      var volumeInput = document.querySelector('#volume');
      var onChangeVolume = function (e) {
        wavesurfer.setVolume(e.target.value);
        console.log(e.target.value);
      };
    volumeInput.addEventListener('input', onChangeVolume);
    volumeInput.addEventListener('change', onChangeVolume);
  
    
    // For debugging
    wavesurfer.filters = filters;
  });
  
>>>>>>> develop
