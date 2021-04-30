const world = require("../world");
const Phaser = require("Phaser");

const ACCELERATION = 50;

module.exports = function update() {
  const cursors = this.input.keyboard.createCursorKeys();

  const { left, right, up, down } = cursors;
  const { player } = world;

  if (left.isDown) {
    player.left();
  }

  if (right.isDown) {
    player.right();
  }

  if (up.isDown) {
    player.up();
  }

  if (down.isDown) {
    player.down();
  }

  this.input.on("pointerdown", function (pointer) {
    const bullet = this.scene.add.bullet(player.x, player.y);
    this.scene.physics.add.existing(bullet);

    // const angle = Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y);
    // bullet.

    this.scene.physics.moveToObject(bullet, pointer, 2000);
  });
};
