var Game = Engine('stage');
var W = 30;
var H = 30;

var cursor = Game.cursor;

var width = $(window).width();
var height = $(window).height();

//健康值 0~1000;
//<0 -> game over
// wouldn't exceed 1000

var health = 1000; 

Game.set({
    width: width, // Default: 640px
    height: height, // Default: 480px
    debugMode: true // Default: false
});
Game.preload([
    "./assets/blue.png",
],function() {
    Game.start();
});
Game.setBackdrop("#333");


var cells = [];
var dragging = false;

//this is the array used to save cancer cells
var origin = [];


for(var y=0; y<W; y++) {
    for(var x=0; x<H; x++) {
        
        var cell = Game.createSprite(["./assets/blue.png", "./assets/red.png"]);
        cell.costumeId = 0;
        cell.scale = 0.6;
        cell.x = 120*x;
        cell.y = 103.6*y;

        // 初始化的位置
        cell.originX = 120*x;
        cell.originY = 103.6*y;

        if (y%2 == 0) {
            cell.x += 60;
            cell.originX += 60;
        }

        cells.push(cell);
    }
}

var o = cells[Math.floor(Math.random()*W*H)];
origin.push(o);

var pos = {};
Game.when("mousedown", function () {
    dragging = true;
    pos.x = cursor.x;
    pos.y = cursor.y;
});

Game.when("mouseup", function () {
    dragging = false;
    for(var i=0; i<cells.length; i++) {
        cells[i].originX = cells[i].x;
        cells[i].originY = cells[i].y;
    }

    for (var i = 0; i < towers.length; i++) {
        towers[i].originX = towers[i].x;
        towers[i].originY = towers[i].y;
    }

    var tmp = cells[0].x;
    if (tmp > 800) {
        for (var x=0; x<cells.length; x++) {
            cells[x].x -= tmp - 800; 
            cells[x].originX -= tmp - 800;
        }
        for (var i = 0; i < towers.length; i++) {
            towers[i].x -= tmp - 800; 
            towers[i].originX -= tmp - 800;
        }
    }

    var tmp = cells[0].y;
    if (tmp > 800) {
        for (var x=0; x<cells.length; x++) {
            cells[x].y -= tmp - 800; 
            cells[x].originY -= tmp - 800;
        }
        for (var i = 0; i < towers.length; i++) {
            towers[i].y -= tmp - 800; 
            towers[i].originY -= tmp - 800;
        }
    }

    var tmp = cells[899].x;
    if (tmp < width-100) {
        for (var x=0; x<cells.length; x++) {
            cells[x].x += width - 100 - tmp; 
            cells[x].originX += width - 100 - tmp;
        }
        for (var i = 0; i < towers.length; i++) {
            towers[i].x += width - 100 - tmp; 
            towers[i].originX += width - 100 - tmp;
        }
    }

    var tmp = cells[899].y;
    if (tmp < height-100) {
        for (var x=0; x<cells.length; x++) {
            cells[x].y += height - 100 - tmp; 
            cells[x].originY += height - 100 - tmp;
        }
        for (var i = 0; i < towers.length; i++) {
            towers[i].x += width - 100 - tmp; 
            towers[i].originX += width - 100 - tmp;
        }
    }
});


Game.forever(function () {

    if (dragging) {
        offsetX = cursor.x - pos.x;
        offsetY = cursor.y - pos.y;


        for(var i=0; i<cells.length; i++) {
            cells[i].x = cells[i].originX + offsetX;
            cells[i].y = cells[i].originY + offsetY;
        }

        for (var i = 0; i < towers.length; i++) {
            towers[i].x = towers[i].originX + offsetX;
            towers[i].y = towers[i].originY + offsetY;
        }
    }

    for(var i=0; i< origin.length; i++){
        if(origin[i].scale < 2){
            origin[i].scale +=0.005;
        }else{
            origin[i].costumeId = 1;
            var index = cells.indexOf(origin[i]);

            if (origin.indexOf(cells[index+1]) == -1 && Math.random() < 0.001){
                if(cells[index+1]!=undefined) origin.push(cells[index+1]);
            } 
            if (origin.indexOf(cells[index-1]) == -1 && Math.random() < 0.001){
                if(cells[index-1]!=undefined) origin.push(cells[index-1]);
            } 
            if (origin.indexOf(cells[index+W]) == -1 && Math.random() < 0.001){
                if(cells[index+W]!=undefined) origin.push(cells[index+W]);
            } 
            if (origin.indexOf(cells[index-W]) == -1 && Math.random() < 0.001){
                if(cells[index-W]!=undefined) origin.push(cells[index-W]);
            } 
            if (origin.indexOf(cells[index+W+1]) == -1 && Math.random() < 0.001){
                if(cells[index+W+1]!=undefined) origin.push(cells[index+W+1]);
            } 
            if (origin.indexOf(cells[index-W+1]) == -1 && Math.random() < 0.001){
                if(cells[index-W+1]!=undefined) origin.push(cells[index-W+1]);
            }
        }
    }
});

Game.forever(function(){
    var percent = health / 10;
    $("#health").width(percent + '%');
    if (health<=0){
        Game.stop();
        alert ("Game over");
    };

});


var zoom = 50;
$('#scroll-input').change(function () {
    var val = $(this).val();
    Game.set({
        width: width*(val/zoom),
        height: height*(val/zoom),
        zoom: 50/val
    });
}) 

$("#knowledge").modal();
