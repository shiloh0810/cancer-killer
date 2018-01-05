// var typed5 = new Typed('#story-text', {
//     strings: ['', 'Emergency! Emergency!'],
// });

function showStory_0(){

}

function showStory_1(){
    $("#story").css("background-image", "url(./assets/hospital.png)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'Emergency! Emergency!'],
    });
}

function showStory_2(){
    $("#avatar").css("background-image", "url(./assets/doctor.svg)")
    var typed5 = new Typed('#story-text', {
        strings: ['', 'What happened?'],
    });
}

$( "body" ).keydown(function( event ) {
    if ( event.which == 13 ) {
     nextStory();
    }
  });

var current = 0;

  function nextStory(){
    if(current==0) showStory_1();
    if(current==1) showStory_2();
    current++;
  }