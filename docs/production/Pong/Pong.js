if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Pong'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Pong'.");
}
var Pong = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwUPAE = Kotlin.throwUPAE;
  var equals = Kotlin.equals;
  var throwCCE = Kotlin.throwCCE;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var ClassCastException = Kotlin.kotlin.ClassCastException;
  Ball.prototype = Object.create(GameObject.prototype);
  Ball.prototype.constructor = Ball;
  Paddle.prototype = Object.create(GameObject.prototype);
  Paddle.prototype.constructor = Paddle;
  Wall.prototype = Object.create(GameObject.prototype);
  Wall.prototype.constructor = Wall;
  function Ball(gameWidth, gameHeight, count, maxSpeed) {
    GameObject.call(this);
    this.gameWidth_9r60ep$_0 = gameWidth;
    this.gameHeight_r6006g$_0 = gameHeight;
    this.count_i5glos$_0 = count;
    this.maxSpeed = maxSpeed;
    this.speedMultiplier = 1.01;
    this.width_8s5nz7$_0 = this.gameHeight / 15;
    this.height_2zap62$_0 = this.width;
    this.x_op7yqd$_0 = (this.gameWidth - this.width) / 2;
    this.y_op7ypi$_0 = (this.gameHeight - this.height) / 2;
    this.xVelocity_56i972$_0 = this.count % 2 === 0 ? 1 : -1;
    this.yVelocity_1xiael$_0 = Math.random() * 2 - 1;
    this.speed = this.maxSpeed;
  }
  Object.defineProperty(Ball.prototype, 'gameWidth', {
    get: function () {
      return this.gameWidth_9r60ep$_0;
    }
  });
  Object.defineProperty(Ball.prototype, 'gameHeight', {
    get: function () {
      return this.gameHeight_r6006g$_0;
    }
  });
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
  };
  Ball.prototype.onCollide_l333uf$ = function (other) {
    if (Kotlin.isType(other, Wall)) {
      this.yVelocity = this.yVelocity * -this.speedMultiplier;
    }
     else {
      this.xVelocity = this.xVelocity * -this.speedMultiplier;
    }
    this.maxSpeed = this.maxSpeed * this.speedMultiplier;
    this.speed = this.maxSpeed;
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
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.lastScorerer = 0;
    this.ball_5gfzb9$_0 = this.ball_5gfzb9$_0;
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
    this.start();
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
      return this.ball.speed === 0;
    },
    set: function (isFinished) {
      this.isFinished_pkry1k$_0 = isFinished;
    }
  });
  Object.defineProperty(Game.prototype, 'allObjects', {
    get: function () {
      return [this.paddles[0], this.paddles[1], this.ball, this.walls[0], this.walls[1], this.walls[2], this.walls[3]];
    }
  });
  Game.prototype.start = function () {
    var $receiver = this.paddles;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.adjustPosition();
    }
    this.ball = new Ball(this.width, this.height, this.lastScorerer, this.height / 40);
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Math_0 = Math;
  Game.prototype.tick = function () {
    var tmp$;
    if (this.isFinished) {
      return;
    }
    var $receiver = this.allObjects;
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var element = $receiver[tmp$_0];
      element.update();
    }
    var $receiver_0 = this.allObjects;
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
      var element_0 = $receiver_0[tmp$_1];
      var $receiver_1 = this.allObjects;
      var destination = ArrayList_init();
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver_1.length; ++tmp$_2) {
        var element_1 = $receiver_1[tmp$_2];
        if (element_0.collides_l333uf$(element_1) && !equals(element_0, element_1))
          destination.add_11rb$(element_1);
      }
      var tmp$_3;
      tmp$_3 = destination.iterator();
      while (tmp$_3.hasNext()) {
        var element_2 = tmp$_3.next();
        element_0.onCollide_l333uf$(element_2);
      }
    }
    var $receiver_2 = this.paddles;
    var destination_0 = ArrayList_init();
    var tmp$_4;
    for (tmp$_4 = 0; tmp$_4 !== $receiver_2.length; ++tmp$_4) {
      var element_3 = $receiver_2[tmp$_4];
      if (element_3.isCpu)
        destination_0.add_11rb$(element_3);
    }
    var tmp$_5;
    tmp$_5 = destination_0.iterator();
    while (tmp$_5.hasNext()) {
      var element_4 = tmp$_5.next();
      var paddleCenter = element_4.y + element_4.height / 2;
      var ballCenter = this.ball.y + this.ball.height / 2;
      var x = paddleCenter - ballCenter;
      if (Math_0.abs(x) >= (this.height / 10 | 0))
        if (paddleCenter > ballCenter)
          element_4.move_6taknv$(true);
        else if (paddleCenter < ballCenter)
          element_4.move_6taknv$(false);
    }
    if (this.isFinished) {
      var $receiver_3 = this.allObjects;
      var destination_1 = ArrayList_init();
      var tmp$_6;
      for (tmp$_6 = 0; tmp$_6 !== $receiver_3.length; ++tmp$_6) {
        var element_5 = $receiver_3[tmp$_6];
        if (element_5.collides_l333uf$(this.ball))
          destination_1.add_11rb$(element_5);
      }
      var ballCollidedObjects = destination_1;
      tmp$ = ballCollidedObjects.iterator();
      while (tmp$.hasNext()) {
        var collidedObject = tmp$.next();
        if (!Kotlin.isType(collidedObject, Wall)) {
          continue;
        }
        if (collidedObject.count === 2) {
          this.lastScorerer = 0;
          this.playerOneScore = this.playerOneScore + 1 | 0;
        }
        if (collidedObject.count === 3) {
          this.lastScorerer = 1;
          this.playerTwoScore = this.playerTwoScore + 1 | 0;
        }
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
  Object.defineProperty(GameObject.prototype, 'speed', {
    get: function () {
      var $receiver = this.xVelocity;
      var tmp$ = Math_0.pow($receiver, 2);
      var $receiver_0 = this.yVelocity;
      var x = tmp$ + Math_0.pow($receiver_0, 2);
      return Math_0.sqrt(x);
    },
    set: function (value) {
      if (this.speed === 0) {
        this.xVelocity = value / Math_0.sqrt(2);
        this.yVelocity = this.xVelocity;
      }
       else {
        var scale = value / this.speed;
        this.xVelocity = this.xVelocity * scale;
        this.yVelocity = this.yVelocity * scale;
      }
    }
  });
  GameObject.prototype.update = function () {
    this.x = this.x + this.xVelocity;
    this.y = this.y + this.yVelocity;
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.x + this.width > this.gameWidth) {
      this.x = this.gameWidth - this.width;
    }
    if (this.y + this.height > this.gameHeight) {
      this.y = this.gameHeight - this.height;
    }
    this.tickAction();
  };
  GameObject.prototype.collides_l333uf$ = function (other) {
    return other.x < this.x + this.width && other.x + other.width > this.x && other.y < this.y + this.height && other.y + other.height > this.y;
  };
  GameObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameObject',
    interfaces: []
  };
  function main$lambda(closure$mainGame) {
    return function () {
      var $receiver = closure$mainGame.paddles[1];
      $receiver.idleTicks = 0;
      $receiver.move_6taknv$(true);
      return Unit;
    };
  }
  function main$lambda_0(closure$mainGame) {
    return function () {
      var $receiver = closure$mainGame.paddles[1];
      $receiver.idleTicks = 0;
      $receiver.move_6taknv$(false);
      return Unit;
    };
  }
  function main$lambda_1(closure$mainGame) {
    return function () {
      var $receiver = closure$mainGame.paddles[0];
      $receiver.idleTicks = 0;
      $receiver.move_6taknv$(true);
      return Unit;
    };
  }
  function main$lambda_2(closure$mainGame) {
    return function () {
      var $receiver = closure$mainGame.paddles[0];
      $receiver.idleTicks = 0;
      $receiver.move_6taknv$(false);
      return Unit;
    };
  }
  function main$lambda$lambda(closure$renderer, closure$image, closure$centerX, closure$centerY, closure$centerW, closure$centerH) {
    return function (it) {
      closure$renderer.drawImage(closure$image, closure$centerX, closure$centerY, closure$centerW, closure$centerH);
      return Unit;
    };
  }
  function main$lambda_3(closure$mainGame, closure$renderer, closure$centerX, closure$centerY, closure$centerW, closure$centerH, closure$keys, closure$keyStates, closure$keyActions, closure$screen, closure$fontSize) {
    return function () {
      var tmp$;
      if (closure$mainGame.isFinished) {
        var image = Kotlin.isType(tmp$ = document.createElement('IMG'), HTMLImageElement) ? tmp$ : throwCCE();
        image.src = 'restart.png';
        closure$renderer.fillRect(closure$centerX, closure$centerY, closure$centerW, closure$centerH);
        image.onload = main$lambda$lambda(closure$renderer, image, closure$centerX, closure$centerY, closure$centerW, closure$centerH);
      }
       else {
        var $receiver = closure$keys;
        var destination = ArrayList_init();
        var tmp$_0;
        for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
          var element = $receiver[tmp$_0];
          if (ensureNotNull(closure$keyStates.get_11rb$(element)))
            destination.add_11rb$(element);
        }
        var tmp$_1;
        tmp$_1 = destination.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          ensureNotNull(closure$keyActions.get_11rb$(element_0))();
        }
        closure$renderer.clearRect(0.0, 0.0, closure$screen.width, closure$screen.height);
        closure$mainGame.tick();
        closure$renderer.fillText(closure$mainGame.playerTwoScore.toString() + ' : ' + closure$mainGame.playerOneScore, closure$screen.width / 2, closure$fontSize, closure$screen.width);
        var $receiver_0 = closure$mainGame.allObjects;
        var tmp$_2;
        for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
          var element_1 = $receiver_0[tmp$_2];
          closure$renderer.fillRect(element_1.x, element_1.y, element_1.width, element_1.height);
        }
      }
      return Unit;
    };
  }
  function main$lambda_4(closure$keyStates) {
    return function (it) {
      var tmp$;
      if (closure$keyStates.keys.contains_11rb$((Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).key)) {
        var $receiver = closure$keyStates;
        var key = it.key;
        $receiver.put_xwzc9p$(key, true);
      }
      return Unit;
    };
  }
  function main$lambda_5(closure$keyStates) {
    return function (it) {
      var tmp$;
      if (closure$keyStates.keys.contains_11rb$((Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).key)) {
        var $receiver = closure$keyStates;
        var key = it.key;
        $receiver.put_xwzc9p$(key, false);
      }
      return Unit;
    };
  }
  function main$lambda_6(closure$mainGame, closure$centerX, closure$centerW, closure$centerY, closure$centerH) {
    return function (it) {
      var tmp$;
      Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : throwCCE();
      if (closure$mainGame.isFinished && it.offsetX > closure$centerX && it.offsetX < closure$centerX + closure$centerW && it.offsetY > closure$centerY && it.offsetY < closure$centerY + closure$centerH) {
        closure$mainGame.start();
      }
      return Unit;
    };
  }
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  function main$lambda_7(closure$screen, closure$mainGame, closure$paddleToDrag, closure$lastMouseY) {
    return function (it) {
      var tmp$;
      var offsetX = {v: null};
      var offsetY = {v: null};
      try {
        Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : throwCCE();
        offsetX.v = it.offsetX;
        offsetY.v = it.offsetY;
      }
       catch (e) {
        if (Kotlin.isType(e, ClassCastException)) {
          offsetX.v = it.targetTouches[0].pageX - closure$screen.getBoundingClientRect().x;
          offsetY.v = it.targetTouches[0].pageY - closure$screen.getBoundingClientRect().y;
        }
         else
          throw e;
      }
      var tmp$_0 = closure$paddleToDrag;
      var $receiver = closure$mainGame.paddles;
      var destination = ArrayList_init();
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
        var element = $receiver[tmp$_1];
        if (offsetX.v > element.x && offsetX.v < element.x + element.width && offsetY.v > element.y && offsetY.v < element.y + element.height)
          destination.add_11rb$(element);
      }
      tmp$_0.v = getOrNull(destination, 0);
      closure$lastMouseY.v = offsetY.v;
      return Unit;
    };
  }
  function main$lambda_8(closure$lastMouseY, closure$paddleToDrag) {
    return function (it) {
      closure$lastMouseY.v = null;
      closure$paddleToDrag.v = null;
      return Unit;
    };
  }
  function main$lambda_9(closure$screen, closure$paddleToDrag, closure$lastMouseY) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      try {
        Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : throwCCE();
        tmp$_1 = it.offsetY;
      }
       catch (e) {
        if (Kotlin.isType(e, ClassCastException)) {
          tmp$_1 = typeof (tmp$_0 = it.targetTouches[0].pageY - closure$screen.getBoundingClientRect().y) === 'number' ? tmp$_0 : throwCCE();
        }
         else
          throw e;
      }
      var offsetY = tmp$_1;
      if (closure$paddleToDrag.v != null) {
        ensureNotNull(closure$paddleToDrag.v).y = ensureNotNull(closure$paddleToDrag.v).y + (offsetY - ensureNotNull(closure$lastMouseY.v));
        ensureNotNull(closure$paddleToDrag.v).idleTicks = 0;
        closure$lastMouseY.v = offsetY;
      }
      return Unit;
    };
  }
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function main(args) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var mainGame = new Game();
    var screen = Kotlin.isType(tmp$ = document.getElementById('screen'), HTMLCanvasElement) ? tmp$ : throwCCE();
    screen.width = mainGame.width;
    screen.height = mainGame.height;
    var renderer = Kotlin.isType(tmp$_0 = screen.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    renderer.fillStyle = '#ADD8E6';
    var fontSize = 50;
    renderer.font = '50px Courier New';
    renderer.textAlign = 'center';
    var keys = ['ArrowUp', 'ArrowDown', 'w', 's'];
    var keyStates = HashMap_init();
    var tmp$_5;
    for (tmp$_5 = 0; tmp$_5 !== keys.length; ++tmp$_5) {
      var element = keys[tmp$_5];
      keyStates.put_xwzc9p$(element, false);
    }
    var keyActions = hashMapOf([to(keys[0], main$lambda(mainGame)), to(keys[1], main$lambda_0(mainGame)), to(keys[2], main$lambda_1(mainGame)), to(keys[3], main$lambda_2(mainGame))]);
    var centerX = (screen.width - mainGame.ball.width) / 2;
    var centerY = (screen.height - mainGame.ball.height) / 2;
    var centerW = mainGame.ball.width;
    var centerH = mainGame.ball.height;
    var iconLink = Kotlin.isType(tmp$_1 = document.createElement('link'), HTMLLinkElement) ? tmp$_1 : throwCCE();
    iconLink.rel = 'icon';
    var icon = Kotlin.isType(tmp$_2 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_2 : throwCCE();
    icon.width = roundToInt(centerW);
    icon.height = roundToInt(centerH);
    var iconDrawer = Kotlin.isType(tmp$_3 = icon.getContext('2d'), CanvasRenderingContext2D) ? tmp$_3 : throwCCE();
    iconDrawer.fillStyle = '#ADD8E6';
    iconDrawer.fillRect(0.0, 0.0, centerW, centerH);
    iconLink.href = icon.toDataURL();
    (Kotlin.isType(tmp$_4 = document.head, HTMLHeadElement) ? tmp$_4 : throwCCE()).appendChild(iconLink);
    window.setInterval(main$lambda_3(mainGame, renderer, centerX, centerY, centerW, centerH, keys, keyStates, keyActions, screen, fontSize), 1000 / 20 | 0);
    window.onkeydown = main$lambda_4(keyStates);
    window.onkeyup = main$lambda_5(keyStates);
    screen.onclick = main$lambda_6(mainGame, centerX, centerW, centerY, centerH);
    var paddleToDrag = {v: null};
    var lastMouseY = {v: null};
    var mousePressed = main$lambda_7(screen, mainGame, paddleToDrag, lastMouseY);
    var mouseReleased = main$lambda_8(lastMouseY, paddleToDrag);
    var mouseMoved = main$lambda_9(screen, paddleToDrag, lastMouseY);
    screen.addEventListener('mousedown', mousePressed);
    screen.addEventListener('touchstart', mousePressed);
    window.addEventListener('mouseup', mouseReleased);
    window.addEventListener('touchend', mouseReleased);
    screen.addEventListener('mousemove', mouseMoved);
    screen.addEventListener('touchmove', mouseMoved);
  }
  function Paddle(gameWidth, gameHeight, count) {
    GameObject.call(this);
    this.gameWidth_tmrae4$_0 = gameWidth;
    this.gameHeight_43b3wd$_0 = gameHeight;
    this.count_oj5yw9$_0 = count;
    this.width_xwgwlu$_0 = this.gameWidth / 50;
    this.height_neem97$_0 = this.gameHeight / 5;
    this.x_gjjzxc$_0 = 0;
    this.y_gjjzy7$_0 = 0;
    this.xVelocity_ep30sd$_0 = 0;
    this.yVelocity_hy2zku$_0 = 0;
    this.idleTicks = 0;
    this.isCpu_reqzsq$_0 = false;
    this.adjustPosition();
  }
  Object.defineProperty(Paddle.prototype, 'gameWidth', {
    get: function () {
      return this.gameWidth_tmrae4$_0;
    }
  });
  Object.defineProperty(Paddle.prototype, 'gameHeight', {
    get: function () {
      return this.gameHeight_43b3wd$_0;
    }
  });
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
  Object.defineProperty(Paddle.prototype, 'isCpu', {
    get: function () {
      return this.idleTicks > 100;
    },
    set: function (isCpu) {
      this.isCpu_reqzsq$_0 = isCpu;
    }
  });
  Paddle.prototype.adjustPosition = function () {
    this.x = this.count === 0 ? 0 : this.gameWidth - this.width;
    this.y = (this.gameHeight - this.height) / 2;
    this.idleTicks = 80;
  };
  Paddle.prototype.move_6taknv$ = function (isUp) {
    this.yVelocity = this.gameHeight / 20;
    if (isUp) {
      this.yVelocity = -this.yVelocity;
    }
  };
  Paddle.prototype.tickAction = function () {
    this.speed = 0;
    this.idleTicks = this.idleTicks + 1 | 0;
  };
  Paddle.prototype.onCollide_l333uf$ = function (other) {
    if (!Kotlin.isType(other, Ball)) {
      return;
    }
    other.x = this.count === 0 ? this.width - 1 : this.x - other.width + 1;
  };
  Paddle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paddle',
    interfaces: [GameObject]
  };
  function Wall(gameWidth, gameHeight, count) {
    GameObject.call(this);
    this.gameWidth_glr0lg$_0 = gameWidth;
    this.gameHeight_8m797n$_0 = gameHeight;
    this.count_2yh3av$_0 = count;
    this.width_6etueq$_0 = this.count < 2 ? this.gameWidth : 1;
    this.height_n7wuob$_0 = this.count > 1 ? this.gameHeight : 1;
    this.x_lc7y8$_0 = this.count < 3 ? 0 : this.gameWidth - 1;
    this.y_lc7xd$_0 = this.count === 0 || this.count > 1 ? 0 : this.gameHeight - 1;
    this.xVelocity_vjfa77$_0 = 0;
    this.yVelocity_safbeq$_0 = 0;
  }
  Object.defineProperty(Wall.prototype, 'gameWidth', {
    get: function () {
      return this.gameWidth_glr0lg$_0;
    }
  });
  Object.defineProperty(Wall.prototype, 'gameHeight', {
    get: function () {
      return this.gameHeight_8m797n$_0;
    }
  });
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
