const world = require("../world");

module.exports = function create() {
  console.log(this);
  const player = this.add.ball(300, 400, 30, 30, 0xffffff);
  world.player = this.physics.add.existing(player);
};
