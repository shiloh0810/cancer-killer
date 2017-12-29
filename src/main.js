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
    Game.print('dead: ' + deadCells, 30, 30, 'white', 30);
    Game.print('bad: ' + badCells, 30, 60, 'white', 30);
});

forever(function () {
    if (health <= 0) {
        gameOver();
    };
    if (badCells/cells.length > 0.7) {
        gameOver();
    }
    if (deadCells/cells.length > 0.8) {
        gameOver();
    }
});

function gameOver () {
    Game.stop();
    alert("Game over");
}