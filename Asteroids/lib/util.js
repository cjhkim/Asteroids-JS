(function () {
  if (typeof Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  }

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Asteroids.Util.randomVec = function(length){
    return [Math.floor(Math.random()*4) - 2, Math.floor(Math.random()*4) - 2];
  };

})();
