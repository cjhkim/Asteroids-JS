(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Asteroid = function(args) {
    Asteroids.MovingObject.call(this, args);
    this.vel = Asteroids.Util.randomVec();
    this.color = "#FF0000";
    this.radius = 20;
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  Asteroids.Asteroid.prototype.collideWith = function (otherObject) {
    console.log("hi");
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();
