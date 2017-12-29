var dragging = false;
var pos = {};

Game.when('mousedown', function () {
    dragging = true;
    pos.x = cursor.x;
    pos.y = cursor.y;
});
Game.when('mouseup', function () {
    dragging = false;
});

forever(function () {
    if (dragging) {
        var offsetX = cursor.x - pos.x;
        var offsetY = cursor.y - pos.y;
        pos.x = cursor.x;
        pos.y = cursor.y;
        cells.forEach(function (c) {
            c.move(offsetX, offsetY);
        });
        towers.forEach(function (c) {
            c.move(offsetX, offsetY);
        });
    }
});