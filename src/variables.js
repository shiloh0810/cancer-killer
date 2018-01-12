var width = $(window).width() - 180;
var height = $(window).height() - 120;

var Game = Engine('stage');
Game.set({
    width: width,
    height: height,
    debugMode: true
});
Game.preload([
    "./assets/arrow.png",
    "./assets/blue.png",
    "./assets/dish.png",
    "./assets/fire.png",
    "./assets/happy-liver.png",
    "./assets/icecube.png",
    "./assets/knife.png",
    "./assets/light.png",
    "./assets/medicine.png",
    "./assets/medicine2.png",
    "./assets/red.png",
    "./assets/shot.png",
    "./assets/target.png",
    "./assets/tower_1.png",
    "./assets/tower.png",
    "./assets/y-90.png",

]);
Game.setBackdrop("#333");

var cursor = Game.cursor;
var createSprite = Game.createSprite;
var forever = Game.forever;

var W = 30;
var H = 30;
var health = 1000;
var zoom = 100;
var badCells = 0;
var deadCells = 0;

var cells = [];
var towers = [];

var goodCellSpreadRate = 0.0005;
var badCellSpreadRate = 0.05;
var growingRate = 0.005;

var level = 1;

$('.js-start-game').on('click', function () {
    Game.start()
})