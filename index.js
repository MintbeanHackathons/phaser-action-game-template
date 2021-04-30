import Phaser from "phaser";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: () => {},
    create: () => {},
    update: () => {},
  },
};

var game = new Phaser.Game(config);
