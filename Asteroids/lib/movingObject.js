(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (args) {
    this.pos = args["pos"];
    this.vel = args["vel"];
    this.radius = args["radius"];
    this.color = args["color"];
    this.game = args["game"];
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false
    );
    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var distx = this.pos[0] - otherObject.pos[0];
    var disty = this.pos[1] - otherObject.pos[1];
    var distance = Math.pow(distx, 2) + Math.pow(disty, 2);
    distance = Math.sqrt(distance);

    return distance < this.radius * 2;
  };

  MovingObject.prototype.collideWith = function(otherObject) {
    // this.game.remove(otherObject);
    // this.game.remove(this);
  };
})();
