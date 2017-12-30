$('i.fa.fa-search-plus').click(function () {
    zoom -= 10;
    scaling();
});

$('i.fa.fa-search-minus').click(function () {
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