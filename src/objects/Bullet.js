const Phaser = require("phaser");

const ACCELERATION = 100;
class Bullet extends Phaser.GameObjects.Ellipse {
  constructor(scene, originX, originY, targetX, targetY) {
    super(scene, originX, originY, 5, 5, 0x00ff00);
    this.initialized = false;
    scene.add.existing(this);
  }

  // For some reason, Phaser needs this empty method.
  preUpdate() {
    if (!this.initialized) {
      this.body.collideWorldBounds = true;
      this.body.bounce.setTo(0.9, 0.9);
      this.initialized = true;
    }
  }
}

Phaser.GameObjects.GameObjectFactory.register("bullet", function (...args) {
  const bullet = new Bullet(this.scene, ...args);

  this.displayList.add(bullet);
  this.updateList.add(bullet);

  return bullet;
});
