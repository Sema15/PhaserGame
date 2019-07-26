import Phaser from "phaser";
// import logoImg from "../assets/logo/logo.png";
import mainLogo from "../assets/logo1.png"
import BulletImg from "../assets/level/bulletDark2_outline.png";
import towerImg from "../assets/level/tank_bigRed.png";
import enemyImg from "../assets/level/tank_sand.png";
import baseImg from "../assets/level/tankBody_darkLarge_outline.png";
import titleImg from "../assets/ui/title.png";
import cursorImg from "../assets/ui/cursor.png";
import blueButton1 from "../assets/ui/blue_button02.png";
import blueButton2 from "../assets/ui/blue_button03.png";
// import level1 from "../assets/level/level1";
import terrainImg from "../assets/level/mapPack_tilesheet_2X.png"


export default class PreloaderScene extends Phaser.Scene{
    constructor(){
        super('Preloader');
    }
    preload(){
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;

        //add logo image
        this.add.image(width / 2, height / 2 - 100,"logo");

        //load assets needed in our game
        this.load.image("bullet", BulletImg);
        this.load.image("tower", towerImg);
        this.load.image("enemy", enemyImg);
        this.load.image("base", baseImg);
        this.load.image("title", titleImg);
        this.load.image("cursor", cursorImg);
        this.load.image("blueButton1", blueButton1);
        this.load.image("blueButton2", blueButton2);

        //placeholder
        this.load.image('logo2', mainLogo);

        //tile map in Json format
        // this.load.tilemapTiledJSON('level1', level1 );
        this.load.spritesheet('terrainTiles_default', terrainImg, {frameWidth: 64, frameHeight: 64})
    }
    create(){
        // this.scene.start('Game');
    }
}
