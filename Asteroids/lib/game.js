(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Game = function() {
    this.asteroids = this.addAsteroids();
    this.ship = new Asteroids.Ship({pos: [400, 300], game: this});
  };

  Asteroids.Game.DIM_X = 800;
  Asteroids.Game.DIM_Y = 600;
  Asteroids.Game.NUM_ASTEROIDS = 0;

  Asteroids.Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for (var i = 0; i < Asteroids.Game.NUM_ASTEROIDS; i++) {
      var asteroid = new Asteroids.Asteroid({
        pos: this.randomPosition(),
        game: this
      });

      asteroids.push(asteroid);
    }
    return asteroids;
  };

  Asteroids.Game.prototype.randomPosition = function () {
    return [Math.random() * Asteroids.Game.DIM_X, Math.random() * Asteroids.Game.DIM_Y];
  };

  Asteroids.Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0,800,600);

    this.allObjects().forEach(function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Asteroids.Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function(asteroid) {
      asteroid.move();
    });
  };

  Asteroids.Game.prototype.wrap = function(pos) {
    if (pos[0] < -20) {
      pos[0] = Asteroids.Game.DIM_X;
    }

    if (pos[0] > Asteroids.Game.DIM_X + 20) {
      pos[0] = -20;
    }

    if (pos[1] < -20) {
      pos[1] = Asteroids.Game.DIM_Y;
    }

    if (pos[1] > Asteroids.Game.DIM_Y + 20) {
      pos[1] = -20;
    }
  };

  Asteroids.Game.prototype.checkCollisions = function () {
    var objs = this.allObjects();
    for (var i = 0; i < this.allObjects().length; i++) {
      for (var j = i+1; j < this.allObjects().length; j++) {
        if (objs[i].isCollidedWith(objs[j])){
          objs[i].collideWith(objs[j]);
        }
      }
    }
  };

  Asteroids.Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Asteroids.Game.prototype.remove = function (object) {
    var i = this.asteroids.indexOf(object);
    this.asteroids.splice(i, 1);
  };

  Asteroids.Game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship]);
  };

})();
