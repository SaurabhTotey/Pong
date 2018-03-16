if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Pong'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Pong'.");
}
var Pong = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  Ball.prototype = Object.create(GameObject.prototype);
  Ball.prototype.constructor = Ball;
  Paddle.prototype = Object.create(GameObject.prototype);
  Paddle.prototype.constructor = Paddle;
  function Ball() {
    GameObject.call(this);
  }
  Ball.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ball',
    interfaces: [GameObject]
  };
  function Main() {
  }
  Main.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Main',
    interfaces: []
  };
  function main(args) {
  }
  function GameObject() {
  }
  GameObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameObject',
    interfaces: []
  };
  function Paddle() {
    GameObject.call(this);
  }
  Paddle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paddle',
    interfaces: [GameObject]
  };
  var package$com = _.com || (_.com = {});
  var package$saurabhtotey = package$com.saurabhtotey || (package$com.saurabhtotey = {});
  var package$pong = package$saurabhtotey.pong || (package$saurabhtotey.pong = {});
  package$pong.Ball = Ball;
  package$pong.Main = Main;
  package$pong.main_kand9s$ = main;
  package$pong.GameObject = GameObject;
  package$pong.Paddle = Paddle;
  main([]);
  Kotlin.defineModule('Pong', _);
  return _;
}(typeof Pong === 'undefined' ? {} : Pong, kotlin);
