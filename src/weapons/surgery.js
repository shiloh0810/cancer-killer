function surgery() {

    var range = 600;
    var power = 0.1;
    var lifeTime = 1000;

    var tower = createSprite("assets/knife.png");

    tower.forever(
        function(){
            cells.forEach(function(c){
                if (tower.distanceTo(c) < range) {
                    c.scale -= power;
                    if (c.scale < 0) {
                        c.scale = 0;
                        c.status = 3;
                    }
                }
            })
        }
    );

    setTimeout(function(){
        tower.destroy();
    }, lifeTime);

    return tower;
}