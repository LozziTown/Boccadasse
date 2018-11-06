$(document).ready(function() {
    
    /* For the STICKY navigation */
    $('#divul').waypoint(function(direction) {
        if (direction == "down") {
            $('.fixed-nav').addClass('sticky');
        } else {
            $('.fixed-nav').removeClass('sticky');
        }
        }, {
      offset: '0;' // questo offset serve a definire quanti px prima del waypoint (specificato sopra con la classe) deve azionarsi l'istruzione jquery (scritta su).
    });
    


     $('#div-clear').waypoint(function(direction) {
            if (direction == "down") {
                $('#div-a-galley').addClass('gallery');
            } else {
                $('#div-a-galley').removeClass('gallery');
            }
            }, {
          offset: '450px;' // questo offset serve a definire quanti px prima del waypoint (specificato sopra con la classe) deve azionarsi l'istruzione jquery (scritta su).
        });
    
    $('#sec-risto').waypoint(function(direction) {
            if (direction == "up") {
                $('#div-a-galley').addClass('gallery');
            } else {
                $('#div-a-galley').removeClass('gallery');
            }
            }, {
          offset: '300px;' // questo offset serve a definire quanti px prima del waypoint (specificato sopra con la classe) deve azionarsi l'istruzione jquery (scritta su).
        });

    
    $('.div-curiosità-storia').waypoint(function(direction) {
       $('.div-curiosità-storia').addClass('animated fadeIn');  /* Si aggiunge la classe (del foglio css scaricato dal sito animate.css)
                                                     relativa all'effetto che vogliamo */
    }, {
        offset:'50%'
    });
    
    $('.div-curiosità-storia-2').waypoint(function(direction) {
       $('.div-curiosità-storia-2').addClass('animated fadeIn');  /* Si aggiunge la classe (del foglio css scaricato dal sito animate.css)
                                                     relativa all'effetto che vogliamo */
    }, {
        offset:'50%'
    });
    
    
});




