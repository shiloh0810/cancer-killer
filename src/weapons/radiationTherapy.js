function radiationTherapy() {

    var tower = createSprite("assets/light.png");
    var power = 0.003;
    var lifeTime = 10000;


    badCellSpreadRate *= power;

    setTimeout(function(){
        tower.destroy();
        badCellSpreadRate /= power;
    }, lifeTime);

    return tower;
}