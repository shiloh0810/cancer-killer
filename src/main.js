var audio1 = new Audio("./assets/Allemande.mp3");
var audio2 = new Audio("./assets/hi.mp3");

audio1.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

audio2.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

audio1.play();

forever(function () {
    var percent = health / 10;
    $("#health").width(percent + '%');
});

forever(function () {
    badCells = 0;
    deadCells = 0;
    cells.forEach(function (c) {
        //both when cell is growing or when it's already red => bad
        if (c.status == 1 || c.status == 2) badCells++;
        if (c.status == 3) deadCells++;
    });
    /*setTimeout(function(){
        if(badCells==1){
            health += 100;
            level++;
        }
    }, 10000);*/

    Game.print('dead: ' + deadCells, 30, 30, 'white', 30);
    Game.print('bad: ' + badCells, 30, 60, 'white', 30);

});

forever(function () {
    if (health <= 0) {
        gameOver();
    };
    if (badCells / cells.length > 0.7) {
        gameOver();
    }
    if (deadCells / cells.length > 0.8) {
        gameOver();
    }
});

function gameOver() {
    Game.stop();
    //$("#over").modal();
    setTimeout(function(){showStory_12()}, 3000)
    audio1.pause();
    audio2.play();
    alert('Game Over!')


}

//different knowledge appear with different towers
function showMsg(key) {
    var t = texts[key];
    $("#knowledge").modal();
    $("#knowledge-title").text(t.title);
    $("#knowledge-description").text(t.description);
    $("#instruction").text(t.instruction);
}

$('.js-qa').click(function () {
    var ele = $(this).find('p')[1];
    if ($(ele).css('display') == 'none') {
        $(ele).show();
    } else {
        $(ele).hide();
    }
});

$('#knowledge').on('hidden.bs.modal', function (e) {
    myFunction();
});

function myFunction() {
    //When press the close button for knowledge modal, (that means when the modal is closed), game would resume. (Game stops when player is reading knowledge.)
    Game.start();
}