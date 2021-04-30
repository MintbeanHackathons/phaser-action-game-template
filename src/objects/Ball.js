const Phaser = require("phaser");

const ACCELERATION = 40;
class Ball extends Phaser.GameObjects.Ellipse {
  constructor(scene, ...args) {
    super(scene, ...args);
    this.initialized = false;
    scene.add.existing(this);
  }

  // For some reason, Phaser needs this empty method.
  preUpdate() {
    if (!this.initialized) {
      this.body.collideWorldBounds = true;
      this.body.bounce.setTo(0.9, 0.9);
    }
  }

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

  fire(x, y) {
    const bullet = this.scene.add.bullet(this.x, this.y, x, y);
  }
}

Phaser.GameObjects.GameObjectFactory.register("ball", function (...args) {
  const ball = new Ball(this.scene, ...args);

  this.displayList.add(ball);
  this.updateList.add(ball);

  return ball;
});
