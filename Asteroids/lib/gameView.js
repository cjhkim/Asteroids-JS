(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.GameView = function(game, canvasEl) {
    canvasEl.height = Asteroids.Game.DIM_Y;
    canvasEl.width = Asteroids.Game.DIM_X;
    this.ctx = canvasEl.getContext("2d");
    this.game = game;
  };

  Asteroids.GameView.prototype.start = function() {
    var game = this.game;
    var ctx = this.ctx;
    var boundKeys = this.bindKeyHandlers();

    window.setInterval((function () {
      game.step();
      game.draw(ctx);
    }).bind(this), 1000/50);
  };

  Asteroids.GameView.prototype.bindKeyHandlers = function () {
    var that = this;
    key('w', function(){that.game.ship.power([0,-1])} );
    key('a', function(){that.game.ship.power([-1,0])} );
    key('s', function(){that.game.ship.power([0,1])} );
    key('d', function(){that.game.ship.power([1,0])} );
    // key('a', this.game.ship.power([-1,0]) );
    // key('s', this.game.ship.power([0,1]) );
    // key('d', this.game.ship.power([1,0]) );
  };

})();
