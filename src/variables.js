var width = $(window).width() - 180;
var height = $(window).height() - 120;

var Game = Engine('stage');
Game.set({
    width: width,
    height: height,
    debugMode: true
});
Game.preload([
    "./assets/blue.png",
], function () {
    Game.start();
});
Game.setBackdrop("#333");

var cursor = Game.cursor;
var createSprite = Game.createSprite;
var forever = Game.forever;

var W = 20;
var H = 20;
var health = 1000;
var zoom = 100;
var badCells = 0;
var deadCells = 0;

var cells = [];
var towers = [];

var goodCellSpreadRate = 0.0005;
var badCellSpreadRate = 0.05;
var growingRate = 0.005;