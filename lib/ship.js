(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  Asteroids.Ship = function (args) {
    Asteroids.MovingObject.call(this, args);
    this.vel = [0, 0];
    this.color = Asteroids.Ship.COLOR;
    this.radius = Asteroids.Ship.RADIUS;
    this.game = args.game;
    this.angle = 0;
  };

  Asteroids.Ship.RADIUS = 14;
  Asteroids.Ship.COLOR = "#ccc";
  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Asteroids.Ship.prototype.draw = function (ctx) {
    var radians = (this.angle-64)/128 * Math.PI;
    var cos = Math.cos(radians);
    var sin = Math.sin(radians);
    var x = this.pos[0];
    var y = this.pos[1];
    var length = Asteroids.Ship.RADIUS;

    ctx.fillStyle = this.color;
    ctx.beginPath();

    var x1 = (cos + length * sin + x);
    var y1 = (sin - length * cos + y);

    var x2 = (length * cos - length * sin + x);
    var y2 = (length * sin + length * cos + y);

    var x3 = (-length * cos - length * sin + x);
    var y3 = (-length * sin + length * cos + y);

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x2, y2);

    ctx.fill();
  };

  Asteroids.Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Asteroids.Ship.prototype.power = function (impulse) {
    var radians = this.angle * Math.PI / 128;
    this.vel[0] += impulse * Math.cos(radians);
    this.vel[1] += impulse * Math.sin(radians);
  };

  Asteroids.Ship.prototype.turn = function(amount) {
    this.angle = (this.angle + amount) & 0xFF;
  };

  Asteroids.Ship.prototype.move = function() {
    key.getPressedKeyCodes().forEach(function(key){
      if (key === 87) {this.game.ship.power(-0.25);}
      if (key === 83) {this.game.ship.power(0.15);}
      if (key === 65) {this.game.ship.turn(-3);}
      if (key === 68) {this.game.ship.turn(3);}
      if (key === 32) {this.game.ship.shoot();}
    });

    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    this.vel[0] *= 0.98;
    this.vel[1] *= 0.98;
    this.game.wrap(this.pos);
  };

})();


