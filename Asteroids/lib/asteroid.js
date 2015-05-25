(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Asteroid = function(args) {
    Asteroids.MovingObject.call(this, args);
    this.vel = Asteroids.Util.randomVec();
    this.color = "#FF0000";
    this.radius = 40;
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
})();
