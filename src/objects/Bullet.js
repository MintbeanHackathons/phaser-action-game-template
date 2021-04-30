const Phaser = require("phaser");

const LIFESPAN = 500;
const SPEED = 1500;
class Bullet extends Phaser.GameObjects.Ellipse {
  constructor(scene, player, pointer) {
    super(scene, player.x, player.y, 5, 5, 0x00ff00);

    this.pointer = pointer;
    this.initialized = false;

    setTimeout(() => {
      this.destroy();
    }, LIFESPAN);
    scene.add.existing(this);
  }

  // For some reason, Phaser needs this empty method.
  preUpdate() {
    if (!this.initialized) {
      this.scene.physics.moveToObject(this, this.pointer, SPEED);
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
