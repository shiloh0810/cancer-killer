var typed5 = new Typed('#story-text', {
    strings: ['', 'Press Enter key to start.'],
});

function showStory_1(){
    $("#story").css("background-image", "url(./assets/hospital.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'Emergency! Emergency!'],
    });
}

function showStory_2(){
    $("#avatar").css("background-image", "url(./assets/doctor.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'What happened?'],
    });
}

function showStory_3(){
    $("#avatar").css("background-image", "url(./assets/face.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'We have a cancer patient waiting for you, Dr. Liu.'],
    });
}

function showStory_4(){
    var typed5 = new Typed('#story-text', {
        strings: ['', '(panting)'],
    });
}

function showStory_5(){
    $("#avatar").css("background-image", "url(./assets/doctor.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'Umm...Okay. Push him into the operation room. Quick.'],
    });
}

function showStory_6(){
    $("#avatar").css("background-image", "url(./assets/white.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'Dr. Liu went in the operation room and pondered for awhile.'],
    });
}

function showStory_7(){
    $("#avatar").css("background-image", "url(./assets/doctor.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'How should I solve this case?'],
    });
}

function showStory_8(){
    $("#avatar").css("background-image", "url(./assets/doctor.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'Which therapies should I use?'],
    });
}

function showStory_9(){
    $("#avatar").css("background-image", "url(./assets/white.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'As a player of the Cancer Killer game,'],
    });
}

function showStory_10(){
    $("#avatar").css("background-image", "url(./assets/doctor.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'YOU HAVE TO HELP ME DETERMINE THE BEST METHODS...'],
    });
}

var active=false;

function showStory_11(){
    $("#story").hide();

    var active=true;
    
    introJs().start().oncomplete(startGame).onexit(startGame);
    function startGame() {
        Game.start();
        display();
        Game.sound.stop("assets/Allemande.mp3");
        audio = Game.sound.play("assets/Righteous.mp3");
        audio.loop= true;
    }
}

function showStory_12(){
    active= false;
    $("#story").show();
    $("#avatar").css("background-image", "url(./assets/doctor.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'Your patient has entered the last stage of cancer.'],
    });
}

function showStory_13(){
    $("#avatar").css("background-image", "url(./assets/doctor.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'He has gone through palliative care.'],
    });
}

function showStory_14(){
    $("#avatar").css("background-image", "url(./assets/doctor.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'You did a good job and I appreciate your help.'],
    });
}

function showStory_15(){
    $("#avatar").css("background-image", "url(./assets/doctor.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'Thank You!'],
    });
}

function showStory_16(){
    $("#story").hide();
}

$( "body" ).keyup(function( event ) {
    if ( event.which == 13 ) {
        if (active) return;
     nextStory();
    }
  });

var current = 0;

  function nextStory(){
    if(current==0) showStory_1();
    if(current==1) showStory_2();
    if(current==2) showStory_3();
    if(current==3) showStory_4();
    if(current==4) showStory_5();
    if(current==5) showStory_6();
    if(current==6) showStory_7();
    if(current==7) showStory_8();
    if(current==8) showStory_9();
    if(current==9) showStory_10();
    if(current==10) showStory_11();
    if(current==12) showStory_13();
    if(current==13) showStory_14();
    if(current==14) showStory_15();
    if(current==15) showStory_16();
    current++;
  }