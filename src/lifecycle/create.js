const world = require("../world");
const { width, height } = require("../constants");

module.exports = function create() {
  // spawn walls
  const walls = [
    this.add.wall(0, 0, width, 10), // top wall
    this.add.wall(0, width, 10, height), // right wall
    this.add.wall(0, height, width, 10), // bottom wall
    this.add.wall(0, 0, 10, height), // left wall
  ].forEach((wall) => this.physics.add.existing(wall));

  // spawn player
  const player = this.add.ball(300, 400, 30, 30, 0xffffff);
  world.player = this.physics.add.existing(player);

  // walls
  this.physics.world.setBounds(0, 0, width, height);
};
