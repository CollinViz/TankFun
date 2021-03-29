class PlayGrid extends UIBlock{

    constructor(config) {
        super();

        this.scene = config.scene;
        let iconImg = this.scene.add.image(0,0,"Tile","tree1");
        iconImg.setOrigin(0, 0);
        this.add(iconImg)
        let rowPos = 0
        for (let index = 0; index < config.rows; index++) {
            let row = new PlayGridRow({scene:config.scene,cols:3,x:0,y:0,cellWidth:config.cellWidth,cellHeight:config.cellHeight});   
            row.y = rowPos          
            this.add(row)
            rowPos+=config.cellHeight
            console.log("Row Done")
        }
    }
}

class PlayGridRow extends UIBlock{
    constructor(config) {
        super();
        let colPos = 0
        for (let index = 0; index < config.cols; index++) {
            let col = new PlayGridCol({scene:config.scene,cols:3,x:0,y:config.y,cellWidth:config.cellWidth,cellHeight:config.cellHeight});   
            col.x = colPos          
            col.y = config.y          
            this.add(col)
            colPos+=config.cellWidth
        }
    }
}
class PlayGridCol extends UIBlock{
    cellTiles = ["tree1","tree2","tree3","tree4","tree5","tree6","tree7","tree8","blank1","blank2"];
    constructor(config) {
        super();
        let iconImg = config.scene.add.image(config.x,config.y,"Tile",Phaser.Math.RND.pick(this.cellTiles));
        iconImg.setOrigin(0, 0);
        this.add(iconImg)
        console.log("PlayGridCol",config.x,config.y)
    }
}