if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Pong'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Pong'.");
}
var Pong = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  Ball.prototype = Object.create(GameObject.prototype);
  Ball.prototype.constructor = Ball;
  Paddle.prototype = Object.create(GameObject.prototype);
  Paddle.prototype.constructor = Paddle;
  Wall.prototype = Object.create(GameObject.prototype);
  Wall.prototype.constructor = Wall;
  function Ball(gameWidth, gameHeight, count, maxSpeed) {
    GameObject.call(this);
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.count_i5glos$_0 = count;
    this.maxSpeed = maxSpeed;
    this.width_8s5nz7$_0 = this.gameHeight / 15;
    this.height_2zap62$_0 = this.width;
    this.x_op7yqd$_0 = (this.gameWidth - this.width) / 2;
    this.y_op7ypi$_0 = (this.gameHeight - this.height) / 2;
    this.xVelocity_56i972$_0 = this.count % 2 === 0 ? 1 : -1;
    this.yVelocity_1xiael$_0 = Math.random() * 2 - 1;
  }
  Object.defineProperty(Ball.prototype, 'count', {
    get: function () {
      return this.count_i5glos$_0;
    }
  });
  Object.defineProperty(Ball.prototype, 'width', {
    get: function () {
      return this.width_8s5nz7$_0;
    }
  });
  Object.defineProperty(Ball.prototype, 'height', {
    get: function () {
      return this.height_2zap62$_0;
    }
  });
  Object.defineProperty(Ball.prototype, 'x', {
    get: function () {
      return this.x_op7yqd$_0;
    },
    set: function (x) {
      this.x_op7yqd$_0 = x;
    }
  });
  Object.defineProperty(Ball.prototype, 'y', {
    get: function () {
      return this.y_op7ypi$_0;
    },
    set: function (y) {
      this.y_op7ypi$_0 = y;
    }
  });
  Object.defineProperty(Ball.prototype, 'xVelocity', {
    get: function () {
      return this.xVelocity_56i972$_0;
    },
    set: function (xVelocity) {
      this.xVelocity_56i972$_0 = xVelocity;
    }
  });
  Object.defineProperty(Ball.prototype, 'yVelocity', {
    get: function () {
      return this.yVelocity_1xiael$_0;
    },
    set: function (yVelocity) {
      this.yVelocity_1xiael$_0 = yVelocity;
    }
  });
  Ball.prototype.tickAction = function () {
    this.speed = this.maxSpeed;
  };
  Ball.prototype.onCollide_l333uf$ = function (other) {
    if (this.y < 0 || this.y > this.gameHeight) {
      this.yVelocity = this.yVelocity * -1.1;
    }
     else {
      this.xVelocity = this.xVelocity * -1.1;
    }
    this.maxSpeed = this.maxSpeed * 1.1;
  };
  Ball.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ball',
    interfaces: [GameObject]
  };
  var Array_0 = Array;
  function Game() {
    this.width = 480;
    this.height = 320;
    this.ball = new Ball(this.width, this.height, 0, 5);
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Paddle(this.width, this.height, i);
    }
    this.paddles = array;
    var array_0 = Array_0(4);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Wall(this.width, this.height, i_0);
    }
    this.walls = array_0;
    this.isFinished_pkry1k$_0 = false;
    this.allObjects = [this.paddles[0], this.paddles[1], this.ball, this.walls[0], this.walls[1], this.walls[2], this.walls[3]];
  }
  Object.defineProperty(Game.prototype, 'isFinished', {
    get: function () {
      return this.ball.speed === 0;
    },
    set: function (isFinished) {
      this.isFinished_pkry1k$_0 = isFinished;
    }
  });
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  Game.prototype.tick = function () {
    if (this.isFinished) {
      return;
    }
    var $receiver = this.allObjects;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.update();
    }
    var $receiver_0 = this.allObjects;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      var $receiver_1 = this.allObjects;
      var destination = ArrayList_init();
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
        var element_1 = $receiver_1[tmp$_1];
        if (element_0.collides_l333uf$(element_1))
          destination.add_11rb$(element_1);
      }
      var tmp$_2;
      tmp$_2 = destination.iterator();
      while (tmp$_2.hasNext()) {
        var element_2 = tmp$_2.next();
        element_0.onCollide_l333uf$(element_2);
      }
    }
  };
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function GameObject() {
  }
  var Math_0 = Math;
  Object.defineProperty(GameObject.prototype, 'speed', {
    get: function () {
      var $receiver = this.xVelocity;
      var tmp$ = Math_0.pow($receiver, 2);
      var $receiver_0 = this.yVelocity;
      var x = tmp$ + Math_0.pow($receiver_0, 2);
      return Math_0.sqrt(x);
    },
    set: function (value) {
      var scale = value / this.speed;
      this.xVelocity = this.xVelocity * scale;
      this.yVelocity = this.yVelocity * scale;
    }
  });
  GameObject.prototype.update = function () {
    this.x = this.x + this.xVelocity;
    this.y = this.y + this.yVelocity;
    this.tickAction();
  };
  GameObject.prototype.collides_l333uf$ = function (other) {
    return other.x < this.x + this.width && other.x + other.width > this.x && other.y < this.y + this.height && other.height + other.y > this.y;
  };
  GameObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameObject',
    interfaces: []
  };
  function main$clearScreen(closure$renderer, closure$screen) {
    return function () {
      var oldStyle = closure$renderer.fillStyle;
      closure$renderer.fillStyle = '#000';
      closure$renderer.fillRect(0.0, 0.0, closure$screen.width, closure$screen.height);
      closure$renderer.fillStyle = oldStyle;
    };
  }
  function main$lambda(closure$mainGame, closure$windowInterval, closure$clearScreen, closure$renderer) {
    return function () {
      if (closure$mainGame.isFinished) {
        window.clearInterval(closure$windowInterval.v);
      }
      closure$clearScreen();
      var $receiver = closure$mainGame.allObjects;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        closure$renderer.fillRect(element.x, element.y, element.width, element.height);
      }
      return Unit;
    };
  }
  function main(args) {
    var tmp$, tmp$_0;
    var mainGame = new Game();
    var screen = Kotlin.isType(tmp$ = document.getElementById('screen'), HTMLCanvasElement) ? tmp$ : throwCCE();
    screen.width = mainGame.width;
    screen.height = mainGame.height;
    var renderer = Kotlin.isType(tmp$_0 = screen.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    renderer.fillStyle = '#ADD8E6';
    var clearScreen = main$clearScreen(renderer, screen);
    var windowInterval = {v: -1};
    windowInterval.v = window.setInterval(main$lambda(mainGame, windowInterval, clearScreen, renderer), 1000 / 20 | 0);
  }
  function Paddle(gameWidth, gameHeight, count) {
    GameObject.call(this);
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.count_oj5yw9$_0 = count;
    this.width_xwgwlu$_0 = this.gameWidth / 50;
    this.height_neem97$_0 = this.gameHeight / 5;
    this.x_gjjzxc$_0 = this.count === 0 ? 0 : this.gameWidth - this.width;
    this.y_gjjzy7$_0 = (this.gameHeight - this.height) / 2;
    this.xVelocity_ep30sd$_0 = 0;
    this.yVelocity_hy2zku$_0 = 0;
  }
  Object.defineProperty(Paddle.prototype, 'count', {
    get: function () {
      return this.count_oj5yw9$_0;
    }
  });
  Object.defineProperty(Paddle.prototype, 'width', {
    get: function () {
      return this.width_xwgwlu$_0;
    }
  });
  Object.defineProperty(Paddle.prototype, 'height', {
    get: function () {
      return this.height_neem97$_0;
    }
  });
  Object.defineProperty(Paddle.prototype, 'x', {
    get: function () {
      return this.x_gjjzxc$_0;
    },
    set: function (x) {
      this.x_gjjzxc$_0 = x;
    }
  });
  Object.defineProperty(Paddle.prototype, 'y', {
    get: function () {
      return this.y_gjjzy7$_0;
    },
    set: function (y) {
      this.y_gjjzy7$_0 = y;
    }
  });
  Object.defineProperty(Paddle.prototype, 'xVelocity', {
    get: function () {
      return this.xVelocity_ep30sd$_0;
    },
    set: function (xVelocity) {
      this.xVelocity_ep30sd$_0 = xVelocity;
    }
  });
  Object.defineProperty(Paddle.prototype, 'yVelocity', {
    get: function () {
      return this.yVelocity_hy2zku$_0;
    },
    set: function (yVelocity) {
      this.yVelocity_hy2zku$_0 = yVelocity;
    }
  });
  Paddle.prototype.tickAction = function () {
    this.speed = 0;
  };
  Paddle.prototype.onCollide_l333uf$ = function (other) {
  };
  Paddle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paddle',
    interfaces: [GameObject]
  };
  function Wall(gameWidth, gameHeight, count) {
    GameObject.call(this);
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.count_2yh3av$_0 = count;
    this.width_6etueq$_0 = this.count < 2 ? this.gameWidth : 1;
    this.height_n7wuob$_0 = this.count > 1 ? this.gameHeight : 1;
    this.x_lc7y8$_0 = this.count < 3 ? 0 : this.gameWidth - 1;
    this.y_lc7xd$_0 = this.count === 0 || this.count > 1 ? 0 : this.gameHeight - 1;
    this.xVelocity_vjfa77$_0 = 0;
    this.yVelocity_safbeq$_0 = 0;
  }
  Object.defineProperty(Wall.prototype, 'count', {
    get: function () {
      return this.count_2yh3av$_0;
    }
  });
  Object.defineProperty(Wall.prototype, 'width', {
    get: function () {
      return this.width_6etueq$_0;
    }
  });
  Object.defineProperty(Wall.prototype, 'height', {
    get: function () {
      return this.height_n7wuob$_0;
    }
  });
  Object.defineProperty(Wall.prototype, 'x', {
    get: function () {
      return this.x_lc7y8$_0;
    },
    set: function (x) {
      this.x_lc7y8$_0 = x;
    }
  });
  Object.defineProperty(Wall.prototype, 'y', {
    get: function () {
      return this.y_lc7xd$_0;
    },
    set: function (y) {
      this.y_lc7xd$_0 = y;
    }
  });
  Object.defineProperty(Wall.prototype, 'xVelocity', {
    get: function () {
      return this.xVelocity_vjfa77$_0;
    },
    set: function (xVelocity) {
      this.xVelocity_vjfa77$_0 = xVelocity;
    }
  });
  Object.defineProperty(Wall.prototype, 'yVelocity', {
    get: function () {
      return this.yVelocity_safbeq$_0;
    },
    set: function (yVelocity) {
      this.yVelocity_safbeq$_0 = yVelocity;
    }
  });
  Wall.prototype.tickAction = function () {
  };
  Wall.prototype.onCollide_l333uf$ = function (other) {
    if (this.count > 1 && Kotlin.isType(other, Ball)) {
      other.speed = 0;
    }
  };
  Wall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Wall',
    interfaces: [GameObject]
  };
  var package$com = _.com || (_.com = {});
  var package$saurabhtotey = package$com.saurabhtotey || (package$com.saurabhtotey = {});
  var package$pong = package$saurabhtotey.pong || (package$saurabhtotey.pong = {});
  package$pong.Ball = Ball;
  package$pong.Game = Game;
  package$pong.GameObject = GameObject;
  package$pong.main_kand9s$ = main;
  package$pong.Paddle = Paddle;
  package$pong.Wall = Wall;
  main([]);
  Kotlin.defineModule('Pong', _);
  return _;
}(typeof Pong === 'undefined' ? {} : Pong, kotlin);
