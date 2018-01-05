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
        zoom: 100 / zoom
    });
}