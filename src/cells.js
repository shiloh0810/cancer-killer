for (var y = 0; y < W; y++) {
    for (var x = 0; x < H; x++) {
        var cell = Game.createSprite(["./assets/blue.png", "./assets/red.png"]);
        cell.x = 120 * x;
        cell.y = 103.6 * y;
        cell.status = 0;
        cell.scale = 0.6;
        if (y % 2 == 0) {
            cell.x += 60;
        }
        cells.push(cell);
    }
}

//status 0: good, 1: growing, 2: bad, 3: dead

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
    if (c != undefined && c.status == 0 && Math.random() < rate) {
        c.status = 1;
    }
}

function spreadNormalCell (index) {
    var rate = goodCellSpreadRate;
    var c = cells[index];
    if (c != undefined && c.status == 3 && Math.random() < rate) {
        c.status = 0;
        c.scale = 0.6;
        c.costumeId = 0;
    }
}

forever(function () {
    if (badCells < 1) {
        var rand = Math.floor(Math.random() * W * H);
        cells[rand].status = 1;
    }
});

