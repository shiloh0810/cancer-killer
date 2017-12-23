var Game = Engine('stage');
var W = 30;
var H = 30;

var cursor = Game.cursor;

var width = $(window).width();
var height = $(window).height();

//健康值 0~1000;
//if 健康值 <0 -> game over
// wouldn't exceed 1000

var health = 1000;

Game.set({
    width: width, // Default: 640px
    height: height, // Default: 480px
    debugMode: true // Default: false
});

//load the pic first cause it might take a lot of time afterwards
Game.preload([
    "./assets/blue.png",
], function () {
    Game.start();
});

//background color is light blue
Game.setBackdrop("#333");

//array for healthy cells at first
//Default: 900
var cells = [];
//Default: cursor not dragging
var dragging = false;

//array for cancer cells
var origin = [];

//making cells 双层回圈 -> 方格块
for (var y = 0; y < W; y++) {
    for (var x = 0; x < H; x++) {

        //create cells
        //a cell has two costumes, blue and red
        var cell = Game.createSprite(["./assets/blue.png", "./assets/red.png"]);
        cell.status = 0;
        //Default: blue costume
        cell.costumeId = 0;
        cell.scale = 0.6;
        // 初始化的位置
        //each separated by 120x and 103.6y
        cell.x = 120 * x;
        cell.y = 103.6 * y;

        //cell.x and cell.y are the same as cell.originX and cell.originY
        //origin is just a tmp for the draggin part later
        cell.originX = 120 * x;
        cell.originY = 103.6 * y;

        //makes the cells in triangle -> move the x
        if (y % 2 == 0) {
            cell.x += 60;
            cell.originX += 60;

        }

        //push the new created cell into array
        cells.push(cell);

    }
}

//o is a random cell that would become sick
//Math.floor(Math.random()*W*H) -> 0-899 random integer
var o = cells[Math.floor(Math.random() * W * H)];
origin.push(o);
o.status = 1;

//pos is used as a tmp to calculate movement while dragging during forever
var pos = {};
Game.when("mousedown", function () {
    dragging = true;
    //pos saves cursor's origin point
    pos.x = cursor.x;
    pos.y = cursor.y;
});

//--------------------------------------------------------------------------> 以下所有towers都和cells做一样的事
//towers的初始化在tower.js
Game.when("mouseup", function () {
    dragging = false;
    for (var i = 0; i < cells.length; i++) {
        //saves current x,y as origin, so the next time it moves it would be correct
        cells[i].originX = cells[i].x;
        cells[i].originY = cells[i].y;
    }

    for (var i = 0; i < towers.length; i++) {
        towers[i].originX = towers[i].x;
        towers[i].originY = towers[i].y;
    }
    //------->以下是让users不能drag outside of a specific range; exceeds -> adjusts
    //------->towers also have to adjust 
    //the first cell's x cannot exceed 800
    var tmp = cells[0].x;
    if (tmp > 800) {
        for (var x = 0; x < cells.length; x++) {
            cells[x].x -= tmp - 800;
            cells[x].originX -= tmp - 800;
        }
        for (var i = 0; i < towers.length; i++) {
            towers[i].x -= tmp - 800;
            towers[i].originX -= tmp - 800;
        }
    }

    var tmp = cells[0].y;
    //the first cell's y cannot exceed 800 (在800上面)
    if (tmp > 800) {
        for (var x = 0; x < cells.length; x++) {
            cells[x].y -= tmp - 800;
            cells[x].originY -= tmp - 800;
        }
        for (var i = 0; i < towers.length; i++) {
            towers[i].y -= tmp - 800;
            towers[i].originY -= tmp - 800;
        }
    }

    var tmp = cells[899].x;
    //the last cell's 
    if (tmp < width - 100) {
        for (var x = 0; x < cells.length; x++) {
            cells[x].x += width - 100 - tmp;
            cells[x].originX += width - 100 - tmp;
        }
        for (var i = 0; i < towers.length; i++) {
            towers[i].x += width - 100 - tmp;
            towers[i].originX += width - 100 - tmp;
        }
    }

    var tmp = cells[899].y;
    if (tmp < height - 100) {
        for (var x = 0; x < cells.length; x++) {
            cells[x].y += height - 100 - tmp;
            cells[x].originY += height - 100 - tmp;
        }
        for (var i = 0; i < towers.length; i++) {
            towers[i].y += height - 100 - tmp;
            towers[i].originY += height - 100 - tmp;
        }
    }
});


Game.forever(function () {

    if (dragging) {
        offsetX = cursor.x - pos.x;
        offsetY = cursor.y - pos.y;


        for (var i = 0; i < cells.length; i++) {
            cells[i].x = cells[i].originX + offsetX;
            cells[i].y = cells[i].originY + offsetY;
        }

        for (var i = 0; i < towers.length; i++) {
            towers[i].x = towers[i].originX + offsetX;
            towers[i].y = towers[i].originY + offsetY;
        }
    }



    for (var i = 0; i < cells.length; i++) {
        if (cell.status == 2) {

        }
    }
    for (var i = 0; i < origin.length; i++) {
        if (origin[i].scale < 2 && origin[i].scale > 0.01) {
            origin[i].scale += 0.005;
        } else {
            origin[i].costumeId = 1;
            var index = cells.indexOf(origin[i]);
            var c = undefined;

            if (origin.indexOf(cells[index + 1]) == -1 && Math.random() < 0.001) {
                c = cells[index + 1];
            }
            if (origin.indexOf(cells[index - 1]) == -1 && Math.random() < 0.001) {
                c = cells[index - 1];
            }
            if (origin.indexOf(cells[index + W]) == -1 && Math.random() < 0.001) {
                c = cells[index + W];
            }
            if (origin.indexOf(cells[index - W]) == -1 && Math.random() < 0.001) {
                c = cells[index - W];
            }
            if (origin.indexOf(cells[index + W + 1]) == -1 && Math.random() < 0.001) {
                c = cells[index + W + 1];
            }
            if (origin.indexOf(cells[index - W + 1]) == -1 && Math.random() < 0.001) {
                c = cells[index - W + 1];
            }

            if (c != undefined) {
                c.status = 1;
                origin.push(c);
            }
        }
    }
});

Game.forever(function () {
    var percent = health / 10;
    $("#health").width(percent + '%');
    if (health <= 0) {
        Game.stop();
        alert("Game over");
    };

});


var zoom = 50;
$('#scroll-input').change(function () {
    var val = $(this).val();
    Game.set({
        width: width * (val / zoom),
        height: height * (val / zoom),
        zoom: 50 / val
    });
})

$("#knowledge").modal();
