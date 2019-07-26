import logoImg from "../assets/logo/logo.png";
import Phaser from "phaser";

export default class BootScene extends Phaser.Scene{
    constructor(){
        super('Boot');
    }
    preload(){
        this.load.image("logo", logoImg);
    }
    create(){
        this.scene.start('Preloader');
    }
}
