const Phaser = require("phaser");

class Wall extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height) {
    super(scene, x, y, width, height, 0xff0000);
    this.initialized = false;
    scene.add.existing(this);
  }

  // For some reason, Phaser needs this empty method.
  preUpdate() {
    if (!this.initialized) {
      this.body.allowGravity = false;
      this.body.immovable = true;
      this.body.setFrictionX(1);
      this.initialized = true;
    }
  }

  // make the wall static
  ready() {}
}

Phaser.GameObjects.GameObjectFactory.register("wall", function (...args) {
  const wall = new Wall(this.scene, ...args);

  this.displayList.add(wall);
  this.updateList.add(wall);

  return wall;
});
