function cryoAblation() {
    
    var range = 400;
    var power = 0.008;
    var lifeTime = 12000;

    var tower = createSprite("assets/icecube.png");
    tower.forever(function () {
        cells.forEach(function (c) {
            if (tower.distanceTo(c) < range && c.status == 2) {
                c.scale -= power;
                if (c.scale < 0) {
                    c.status = 3;
                }
            }
        });
    });
    setTimeout(function(){
        tower.destroy();
    }, lifeTime);

    return tower;
}