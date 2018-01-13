var chemotherapyPower = 0;

function chemotherapy() {

    //power cannot exceed growingRate, we want it cells to slow down, not shrink
    // var power = 0.004;
    chemotherapyPower += 0.004;
    if(chemotherapyPower >= growingRate) chemotherapyPower = growingRate;
    var lifeTime = 10000;

    var tower = createSprite("assets/shot.png");

    setTimeout(function(){
        tower.destroy();
        chemotherapyPower -= 0.004;
        if (chemotherapyPower < 0) {
            chemotherapyPower = 0; //cannot be negative (as above)
        }
    }, lifeTime);

    return tower;
}

forever(function () {
    cells.forEach(function(c){
        if (c.status == 1){
            c.scale -= chemotherapyPower;
        }
    });
});