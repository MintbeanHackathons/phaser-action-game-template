const world = require("./world");

const ACCELERATION = 50;

module.exports = function update() {
  const cursors = this.input.keyboard.createCursorKeys();

  const { left, right, up, down } = cursors;

  if (left.isDown) {
    world.player.body.setVelocityX(world.player.body.velocity.x - ACCELERATION);
  }

  if (right.isDown) {
    world.player.body.setVelocityX(world.player.body.velocity.x + ACCELERATION);
  }

  if (up.isDown) {
    world.player.body.setVelocityY(world.player.body.velocity.y - ACCELERATION);
  }

  if (down.isDown) {
    world.player.body.setVelocityY(world.player.body.velocity.y + ACCELERATION);
  }
};
