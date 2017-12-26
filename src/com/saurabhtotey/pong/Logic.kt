package com.saurabhtotey.pong

import kotlin.js.Math

val gameWidth = 1600
val gameHeight = 900

fun makePaddles(numPaddles: Int): Array<Paddle> {
    val paddlesFor4Players = TODO("")
}

class Game(val numHumans: Int, val numComputers: Int) {
    lateinit var ball: Ball
    val paddles = makePaddles(numHumans + numComputers)

    fun makeBall() {
        ball = Ball(25.0, Vector(if (Math.random() < 0.5) 1.0 else -1.0, 0.0), Vector(0.5 * gameWidth, 0.5 * gameHeight))
    }

    fun getCollisionAngleBetween(ball: Ball, paddle: Paddle): Int? {
        TODO("implement")
    }
}