$('#plus').click(function () {
    zoom -= 10;
    scaling();
});

$('#minus').click(function () {
    zoom += 10;
    scaling();
});

function scaling () {
    Game.set({
        width: width * (zoom / 100),
        height: height * (zoom / 100),
        //zoom multiplied by its reciprocal
        zoom: 100 / zoom
    });
}

window.addEventListener('resize', function (e) {
    var newWidth = $(window).width() - 180;
    var scale = newWidth/initWidth;

    if (scale < 1) {
        width = initWidth*scale;
        height = initHeight*scale;
        
        Game.set({zoom: scale});
        scaling();
    }
});