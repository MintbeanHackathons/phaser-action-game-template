const Phaser = require("phaser");
const create = require("./lifecycle/create");
const preload = require("./lifecycle/preload");
const update = require("./lifecycle/update");

// factories
require("./objects/Ball.js");
require("./objects/Bullet.js");
require("./objects/Wall.js");

// constants
const { width, height } = require("./constants");

var config = {
  type: Phaser.AUTO,
  width,
  height,
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
