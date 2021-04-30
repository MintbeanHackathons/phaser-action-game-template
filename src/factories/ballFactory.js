const Phaser = require("phaser");
const Ball = require("../objects/Ball");

Phaser.GameObjects.GameObjectFactory.register("ball", function (...args) {
  const ball = new Ball(this.scene, ...args);

  this.displayList.add(ball);
  this.updateList.add(ball);

  return ball;
});
