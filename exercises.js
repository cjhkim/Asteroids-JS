function sum () {
  return Array.prototype.slice.call(arguments).reduce(function (a,b) { return a+b; } );
}

Function.prototype.myBind = function (myObj) {
  var that = this;
  var args = Array.prototype.slice.call(arguments, 1);

  return function () {
    var args2 = Array.prototype.slice.call(arguments);
    args = args.concat(args2);
    that.apply(myObj, args);
  };
};

function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce(function (a,b) { return a+b; } );
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// var sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function (numArgs) {
  var that = this;
  var args = [];

  function anonymous(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      that.apply(null, args);
    } else {
      return anonymous;
    }
  }
  return anonymous;
};

Function.prototype.inherits = function (SuperClass) {
  function Surrogate () { };
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
};

function MovingObject () {
}

MovingObject.prototype.printTest = function () {
  console.log("TESTING");
};

function Ship () {};
Ship.inherits(MovingObject);
var testShip = new Ship();
testShip.printTest();

function Asteroid () {};
Asteroid.inherits(MovingObject);
Asteroid.prototype.blowUp = function () {
  console.log("BLOWING UP");
};

// testShip.blowUp();
// MovingObject.blowUp();
