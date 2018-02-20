if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Pong'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Pong'.");
}
var Pong = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwCCE = Kotlin.throwCCE;
  var throwUPAE = Kotlin.throwUPAE;
  var math = Kotlin.kotlin.math;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Any = Object;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  function Ball(radius, velocity, bounceSpeedMultiplier) {
    if (bounceSpeedMultiplier === void 0)
      bounceSpeedMultiplier = 1.05;
    this.radius = radius;
    this.velocity = velocity;
    this.bounceSpeedMultiplier_0 = bounceSpeedMultiplier;
    this.location_twkhng$_0 = new Vector(0.5 * logicalCoordinates.x, 0.5 * logicalCoordinates.y);
  }
  Object.defineProperty(Ball.prototype, 'location', {
    get: function () {
      return new Vector(this.location_twkhng$_0.x, this.location_twkhng$_0.y);
    }
  });
  Ball.prototype.move = function () {
    this.location.x = this.location.x + this.velocity.x;
    this.location.y = this.location.y + this.velocity.y;
  };
  Ball.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ball',
    interfaces: []
  };
  var body;
  var screen;
  var renderer;
  var referenceDimension;
  function get_referenceDimension() {
    if (referenceDimension == null)
      return throwUPAE('referenceDimension');
    return referenceDimension;
  }
  function set_referenceDimension(referenceDimension_0) {
    referenceDimension = referenceDimension_0;
  }
  var game;
  function get_game() {
    if (game == null)
      return throwUPAE('game');
    return game;
  }
  function set_game(game_0) {
    game = game_0;
  }
  function main$lambda(it) {
    screen.width = body.clientWidth;
    screen.height = body.clientHeight;
    set_referenceDimension((screen.height / aspectRatio.y | 0) < (screen.width / aspectRatio.x | 0) ? 'y' : 'x');
    return null;
  }
  function main(args) {
    var tmp$;
    set_game(new Game(true));
    body.onresize = main$lambda;
    (tmp$ = body.onresize) != null ? tmp$(new Event('')) : null;
    renderer.arc(get_game().ball.location.x, get_game().ball.location.y, get_game().ball.radius, 0.0, 2 * math.PI);
  }
  var aspectRatio;
  var scaling;
  var logicalCoordinates;
  function getCollisionAngleBetween(ball, paddle) {
    return null;
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function Game(computerOpponent) {
    this.computerOpponent = computerOpponent;
    this.ball_5gfzb9$_0 = this.ball_5gfzb9$_0;
    this.paddles = ArrayList_init();
    this.p1Score = 0;
    this.p2Score = 0;
    this.makeBall();
  }
  Object.defineProperty(Game.prototype, 'ball', {
    get: function () {
      if (this.ball_5gfzb9$_0 == null)
        return throwUPAE('ball');
      return this.ball_5gfzb9$_0;
    },
    set: function (ball) {
      this.ball_5gfzb9$_0 = ball;
    }
  });
  Object.defineProperty(Game.prototype, 'isFinished', {
    get: function () {
      return this.p1Score === 10 || this.p2Score === 10;
    }
  });
  var wrapFunction = Kotlin.wrapFunction;
  var Unit = Kotlin.kotlin.Unit;
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  Game.prototype.tick = function () {
    if (this.isFinished) {
      return;
    }
    this.ball.move();
    var $receiver = this.paddles;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = getCollisionAngleBetween(this.ball, element)) != null) {
        destination.add_11rb$(tmp$_0);
      }
    }
    if (!destination.isEmpty()) {
      this.ball.velocity.x = -this.ball.velocity.x;
    }
    if (this.ball.location.y - this.ball.radius < 0 || this.ball.location.y + this.ball.radius > logicalCoordinates.y) {
      this.ball.velocity.y = -this.ball.velocity.y;
    }
  };
  Game.prototype.makeBall = function () {
    this.ball = new Ball(50.0, new Vector(0.0, 0.0));
  };
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function Direction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$POSITIVE_instance = new Direction('POSITIVE', 0);
    Direction$NEGATIVE_instance = new Direction('NEGATIVE', 1);
  }
  var Direction$POSITIVE_instance;
  function Direction$POSITIVE_getInstance() {
    Direction_initFields();
    return Direction$POSITIVE_instance;
  }
  var Direction$NEGATIVE_instance;
  function Direction$NEGATIVE_getInstance() {
    Direction_initFields();
    return Direction$NEGATIVE_instance;
  }
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$POSITIVE_getInstance(), Direction$NEGATIVE_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'POSITIVE':
        return Direction$POSITIVE_getInstance();
      case 'NEGATIVE':
        return Direction$NEGATIVE_getInstance();
      default:throwISE('No enum constant com.saurabhtotey.pong.Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function Paddle(startingDirection, length, speed) {
    this.length = length;
    this.speed = speed;
    this.location = new Vector(startingDirection === Direction$POSITIVE_getInstance() ? 0 : logicalCoordinates.x, (logicalCoordinates.y / 2 | 0) - (this.length / 2 | 0) | 0);
  }
  Paddle.prototype.move_ublopl$ = function (direction) {
    var tmp$;
    tmp$ = this.location;
    var tmp$_0;
    tmp$_0 = tmp$.y;
    var tmp$_1;
    if (direction === Direction$POSITIVE_getInstance()) {
      tmp$_1 = this.speed;
    }
     else {
      tmp$_1 = -this.speed | 0;
    }
    tmp$.y = tmp$_0 + tmp$_1 | 0;
  };
  Paddle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paddle',
    interfaces: []
  };
  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }
  var Math_0 = Math;
  Object.defineProperty(Vector.prototype, 'magnitude', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      var x = (typeof (tmp$ = this.x) === 'number' ? tmp$ : throwCCE()) * (typeof (tmp$_0 = this.x) === 'number' ? tmp$_0 : throwCCE()) + (typeof (tmp$_1 = this.y) === 'number' ? tmp$_1 : throwCCE()) * (typeof (tmp$_2 = this.y) === 'number' ? tmp$_2 : throwCCE());
      return (tmp$_3 = Math_0.sqrt(x)) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var scalarChange = (typeof (tmp$ = value) === 'number' ? tmp$ : throwCCE()) / (typeof (tmp$_0 = this.magnitude) === 'number' ? tmp$_0 : throwCCE());
      this.x = (tmp$_2 = (typeof (tmp$_1 = this.x) === 'number' ? tmp$_1 : throwCCE()) * scalarChange) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      this.y = (tmp$_4 = (typeof (tmp$_3 = this.y) === 'number' ? tmp$_3 : throwCCE()) * scalarChange) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE();
    }
  });
  Vector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$saurabhtotey = package$com.saurabhtotey || (package$com.saurabhtotey = {});
  var package$pong = package$saurabhtotey.pong || (package$saurabhtotey.pong = {});
  package$pong.Ball = Ball;
  Object.defineProperty(package$pong, 'body', {
    get: function () {
      return body;
    }
  });
  Object.defineProperty(package$pong, 'screen', {
    get: function () {
      return screen;
    }
  });
  Object.defineProperty(package$pong, 'renderer', {
    get: function () {
      return renderer;
    }
  });
  Object.defineProperty(package$pong, 'referenceDimension', {
    get: get_referenceDimension,
    set: set_referenceDimension
  });
  Object.defineProperty(package$pong, 'game', {
    get: get_game,
    set: set_game
  });
  package$pong.main_kand9s$ = main;
  Object.defineProperty(package$pong, 'aspectRatio', {
    get: function () {
      return aspectRatio;
    }
  });
  Object.defineProperty(package$pong, 'scaling', {
    get: function () {
      return scaling;
    }
  });
  Object.defineProperty(package$pong, 'logicalCoordinates', {
    get: function () {
      return logicalCoordinates;
    }
  });
  package$pong.getCollisionAngleBetween_c0cmd3$ = getCollisionAngleBetween;
  package$pong.Game = Game;
  Object.defineProperty(Direction, 'POSITIVE', {
    get: Direction$POSITIVE_getInstance
  });
  Object.defineProperty(Direction, 'NEGATIVE', {
    get: Direction$NEGATIVE_getInstance
  });
  package$pong.Direction = Direction;
  package$pong.Paddle = Paddle;
  package$pong.Vector = Vector;
  var tmp$, tmp$_0, tmp$_1;
  body = Kotlin.isType(tmp$ = document.getElementById('body'), HTMLBodyElement) ? tmp$ : throwCCE();
  screen = Kotlin.isType(tmp$_0 = document.getElementById('screen'), HTMLCanvasElement) ? tmp$_0 : throwCCE();
  renderer = Kotlin.isType(tmp$_1 = screen.getContext('2d'), CanvasRenderingContext2D) ? tmp$_1 : throwCCE();
  aspectRatio = new Vector(16, 9);
  scaling = 100;
  logicalCoordinates = new Vector(Kotlin.imul(aspectRatio.x, scaling), Kotlin.imul(aspectRatio.y, scaling));
  main([]);
  Kotlin.defineModule('Pong', _);
  return _;
}(typeof Pong === 'undefined' ? {} : Pong, kotlin);
