class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.sKey = null;
        this.fKey = null;
        this.aKey = null;
        this.dKey = null;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.head = this.add.sprite(this.bodyX, this.bodyY - 183, "monsterParts", "body_yellowA.png");
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_yellowC.png");
        my.sprite.rigtArm = this.add.sprite(this.bodyX + 75, this.bodyY + 40, "monsterParts", "arm_whiteB.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX - 75, this.bodyY + 40, "monsterParts", "arm_whiteB.png").setFlipX(true);
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 50, this.bodyY + 140, "monsterParts", "leg_redB.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 50, this.bodyY + 140, "monsterParts", "leg_redB.png").setFlipX(true);        
        my.sprite.redAntenna = this.add.sprite(this.bodyX + 40, this.bodyY - 285, "monsterParts", "detail_red_antenna_large.png");
        my.sprite.whiteAntenna = this.add.sprite(this.bodyX + 10, this.bodyY - 285, "monsterParts", "detail_white_antenna_large.png");
        my.sprite.yellowAntenna = this.add.sprite(this.bodyX - 30, this.bodyY - 285, "monsterParts", "detail_yellow_antenna_large.png").setFlipX(true);
        my.sprite.leftEye = this.add.sprite(this.bodyX - 50, this.bodyY - 200, "monsterParts", "eye_dead.png");
        my.sprite.rightEye = this.add.sprite(this.bodyX + 50, this.bodyY - 200, "monsterParts", "eye_dead.png");

        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY - 150, "monsterParts", "mouth_closed_happy.png");
        my.sprite.smile.visible = true;
        my.sprite.fang = this.add.sprite(this.bodyX, this.bodyY - 145, "monsterParts", "mouth_closed_fangs.png").setFlipY(true);
        my.sprite.fang.visible = false;
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (Phaser.Input.Keyboard.JustDown(this.sKey)) {
            my.sprite.smile.visible = true;
            my.sprite.fang.visible = false;
        }
        if (Phaser.Input.Keyboard.JustDown(this.fKey)) {
            my.sprite.smile.visible = false;
            my.sprite.fang.visible = true;
        }
        if (this.aKey.isDown) {
            for (const property in my.sprite) {
                my.sprite[property].setX(my.sprite[property].x + 1);
            }
        }
        if (this.dKey.isDown) {
            for (const property in my.sprite) {
                my.sprite[property].setX(my.sprite[property].x - 1);
            }
        }
    }

}