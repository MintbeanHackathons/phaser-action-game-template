const world = require("../world");
const { width, height } = require("../constants");

module.exports = function create() {
  // spawn player
  const player = this.add.ball(300, 400, 30, 30, 0xffffff);
  world.player = this.physics.add.existing(player);

  // set target
  const target = this.add.ball(
    Math.random() * width,
    Math.random() * height,
    30,
    30,
    0xff0000
  );
  world.target = this.physics.add.existing(target);
  target.body.setVelocityX(Math.random() * 1000);
  target.body.setVelocityY(Math.random() * 500);

  // set walls
  this.physics.world.setBounds(0, 0, width, height);
};
