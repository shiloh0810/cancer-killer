var towers = [];

function buildTower() {
    var tower = Game.createSprite("assets/tower_1.png");
    tower.orginX = tower.x;
    tower.originY = tower.y;
    towers.push(tower);
}

Game.when("mousedown", function () {

});

// Game.when("mouseup", function () {

//     for (var i = 0; i < towers.length; i++) {
//         towers[i].orignX = towers[i].x;
//         towers[i].orignY = towers[i].y;
//     }
// });

buildTower();

// Game.forever(function () {

//     if (dragging) {
//         offsetX = cursor.x - pos.x;
//         offsetY = cursor.y - pos.y;


//         for (var i = 0; i < towers.length; i++) {
//             towers[i].x = towers[i].orignX + offsetX;
//             towers[i].y = towers[i].orignY + offsetY;
//         }
//     }
// });