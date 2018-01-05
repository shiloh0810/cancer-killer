function transplantation() {

    var tower = createSprite("assets/happy-liver.png");

    var i = -1;

    cells.forEach(function(c){
        c.status=0;
    })
        
    
    tower.forever(function(){
        i ++;
        if(i>cells.length) tower.destroy();
        var c = cells[i];
        if (c) {
            c.scale = 0.6;
            c.costumeId = 0;
            
        }
        
    });

    return tower;
        
};