(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Game = function() {
    this.asteroids = this.addAsteroids();
  };

  Asteroids.Game.DIM_X = 800;
  Asteroids.Game.DIM_Y = 600;
  Asteroids.Game.NUM_ASTEROIDS = 1000;

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

    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Asteroids.Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function(asteroid) {
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
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = i+1; j < this.asteroids.length - 1; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])){
          this.asteroids[i].collideWith(this.asteroids[j]);
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



  // var MovingObject = Asteroids.MovingObject = function (args) {
  //   this.pos = args["pos"];
  //   this.vel = args["vel"];
  //   this.radius = args["radius"];
  //   this.color = args["color"];
  // }
  //
  // MovingObject.prototype.draw = function (ctx) {
  //   ctx.fillStyle = this.color;
  //   ctx.beginPath();
  //
  //   ctx.arc(
  //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false
  //   );
  //   ctx.fill();
  // };
  //
  // MovingObject.prototype.move = function () {
  //   this.pos[0] += this.vel[0];
  //   this.pos[1] += this.vel[1];
  // }
  //
  // MovingObject.prototype.start = function(ctx) {
  //   var ctx = ctx.getContext("2d");
  //
  //   // render at 60 FPS
  //   window.setInterval((function () {
  //     this.draw(ctx);
  //   }).bind(this), 1000 / 60)
  // };

})();
