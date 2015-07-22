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
    var bg = new Image();
    bg.onload = function () {
      ctx.drawImage(bg, 0, 0);
    };
    bg.src = './lib/bg.jpg';

    window.setInterval((function () {
      game.step();
      game.draw(ctx, bg);     

    }).bind(this), 1000/50);
  };
})();
