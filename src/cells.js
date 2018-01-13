for (var y = 0; y < W; y++) {
    for (var x = 0; x < H; x++) {
        var cell = Game.createSprite(["./assets/blue.png", "./assets/red.png"]);
        //distance btwn cells
        cell.x = 120 * x;
        cell.y = 103.6 * y;
        //initialize cells to be all good
        cell.status = 0;
        cell.scale = 0.6;
        //triangular pattern
        if (y % 2 == 0) {
            cell.x += 60;
        }
        cells.push(cell);
    }
}

//status 0: good, 1: growing, 2: bad, 3: dead

//finding cells to change status (jump between forever and spread function)
forever(function() {
    cells.forEach(function(c) {
        if (c.status == 0) {
            var index = cells.indexOf(c);
            spreadNormalCell(index + 1);
            spreadNormalCell(index - 1);
            spreadNormalCell(index + W);
            spreadNormalCell(index - W);
            spreadNormalCell(index + W + 1);
            spreadNormalCell(index - W + 1);
        }

        if (c.status == 1) {
            c.scale += growingRate;
            if (c.scale >= 2) {
                //turn red and add to bad list
                c.status = 2;
                c.costumeId = 1;
            }
        }

        if (c.status == 2) {
            var index = cells.indexOf(c);
            spreadCancerCell(index + 1);
            spreadCancerCell(index - 1);
            spreadCancerCell(index + W);
            spreadCancerCell(index - W);
            spreadCancerCell(index + W + 1);
            spreadCancerCell(index - W + 1);
        }
    });
});

function spreadCancerCell (index) {
    var rate = badCellSpreadRate;
    var c = cells[index];
    //if the cell is present (not on the sides) and still good, turn it to bad
    if (c != undefined && c.status == 0 && Math.random() < rate) {
        c.status = 1;
    }
}

function spreadNormalCell (index) {
    var rate = goodCellSpreadRate;
    var c = cells[index];
    //if the cell is present (not on the sides) and still dead, turn it to good
    if (c != undefined && c.status == 3 && Math.random() < rate) {
        c.status = 0;
        health += 5;
        c.scale = 0.6;
        c.costumeId = 0;
    }
}

//cancer keep growing
forever(function () {
    if (badCells < 3) {
        var rand = Math.floor(Math.random() * W * H);
        cells[rand].status = 1;
    }
});

