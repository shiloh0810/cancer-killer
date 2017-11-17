var towers = [];

function buildTower() {
    var tower = Game.createSprite("assets/tower_1.png");
    tower.originX = tower.x;
    tower.originY = tower.y;
    towers.push(tower);
}

Game.when("mousedown", function () {

});

buildTower();

Game.forever(function(){
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
});