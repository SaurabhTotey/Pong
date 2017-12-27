package com.saurabhtotey.pong

import kotlin.js.Math

val gameWidth = 1600
val gameHeight = 900

fun getCollisionAngleBetween(ball: Ball, paddle: Object): Int? {
    TODO("implement")
}

class Game(val numHumans: Int, val numComputers: Int) {

    lateinit var ball: Ball
    val paddles = arrayListOf<Object>(Paddle(Direction.NEGATIVE, Axis.Y), Paddle(Direction.POSITIVE, Axis.Y)).addAll(when {
        numHumans + numComputers == 2 -> {
            arrayOf(Wall(Direction.NEGATIVE), Wall(Direction.POSITIVE))
        }
        numHumans + numComputers == 4 -> {
            arrayOf(Paddle(Direction.NEGATIVE, Axis.X), Paddle(Direction.POSITIVE, Axis.X))
        }
        else -> throw Exception("Invalid number of players")
    })

    init {
        makeBall()
    }

    fun tick() {
        this.ball.move()
    }

    fun makeBall() {
        ball = Ball(Vector(0.0 + gameWidth, 0.0 + gameHeight).magnitude / 50, Vector(if (Math.random() < 0.5) 1.0 else -1.0, 0.0))
    }

}