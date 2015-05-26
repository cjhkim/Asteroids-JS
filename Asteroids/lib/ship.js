(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  Asteroids.Ship = function (args) {
    Asteroids.MovingObject.call(this, args);
    this.vel = [10, 5];
    this.color = "#000000";
    this.radius = 20;
    this.game = args["game"];
  }

  Asteroids.Ship.RADIUS = 30;
  Asteroids.Ship.COLOR = "#000000";

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Asteroids.Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Asteroids.Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };
})();
