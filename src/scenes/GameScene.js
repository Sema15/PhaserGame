import logoImg from "../assets/logo/logo.png";
import Phaser from "phaser";

export default class GameScene extends Phaser.Scene{
    constructor(){
        super('Game');
    }
    preload(){
        this.load.image("logo", logoImg);

    }
    create(){
        var logo = this.add.image(400, 50, "logo");
    }
}
