const Phaser = require("phaser");

const ACCELERATION = 100;

class Ball extends Phaser.GameObjects.Ellipse {
  constructor(scene, ...args) {
    super(scene, ...args);
    scene.add.existing(this);
  }

  // For some reason, Phaser needs this empty method.
  preUpdate() {}

  left() {
    this.body.setVelocityX(this.body.velocity.x - ACCELERATION);
  }

  right() {
    this.body.setVelocityX(this.body.velocity.x + ACCELERATION);
  }

  up() {
    this.body.setVelocityY(this.body.velocity.y - ACCELERATION);
  }

  down() {
    this.body.setVelocityY(this.body.velocity.y + ACCELERATION);
  }
}

module.exports = Ball;
