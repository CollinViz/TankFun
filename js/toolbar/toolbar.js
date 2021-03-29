class ToolBar extends UIBlock{

    constructor(config) {
        super();

        this.scene = config.scene;
        let iconImg = this.scene.add.image(0,0,"Environment","Min2.1");
        iconImg.setOrigin(0, 0);
        this.add(iconImg)
        console.log("ToolBar font",game.config.width / config.textScale)
        this.textfield = this.scene.add.text(16, 32, "9999", {
            fontSize: game.config.width / 35,
            color: "#ffffff"
        });
        this.textfield.setOrigin(0.5, 0.5);
        this.add(this.textfield);
        

        let Shelled = this.scene.add.image(32,10,"Structure","sprite11").setOrigin(0, 0);
        this.add(Shelled)
        this.ShelledText = this.scene.add.text(32+16,10, "1", {
            fontSize: game.config.width / 35,
            color: "#ffffff"
        });
        this.ShelledText.setOrigin(0.5, 0.5);
        this.add(this.ShelledText);
        let Tank = this.scene.add.image(64,10,"Units","sprite9").setOrigin(0, 0);
        this.add(Tank)
        this.TankText = this.scene.add.text(64+16, 10, "2", {
            fontSize: game.config.width / 35,
            color: "#ffffff"
        });
        this.TankText.setOrigin(0.5, 0.5);
        this.add(this.TankText);
    }
}

