var audio = Game.sound.play("assets/Allemande.mp3");
audio.loop = true;


forever(function () {
    var percent = health / 10;
    $("#health").width(percent + '%');
});

forever(function () {
    badCells = 0;
    deadCells = 0;
    cells.forEach(function (c) {
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
    
    Game.sound.stop("assets/Righteous.mp3");
    audio = Game.sound.play("assets/Allemande.mp3");
    audio.loop = true;
    alert('Game Over!')


}

forever(function () {
    $("#restart").click(function () {
        location.reload();
    });
});

function showMsg(key) {
    var t = texts[key];
    $("#knowledge").modal();
    $("#knowledge-title").text(t.title);
    $("#knowledge-description").text(t.description);
}

$('.js-qa').click(function () {
    var ele = $(this).find('p')[1];
    if ($(ele).css('display') == 'none') {
        $(ele).show();
    } else {
        $(ele).hide();
    }

})