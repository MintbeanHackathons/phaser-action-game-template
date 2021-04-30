const Phaser = require("phaser");
const create = require("./create");
const preload = require("./preload");
const update = require("./update");

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      fps: 60,
      gravity: {
        y: 2000,
      },
    },
  },
};

var game = new Phaser.Game(config);
