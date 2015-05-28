(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Asteroid = function(args) {
    Asteroids.MovingObject.call(this, args);
    this.vel = Asteroids.Util.randomVec();
    this.color = "#7a5230";
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  Asteroids.Asteroid.prototype.collideWith = function (otherObject) {
    console.log("hi");
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();

console.log("TEST");
