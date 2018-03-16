package com.saurabhtotey.pong

/**
 * The class that could be a game's paddle
 * Are the only objects the players can directly control
 */
class Paddle(val gameWidth: Int, val gameHeight: Int, override val count: Int) : GameObject() {
}