(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  Asteroids.Ship = function (args) {
    Asteroids.MovingObject.call(this, args);
    this.vel = [0, 0];
    this.color = "#000000";
    this.radius = 20;
    this.game = args["game"];
    this.angle = 0;
  };

  Asteroids.Ship.RADIUS = 30;
  Asteroids.Ship.COLOR = "#000000";
  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Asteroids.Ship.prototype.draw = function (ctx) {
    var radians = this.angle * Math.PI / 128;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    var xStart = this.pos[0] 
    var yStart = this.pos[1] 
    ctx.moveTo(xStart,yStart);
    ctx.lineTo(xStart-25, yStart+40);
    ctx.lineTo(xStart+25, yStart+40);
    
    // ctx.arc(
    //   this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false
    // );
    ctx.stroke();
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
      if (key === 87) {this.game.ship.power(-.3);}
      if (key === 83) {this.game.ship.power(.3);}
      if (key === 65) {this.game.ship.turn(-2.5);}
      if (key === 68) {this.game.ship.turn(2.5);}
      if (key === 32) {this.game.ship.shoot();}
    });

    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    this.vel[0] *= 0.98;
    this.vel[1] *= 0.98;
    this.game.wrap(this.pos);
  };

})();


