class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        
    }
    create() {
        console.log("Ready!");
        
        let map = this.make.tilemap({ key: 'backgroundTile' })
        let tileset = map.addTilesetImage('Tile', 'TankBackGround')
        map.createStaticLayer('Level1', tileset)

        this.grid = new PlayGrid({scene:this,rows:6,cols:3,x:0,y:0,cellWidth:32,cellHeight:32});
        this.grid.x = (((game.config.width/32)-3)/2)*32
        this.grid.y = 32 

        this.toolbar = new ToolBar({scene:this});
        
         
    }
    update() {}
}