var towers = [];

function buildTower(key) {
    var tower = Game.createSprite(["assets/fire.png", "assets/icecube.png", "assets/knife.png", "assets/happy-liver.png", "assets/shot.png", "assets/light.png", "assets/tower.png", "assets/y-90.png", "assets/dish.png"]);
    tower.costumeId = key;
    tower.originX = tower.x;
    tower.originY = tower.y;
    towers.push(tower);
    health -= 100;
}

Game.when("mousedown", function () {

});

Game.forever(function(){
    //tower function
    for (var i=0; i<towers.length; i++){

        var tower=towers[i];
        
        for(var j=0; j<origin.length; j++){

            if(tower.distanceTo(origin[j])<400){
                origin[j].scale -= 0.008;
                if (origin[j].scale < 0){
                    origin[j].scale = 0;
                }
            }
        }
    }

    //bad to good
    for(var i=0; i<origin.length; i++){
        if(origin[i].scale == 0 && Math.random() < 0.001 ){
            origin[i].costumeId = 0;
            origin[i].scale = 0.6;
            origin.splice(i,1);
        }
    }
});