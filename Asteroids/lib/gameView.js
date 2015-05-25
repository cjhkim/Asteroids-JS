(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.GameView = function(game, canvasEl) {
    this.ctx = canvasEl.getContext("2d");;
    this.game = game;
  };

  Asteroids.GameView.prototype.start = function() {
    var game = this.game;
    var ctx = this.ctx;
    window.setInterval((function () {
      game.moveObjects();
      game.draw(ctx);
    }).bind(this), 1000/50);
  };

})();
