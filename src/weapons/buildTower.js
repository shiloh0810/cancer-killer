//clicked in index.html => buildTower()

function buildTower(key) {
    var tower;
    if (key == 0) {
        tower = radiofrequencyAblation();
        health -= 100;
    }
    if (key == 1) {
        tower = cryoAblation();
        health -= 200;
    }
    if (key == 2) {
        tower = surgery();
        health -= 400;
    }
    if (key == 3) {
        tower = chemotherapy();
        health -= 200;
    }
    if (key == 4) {
        tower = radiationTherapy();
        health -= 200;
    }
    // if (key == 5) {
    //     tower = embolism();
    //     health -= 100;
    // }
    // if (key == 6) {
    //     tower = Y90();
    //     health -= 100;
    // }
    if (key == 7) {
        tower = transplantation();
        health -= 500;
    }
    // if (key == 8) {
    //     tower = immuno();
    //     health -= 100;
    //}
    towers.push(tower);
};
