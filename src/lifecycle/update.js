const world = require("../world");

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
};
