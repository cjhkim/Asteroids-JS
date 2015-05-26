(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.asteroids = this.addAsteroids();
    this.ship = new Asteroids.Ship({pos: [400, 300], game: this});
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 0;

  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      var asteroid = new Asteroids.Asteroid({
        pos: this.randomPosition(),
        game: this
      });

      asteroids.push(asteroid);
    }
    return asteroids;
  };

  Game.prototype.randomPosition = function () {
    return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0,800,600);

    this.allObjects().forEach(function(object) {
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function(object) {
      object.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    if (pos[0] < -20) {
      pos[0] = Game.DIM_X;
    }

    if (pos[0] > Game.DIM_X + 20) {
      pos[0] = -20;
    }

    if (pos[1] < -20) {
      pos[1] = Game.DIM_Y;
    }

    if (pos[1] > Game.DIM_Y + 20) {
      pos[1] = -20;
    }
  };

  Game.prototype.checkCollisions = function () {
    var objs = this.allObjects();
    for (var i = 0; i < this.allObjects().length; i++) {
      for (var j = i+1; j < this.allObjects().length; j++) {
        if (objs[i].isCollidedWith(objs[j])){
          objs[i].collideWith(objs[j]);
        }
      }
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (object) {
    var i = this.asteroids.indexOf(object);
    this.asteroids.splice(i, 1);
  };

  Game.prototype.allObjects = function () {
    return this.asteroids.concat([this.ship]);
  };

})();
